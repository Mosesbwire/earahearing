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
from model.hearingcapability import HearingCapability
import threading


if __name__ == "__main__":

    data = {
        "a": "20",
        "b": "25",
        "c": "25",
        "d": "25",
        "e": "50"
    }
    data_ = {
        "a": "20",
        "b": "80",
        "c": "25",
        "d": "25",
        "e": "20"
    }
    
    hearing_capability = HearingCapability(data, data_)

    ans = hearing_capability.isNormalHearing(data)
    ans2 = hearing_capability.hearing_loss_level(data)

    print(ans)
    print(ans2)


    