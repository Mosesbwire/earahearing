
from datetime import datetime
import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError
from model.emailProvider import EmailProvider



class MailchimpEmailProvider(EmailProvider):

    def __init__(self, api_key):
        self.client = MailchimpTransactional.Client(api_key)
        self._default_template = True


    @property
    def default_template(self):
        return self._default_template
    
    @default_template.setter
    def default_template(self, value):
        self._default_template = value
        
    def build_message(self, message_components:dict):
        sign_off = ''
        if message_components["symmetrical"] == True and message_components["level"] == 'normal':
            sign_off = "Schedule a consultation to learn more about your hearing and explore options for maintaining optimal hearing throughout your life."
        elif message_components["symmetrical"] == True and message_components["level"] != 'normal':
            sign_off = "Schedule a consultation to receive personalized advice on how to address your hearing loss and improve your listening experience."
        else:
            sign_off = "Schedule a consultation to receive personalized advice on addressing your hearing loss and improving your listening experience in both ears."
        
        return {
            "sign_off": sign_off,
            "description": message_components["description"]
        }

    def send_email_with_attachment(self, recipient_data, attachment_string, document_name):

        first_name = recipient_data.get("first_name")
        last_name = recipient_data.get("last_name")
        email = recipient_data.get("email")
        current_year = datetime.now().year
        email_body_components = recipient_data.get("hearing_capability")
        hearing_loss_level = email_body_components["level"]
        description_left = email_body_components["description_left"]
        description_right = email_body_components["description_right"]
        symmetrical_hearing_loss = 1 if hearing_loss_level["right"] == hearing_loss_level["left"] else 0
        
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
                             "name": "RIGHT",
                             "content": hearing_loss_level["right"]
                         },
                         {
                             "name": "LEFT",
                             "content": hearing_loss_level["left"]
                         },
                         {
                             "name": "DESCRIPTION_RIGHT",
                             "content": description_right
                         },
                         {
                             "name": "DESCRIPTION_LEFT",
                             "content": description_left
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
                         },
                         {
                            "name": "SYMMETRICAL",
                            "content": symmetrical_hearing_loss
                         }
                    ]
                }
            ]
        }

        try:
            
            template_name = 'hearing-loss'
            if not self.default_template:
                template_name = 'normal-hearing'

            print(f'using template: {template_name}')
            response = self.client.messages.send_template({"template_name": template_name, "template_content": {},"message": message})
            print('Api called successfully')
        except ApiClientError as error:
            print('An exception occured: {}'.format(error.text))


