#!/usr/bin/env python3

import asyncio
from hubspot.crm.contacts import ApiException
import json
from model.audiogram import Audiogram
from model.user import User
from model.pdf import Pdf
from lib import HubspotClient
from uuid import uuid4
from utils.exception import ApplicationError, ClientInputError


pdf_maker = Pdf()


def build_audiogram(right: dict, left: dict):
    frequencies = [500, 1000, 2000, 4000, 8000]

    audiogram = Audiogram({"right": right, "left": left}, frequencies)
    plot = audiogram.create_audiogram(
        'Frequency(Hz)', 'Decibel (db)', 'Frequency(Hz)')
    return plot


async def process(data: dict):

    pdf_maker = Pdf()
    user = User()

    right = data.get("right")

    left = data.get("left")

    user_data = data.get("user")

    test_results = json.loads(data.get("test_data"))

    test_data = {**user_data, **test_results}

    plot = build_audiogram(right, left)

    audiogram = f'{uuid4()}.pdf'
    test = f'{uuid4()}.pdf'

    task_audiogram = asyncio.create_task(
        pdf_maker.create_audiogram_pdf(audiogram, plot))
    task_test = asyncio.create_task(
        pdf_maker.create_test_result_pdf(test_data, test))
    task_user = asyncio.create_task(user.create_user_contact(**user_data))
    try:
        user_id, audiogram_name, test_name = await asyncio.gather(task_user, task_audiogram, task_test)
        return {"user_id": user_id, "audiogram_name": audiogram_name, "test_name": test_name}
    except ClientInputError as e:
        if (e.message == 'ContactExists'):
            user_id = await user.get_contact_by_email(user_data.get("email"))
            return {"user_id": user_id, "audiogram_name": audiogram, "test_name": test}
        else:
            raise e


def process_uploads(resp_data: dict):
    data = resp_data.get("data")
    audiogram_file = data.get("audiogram_name")
    test_file = data.get("test_name")
    user_id = data.get("user_id")
    try:
        audiogram_id = HubspotClient.upload_file(
            audiogram_file, 'audiogram')
        test_id = HubspotClient.upload_file(
            test_file, 'test_results')
        HubspotClient.attach_note_with_attachments_to_contact(
            user_id, [str(audiogram_id), str(test_id)])
        pdf_maker.remove_files([audiogram_file, test_file])
    except Exception as e:
        pass
