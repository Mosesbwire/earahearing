#!/usr/bin/env python3
import asyncio
from flask import make_response, jsonify
from model.process import process
from utils.exception import ApplicationError, ClientInputError


def process_request(request):

    data = request.get_json()

    if not data:
        return make_response(jsonify({"error": {
            "message": "request object is empty",
            "errors": []
        }}))
    try:
        resp = asyncio.run(process(data))
        return make_response(jsonify({"data": resp}), 201)
    except ClientInputError as e:
        if e.message == 'InputValidationFailed':
            return make_response(jsonify({"error": {
                "message": 'User input validation error',
                "errors": e.errors
            }}), 400)

    except ApplicationError as e:
        return make_response(jsonify({"error": {
            "message": "Server Error Ocuured. Try again later",
            "errors": []
        }}), 500)
