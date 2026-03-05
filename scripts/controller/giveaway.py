import base64
from dotenv import load_dotenv
import json
from lib.email_service.mailchimp import MailchimpEmailProvider
from os import getenv
from flask import request, make_response, jsonify
from model.giveaway import Giveaway


load_dotenv()
credentials = getenv('EARA_GIVEAWAY_CREDENTIALS')
EARA_GIVEAWAY_CREDENTIALS = json.loads(base64.b64decode(credentials).decode('utf-8'))
BASE_URL = getenv('BASE_URL')
EARA_SPREADSHEET_NAME = getenv('EARA_GIVEAWAY_SPREADSHEET_ID')
MAILCHIMP_API_KEY = getenv('MAILCHIMP_TRANSACTIONAL_API_KEY')
MAIL_THANK_YOU_TEMPLATE_ID = getenv('MAIL_THANK_YOU_TEMPLATE')
MAIL_ENTER_GIVEAWAY_TEMPLATE_ID = getenv('MAIL_ENTER_GIVEAWAY_TEMPLATE')
MAIL_REFER= getenv('MAIL_REFER_TEMPLATE')


email_provider = MailchimpEmailProvider(MAILCHIMP_API_KEY)

giveaway = Giveaway(
        credentials_file=EARA_GIVEAWAY_CREDENTIALS,
        spreadsheet_name=EARA_SPREADSHEET_NAME,
        base_url=BASE_URL
    )

def create_user(request: request):
    data = request.get_json()
    ref = request.args.get('ref')
    if not data:
        return make_response(jsonify({"error": {
            "message": "request object is empty",
            "errors": []
        }}), 400)
    
    email = data.get("email")
    first_name = data.get("first_name")
    last_name = data.get("last_name")

    if not email or not first_name or not last_name:
        return make_response(jsonify({"error": {
            "message": "Missing required fields: email, first_name, last_name",
            "errors": []
        }}), 400)

    
    user_created = giveaway.add_user(email, first_name, last_name)

    if not user_created:
        return make_response(jsonify({"error": {
            "message": "Failed to create user or user already exists",
            "errors": []
        }}), 400)

    if ref:
        giveaway.update_user_referral_points(f"{giveaway.base_url}?ref={ref}")
    
    referral_link = giveaway.create_referral_link(email)

    email_data = giveaway.prepare_email_data({
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
    }, MAIL_THANK_YOU_TEMPLATE_ID, referral_link)


    email_provider.send_email(email_data)

    return make_response(jsonify({"message": "User created successfully", "referral_link": referral_link}), 201)
    
def send_transactional_email(request: request):
    print("transactional email request received")
    data = request.get_json()
    if not data:
        return make_response(jsonify({"error": {
            "message": "request object is empty",
            "errors": []
        }}), 400)
        
    first_name = data.get("first_name")
    last_name = data.get("last_name")   
    email = data.get("email")
    subject = data.get("subject")
    if not first_name or not last_name or not email:
        return make_response(jsonify({"error": {
            "message": "Required fields are missing: first_name, last_name, email",
            "errors": []
        }}), 400)
    email_data = giveaway.prepare_email_data({
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "subject": subject
    }, MAIL_ENTER_GIVEAWAY_TEMPLATE_ID, "https://earahearing.com/pages/explore-li-hearing-aid-giveaway-enter-to-win?ref=6561d4d46e")
    if not email_data:
        return make_response(jsonify({"error": {
            "message": "Failed to prepare email data",
            "errors": []
        }}), 500)
    try:
        email_provider.send_email(email_data)
        return make_response(jsonify({"message": "Email sent successfully"}), 200)
    except Exception as e:
        return make_response(jsonify({"error": {
            "message": str(e),
            "errors": []
        }}), 500)
