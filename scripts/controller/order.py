from flask import make_response, jsonify

# HMACKEY = c3e71ab2e7724da4a357c36793e9685da2f88fbeda68bc33d3bbbc8a89a54a6a
def fulfilled_order(request):
    print(request)
    return make_response(jsonify({"response": "OK"}), 200)