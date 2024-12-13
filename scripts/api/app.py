#!/usr/bin/env python3

# app module
from concurrent.futures import ThreadPoolExecutor
from controller.process import process_request
from controller.order import fulfilled_order
from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from model.process import process_uploads
from lib.email_service.mailchimp_marketing import add_member_to_store_audience


app = Flask(__name__)

app.url_map.strict_slashes = False
CORS(app, origins=["*"])


thread_pool = ThreadPoolExecutor(max_workers=5)


@app.route('/status')
def status():
    return make_response(jsonify({"status": "OK"}), 200)


@app.route('/', methods=["POST"])
def create_user_record():
    # return make_response(jsonify({"data": "ok"}), 201)
    return process_request(request)

# @app.route('/order-fulfilled', methods=["POST"])
# def order_fullfiled():
#     return fulfilled_order(request)


# @app.route('/store', methods=["GET"])
# def add_customer():
#     data = add_member_to_store_audience({
#         "email": "eara_user313@gmail.com",
#         "first_name": "earaq",
#         "last_name": "Hearing",
#         "subscription_consent": "0"
#     })
    
#     return make_response(jsonify({"data": data}), 200)

# @app.after_request
# def after_request(response):
#     data = response.get_json()
#     thread_pool.submit(process_uploads, data)
#     return response


if __name__ == "__main__":
    app.run('0.0.0.0', 5000, threaded=True, debug=True)
