#!/usr/bin/env python3
import asyncio
from dotenv import load_dotenv

from os import getenv
from flask import make_response, jsonify
from lib.email_service.mailchimp import MailchimpEmailProvider
from model.process import process
from model.audiogram import Audiogram
from model.pdf import Pdf
from model.email import Email
from utils.exception import ApplicationError, ClientInputError

load_dotenv()

MAILCHIMP_API_KEY = getenv('MAILCHIMP_TRANSACTIONAL_API_KEY')

email_provider = MailchimpEmailProvider(MAILCHIMP_API_KEY)


def process_request(request):
    data = request.get_json()

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

        user_data = data.get("user")
        email.send_email_with_attachment(user_data, pdf_string,'Audiogram')
        
        return make_response(jsonify({"data": 'sent'}), 201)
    except ClientInputError as e:
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
