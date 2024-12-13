
import mailchimp_marketing as MailchimpMarketing
from mailchimp_marketing.api_client import ApiClientError
from dotenv import load_dotenv
from os import getenv
import uuid

load_dotenv()

MAILCHIMP_MARKETING_API_KEY = getenv('MAILCHIMP_MARKETING_API_KEY')
mailchimpMarketingClient = MailchimpMarketing.Client()

mailchimpMarketingClient.set_config({

    "api_key": MAILCHIMP_MARKETING_API_KEY,
    "server": "us8"
}
)
# list_id: 9a5f29cc81
# 'store_jzau39b3dmdsb4pxh2wj'
def add_member_to_list(email:str, consent: str):
    LIST_ID = "9a5f29cc81"
    print(consent)
    status = "subscribed" if consent == "1" else "unsubscribed"
    tags = ["subscribed via hearing test"] if consent == "1" else [] 
    data = {
        "email_address": email,
        "status": status,
        "tags": tags
    }
   
    try:
        response = mailchimpMarketingClient.lists.add_list_member(LIST_ID, data)
        return response
    except ApiClientError as err:
        print("Error: {}".format(err.text))


def add_member_to_store_audience(user_data):
    STORE_ID = 'store_jzau39b3dmdsb4pxh2wj'
    consent = user_data.get("subscription_consent")
    opt_in_status = True if consent == "1" else False
    id = uuid.uuid4()
    try:
        response = mailchimpMarketingClient.ecommerce.add_store_customer(STORE_ID, {
            "id": str(id),
            "email_address": user_data.get("email"),
            "first_name": user_data.get("first_name"),
            "last_name": user_data.get("last_name"),
            "opt_in_status": opt_in_status
        })
        return response
    except ApiClientError as err:
         print("Error: {}".format(err.text))