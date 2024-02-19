#!/usr/bin/python3

# app module

from flask import Flask, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)

app.url_map.strict_slashes = False
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/status')
def status():
    return make_response(jsonify({"status": "OK"}), 200)


if __name__ == "__main__":
    app.run('0.0.0.0', 5000, threaded=True, debug=True)
