from dotenv import load_dotenv
from os import getenv
from flask import request, make_response, jsonify
from model.giveaway import Giveaway


load_dotenv()
EARA_GIVEAWAY_CREDENTIALS = getenv('EARA_GIVEAWAY_CREDENTIALS')
BASE_URL = getenv('BASE_URL')
EARA_SPREADSHEET_NAME = getenv('EARA_GIVEAWAY_SPREADSHEET_ID')

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

    giveaway = Giveaway(
        credentials_file=EARA_GIVEAWAY_CREDENTIALS,
        spreadsheet_name=EARA_SPREADSHEET_NAME,
        base_url=BASE_URL
    )

    
        

    user_created = giveaway.add_user(email, first_name, last_name)

    if not user_created:
        return make_response(jsonify({"error": {
            "message": "Failed to create user or user already exists",
            "errors": []
        }}), 400)

    if ref:
        giveaway.update_user_referral_points(f"{giveaway.base_url}?ref={ref}")
    
    referral_link = giveaway.create_referral_link(email)

    return make_response(jsonify({"message": "User created successfully", "referral_link": referral_link}), 201)
    
    