#!/usr/bin/env python3

"""Handles interaction with the hubspot crm"""
import json
from hubspot import HubSpot
from hubspot.crm.contacts import SimplePublicObjectInputForCreate
from hubspot.crm.contacts.exceptions import ApiException, ApiKeyError
from hubspot.files.files import ImportFromUrlInput
import requests
from utils.exception import ClientInputError


class HubspotCrm:
    BASE_URL = 'https://api.hubapi.com'

    def __init__(self, token: str):
        self.client = HubSpot(access_token=token)
        self.access_token = token

    def create_contact(self, **kwargs):
        """creates a contact in hubspot crm"""

        if 'email' not in kwargs:
            raise ClientInputError('Email is required')
        if 'first_name' not in kwargs:
            raise ClientInputError('First Name is required')
        if 'last_name' not in kwargs:
            raise ClientInputError('Last Name is required')
        if 'phone_number' not in kwargs:
            raise ClientInputError('Phone number is required')
        try:

            contact = SimplePublicObjectInputForCreate(
                properties={"email": kwargs.get("email"), "phone": kwargs.get("phone_number"), "firstname": kwargs.get("first_name"), "lastname": kwargs.get("last_name")})
            response = self.client.crm.contacts.basic_api.create(
                simple_public_object_input_for_create=contact)
            return response
        except ApiKeyError as e:
            print('ApiKeyError occured when creating contact: %s\n' % e)
        except ApiException as e:
            print('Error occured when creating contact: %s\n' % e)

    def upload_file(self, file_name: str):
        """upload pdf files to hubspot cms"""
        url = 'filemanager/api/v3/files/upload'
        full_url = f'{HubspotCrm.BASE_URL}/{url}'

        file_options = {
            'access': 'PRIVATE',
            'overwrite': False,
            'duplicateValidationStrategy': 'NONE',
            'duplicateValidationScope': 'EXACT_FOLDER'
        }

        file_data = {
            'file': (file_name, open(file_name, 'rb'), 'application/octet-stream'),
            'options': (None, json.dumps(file_options), 'text/strings'),
            'folderPath': (None, '/CLIENT_TEST_RESULTS', 'text/strings')
        }
        headers = {'Authorization': f'Bearer {self.access_token}'}
        resp = requests.post(full_url, headers=headers, files=file_data)
        print(resp.content)
