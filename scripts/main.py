#!/usr/bin/env python3
from lib.email_service.mailchimp import MailchimpEmailProvider

from os import getenv
from dotenv import load_dotenv
from model.audiogram import Audiogram
from model.pdf import Pdf
from model.user import User
from model.giveaway import Giveaway
from model.csv import ShopifyCustomerData
from utils.exception import ClientInputError
from lib import HubspotClient
import time
import json
import base64
import pandas as pd
import asyncio
from uuid import uuid4
from model.hearingcapability import HearingCapability
import threading


if __name__ == "__main__":
    print("Starting email sending script...")
    load_dotenv()
    
    MAILCHIMP_API_TEST_KEY = "md-7R5m3i9ltLwLj3EmL7hEJA"
    email_provider = MailchimpEmailProvider(MAILCHIMP_API_TEST_KEY)
    
    # users = [
    #         "scott.gardner2@icloud.com",
    #         "swappdirk777@gmail.com",
    #         "flawson62@yahoo.com",
    #         "nettierigsby299@gmail.com",
    #         "dianesurvivor@hotmail.com",
    #         "rosiedaelf91@gmail.com",
    #         "alanbasil69@gmail.com",
    #         "lonidani811@gmail.com",
    #         "redtillman@columbus.rr.com",
    #         "annajackpaidpost@gmail.com",
    #         "PhilMorris23100@yahoo.com",
    #         "AndreasBarakos2123@hotmail.com",
    #         "WilliamViriatio210@Yahoo.com",
    #         "SarahParks1003@yahoo.com",
    #         "benjamincapasso99@yahoo.com",
    #         "millerharry@aol.com",
    #         "epressler@hotmail.com",
    #         "dickyates@gmail.com",
    #         "bigjim195250@yahoo.com",
    #         "lentzwall@hotmail.com",
    #         "drd3205@gmail.com",
    #         "RPagan510@gmail.com",
    #         "Sharmere512@gmail.com",
    #         "Sissycorley@yahoo.com",
    #         "steveramsey@ymail.com",
    #         "shannon.Pacheco@gmail.com",
    #         "juliandidonato@gmail.com",
    #         "shiffer43@icloud.com",
    #         "cory81977@hotmail.com",
    #         "sailorlizzy007@gmail.com",
    #         "colinscars@hotmail.com",
    #         "cbmjones2010@gmail.com",
    #         "mjesabel@gmail.com",
    #         "connierittmaier@ymail.com",
    #         "testop@gmail.com",
    #         "roaminlpn1962@yahoo.com",
    #         "dan599@yahoo.com",
    #         "jameshm44@gmail.com",
    #         "rhannah3@cox.net",
    #         "mpetric.lwf@gmail.com",
    #         "larryrussolino11@gmail.com",
    #         "dbemery@cox.net",
    #     ]
    
    for user in users:
       
        message = {
            "from_email": "info@earahearing.com", 
            "from_name": "Eara Hearing",
            "subject": "Don't just hear, connect: Join the Eara family.",
            "to": [
                {
                    "email": user,
                    "type": "to"
                }
            ],
            "merge_vars": [
                {
                    "rcpt": user,
                    "vars": []
                }
            ]
        }

        email_provider.send_email({"message": message, "template_name": "non-subs"})
        print(f"message: {message}")
        print(f"Sent email to {user}")
    
    

   