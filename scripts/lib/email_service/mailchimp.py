
from datetime import datetime
import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError
from model.emailProvider import EmailProvider



class MailchimpEmailProvider(EmailProvider):

    def __init__(self, api_key):
        self.client = MailchimpTransactional.Client(api_key)

    def send_email_with_attachment(self, recipient_data, attachment_string, document_name):

        first_name = recipient_data.get("first_name")
        last_name = recipient_data.get("last_name")
        email = recipient_data.get("email")
        current_year = datetime.now().year
        message = {
            
            "attachments": [
                {
                    "content": attachment_string,
                    "name": document_name,
                    "type": "application/pdf"
                }
            ],
            "to": [
                {
                    "email": email,
                    "type": "to"
                }
            ],
             "merge_vars": [
                {
                    "rcpt": email,
                    "vars": [
                        {
                            "name": "FNAME",
                            "content": first_name
                        },
                        {
                            "name": "LNAME",
                            "content": last_name
                         },
                         {
                             "name": "TEST_RESULTS",
                             "content": "THIS PART WILL BE WILL VARY ACCORDING TO SEVERITY OF HEARING LOSS. MILD/MODERATE/SEVERE."
                         },
                         {
                             "name": "CURRENT_YEAR",
                             "content": current_year
                         },
                         {
                             "name": "COMPANY",
                             "content": "EaraHearing"
                         },
                         {
                             "name": "LIST_ADDRESS",
                             "content": "info@earahearing.com"
                         }
                    ]
                }
            ]
        }

        try:
            response = self.client.messages.send_template({"template_name": "results-template", "template_content": {},"message": message})
            print('Api called successfully: {}'.format(response))
        except ApiClientError as error:
            print('An exception occured: {}'.format(error.text))


