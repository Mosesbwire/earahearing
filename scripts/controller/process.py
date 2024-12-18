#!/usr/bin/env python3
import asyncio
from dotenv import load_dotenv

from os import getenv
from flask import make_response, jsonify
from lib.email_service.mailchimp import MailchimpEmailProvider
from lib.email_service.mailchimp_marketing import add_member_to_store_audience
from model.process import process
from model.audiogram import Audiogram
from model.hearingcapability import HearingCapability
from model.pdf import Pdf
from model.email import Email
from utils.exception import ApplicationError, ClientInputError

load_dotenv()

MAILCHIMP_API_KEY = getenv('MAILCHIMP_TRANSACTIONAL_API_KEY')

email_provider = MailchimpEmailProvider(MAILCHIMP_API_KEY)


def process_request(request):
    
    data = request.get_json()
    print(data)
    if not data:
        return make_response(jsonify({"error": {
            "message": "request object is empty",
            "errors": []
        }}))
    try:
        
        audiogram = Audiogram({"right": data.get("right"), "left": data.get("left")})
        email = Email(email_provider)
        pdf = Pdf()
        file_name = asyncio.run(audiogram.create_pdf(pdf))
        pdf_string = pdf.pdf_to_base64(file_name)
        hearingCapability = HearingCapability(data.get("right"), data.get("left"))
        capability_data = {}

        hearing_loss_right = hearingCapability.right_hearing_capability()
        hearing_loss_left = hearingCapability.left_hearing_capability()
        description_right = hearingCapability.get_hearing_loss_description(hearing_loss_right)  
        description_left = hearingCapability.get_hearing_loss_description(hearing_loss_left)  

        capability_data["level"] = {
            "left": hearing_loss_left,
            "right": hearing_loss_right
        }
        capability_data["description_right"] = description_right  
        capability_data["description_left"] = description_left

        user_data = data.get("user")
        user_data["hearing_capability"] = capability_data
        print(f'HEARING_CAPABILITY {hearingCapability.normalHearing()}')
        if hearingCapability.normalHearing():
            email_provider.default_template = False
        
        print(email_provider.default_template)
        email.send_email_with_attachment(user_data, pdf_string,'Audiogram')
        pdf.remove_files([file_name])
        print(user_data)
        add_member_to_store_audience(user_data)
        return make_response(jsonify({"data": 'sent'}), 201)
    except ClientInputError as e:
        print(e)
        if e.message == 'InputValidationFailed':
            return make_response(jsonify({"error": {
                "message": 'User input validation error',
                "errors": e.errors
            }}), 400)
        if e.message == 'InvalidHearingTestData':
            return make_response(jsonify({
                "error": {
                    "message": 'Hearing test data is missing/ invalid',
                    "errors": []
                }
            }), 400)
        if e.message == 'InvalidBiometricData':
            return make_response(jsonify({
                "error": {
                    "message": 'Hearing Test Quiz answers are missing / invalid answers',
                    "errors": []
                }
            }), 400)

    except ApplicationError as e:
        return make_response(jsonify({"error": {
            "message": "Server Error Occured. Try again later",
            "errors": []
        }}), 500)
