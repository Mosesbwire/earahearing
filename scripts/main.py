#!/usr/bin/env python3

from model.audiogram import Audiogram
from model.pdf import Pdf
from model.user import User
from model.giveaway import Giveaway
from utils.exception import ClientInputError
from lib import HubspotClient
import time
import os
import asyncio
from uuid import uuid4
from model.hearingcapability import HearingCapability
import threading


if __name__ == "__main__":
    print("Starting EARA Giveaway Script...")
    giveaway = Giveaway(
       credentials_file="eara-giveaway-90a9996989e9.json",
       spreadsheet_name="EARA JULY GIVEAWAY",
       base_url="https://www.earahearing.com/pages/explore-li-hearing-aid-giveaway-enter-to-win")

    # Example usage
    # email = "moses@gmail.com"
    # first_name = "Moses"
    # last_name = "Musa"
    # if giveaway.user_exists(email):
    #     print(f"User with email {email} already exists.")
    # else:
    #     result = giveaway.add_user(email, first_name, last_name)
    #     if result:
    #         print("User added successfully.")
    #     else:
    #         print("Failed to add user.")

    user = giveaway.update_user_referral_points("https://www.earahearing.com/pages/explore-li-hearing-aid-giveaway-enter-to-win?ref=3418c26400")  # Replace with an actual referral code to test
    print(user)
    