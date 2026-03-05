
from dotenv import load_dotenv
from flask import request, make_response, jsonify
from model.csv import ShopifyCustomerData
from os import getenv


load_dotenv()


def process_csv() -> dict:
    """Process the CSV file and return giveaway entries and subscribers not in the giveaway."""
    file_name = getenv('SHOPIFY_CUSTOMER_CSV', 'shopify_customers.csv')
    print(f"Processing CSV file: {file_name}")
    if not file_name:
        raise ValueError("SHOPIFY_CUSTOMER_CSV environment variable is not set.")

    customer_data = ShopifyCustomerData(file_name)
    customer_data.load_data()

    return make_response(jsonify({
        "data":customer_data.data
    }), 200)