#!/usr/bin/env python3

"""Handles email"""

from model.emailProvider import EmailProvider

class Email:
    def __init__(self, emailProvider:EmailProvider):
        self.email_provider = emailProvider


    def send_email_with_attachment(self, recipient_data, attachment_string, document_name):
        self.email_provider.send_email_with_attachment(recipient_data, attachment_string, document_name)