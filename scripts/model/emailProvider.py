#!/usr/bin/env python3

"""Interface for handling emails"""

class EmailProvider:
    
    def send_email_with_attachment(self, recipient_data, attachment_string, document_name):
        raise NotImplementedError

