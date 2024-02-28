#!/usr/bin/env python3

from model.audiogram import Audiogram
from model.pdf import Pdf
from model.user import User

from utils.exception import ClientInputError
from lib import HubspotClient
import time
import os
import asyncio
from uuid import uuid4
from model.task_queue import TaskManager, TaskQueue
import threading


if __name__ == "__main__":

    data = asyncio.run(
        HubspotClient.get_contact_by_email("mosesbwire@gmail.com"))
    print(data)
