#!/usr/bin/env python3

import asyncio
from .user import User
from .pdf import Pdf
from lib.crm.hubspot_api import HubspotCrm
from uuid import uuid4
import queue


class TaskQueue:

    def __init__(self, max_size=10):
        self.task_queue = asyncio.Queue(max_size)

    async def addTask(self, data):
        await self.task_queue.put(data)

    async def getTask(self):
        await self.task_queue.get()

    async def join(self):
        await self.task_queue.join()

    def done(self):
        self.task_queue.task_done()


class TaskManager:

    async def upload_queue(self, queue: TaskQueue, data: dict, crmClient: HubspotCrm):
        print('uploading')
        audiogram_file_id = await crmClient.upload_file(
            data.get('audiogram_file'), 'audiogram')
        test_result_file_id = await crmClient.upload_file(
            data.get('result_file'), 'test_results')

        data["attachement_ids"] = [
            str(audiogram_file_id), str(test_result_file_id)]
        print(data)
        await queue.addTask(data)

    async def attachement_queue(self, queue: TaskQueue, crmClient: HubspotCrm):
        print('attaching')
        data = await queue.getTask()
        print(data)
        await crmClient.attach_note_with_attachments_to_contact(
            data.get("contact_id"), data.get("attachement_ids"))
        queue.done()
