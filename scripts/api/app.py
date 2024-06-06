#!/usr/bin/env python3

# app module
from concurrent.futures import ThreadPoolExecutor
from controller.process import process_request

from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from model.process import process_uploads


app = Flask(__name__)

app.url_map.strict_slashes = False
CORS(app, origins=["https://hearingtest.earahearing.com",
     "http://localhost:5173", "https://earahearing.netlify.app"])


thread_pool = ThreadPoolExecutor(max_workers=5)


@app.route('/status')
def status():
    return make_response(jsonify({"status": "OK"}), 200)


@app.route('/', methods=["POST"])
def create_user_record():
    # return make_response(jsonify({"data": "ok"}), 201)
    return process_request(request)


# @app.after_request
# def after_request(response):
#     data = response.get_json()
#     thread_pool.submit(process_uploads, data)
#     return response


if __name__ == "__main__":
    app.run('0.0.0.0', 5000, threaded=True, debug=True)
