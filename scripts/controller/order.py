import hmac
import hashlib
import os
from dotenv import load_dotenv
from flask import make_response, jsonify

load_dotenv()
def fulfilled_order(request):
    SHOPIFY_WEBHOOK_SECRET = os.getenv("SHOPIFY_WEBHOOK_SECRET")
    print(SHOPIFY_WEBHOOK_SECRET)
    shopify_hmac = request.headers.get('X-Shopify-Hmac-SHA256')
    print(shopify_hmac)
    payload = request.data
    calculated_hmac = hmac.new(
        key=SHOPIFY_WEBHOOK_SECRET.encode('utf-8'),
        msg=payload,
        digestmod=hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(calculated_hmac, shopify_hmac):
        print("Webhook verification failed.")
        return make_response(jsonify({"response": "ERR"}), 401)

    print("Webhook verified successfully!")
    print("Payload:", request.json)  # Log the incoming payload
    
    return make_response(jsonify({"response": "OK"}), 200)