#!/usr/bin/env python3

"""Handles interaction with the hubspot crm"""
from datetime import datetime
import json
from hubspot import HubSpot
from hubspot.crm.contacts import SimplePublicObjectInputForCreate
from hubspot.crm.contacts.exceptions import ApiException
import requests
from utils.exception import ClientInputError, ApplicationError


class HubspotCrm:
    BASE_URL = 'https://api.hubapi.com'
    NOTES_TO_CONTACTS_ASSOCIATION_ID = 202
    upload_folder = {
        "audiogram": "client audiograms",
        "test_results": "client test results"
    }

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
            resp_obj = json.loads(response)
            return resp_obj.get("id")
        except ApiException as e:
            raise ApplicationError(e.reason, True)

    def upload_file(self, file_name: str, destination_folder: str):
        """upload pdf files to hubspot cms"""
        folder = HubspotCrm.upload_folder.get(destination_folder, None)

        if folder == None:
            raise ValueError(
                f'{destination_folder} is not a valid folder. Existing folders are {HubspotCrm.upload_folder}')
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
            'folderPath': (None, f'/{folder}', 'text/strings')
        }
        headers = {'Authorization': f'Bearer {self.access_token}'}

        response = requests.post(full_url, headers=headers, files=file_data)
        if response.status_code != 201:
            raise ApplicationError('Failed to upload file', True)

        return response.json().get("id")

    def attach_note_with_attachments_to_contact(self, contact_id: str, attachment_ids: list[str]):
        timestamp = datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        properties = {
            "hs_note_body": "",
            "hs_timestamp": timestamp,
            "hs_attachment_ids": ";".join(attachment_ids)

        }
        associations = [
            {
                "types": [
                    {
                        "associationCategory": "HUBSPOT_DEFINED",
                        "associationTypeId": HubspotCrm.NOTES_TO_CONTACTS_ASSOCIATION_ID
                    }
                ],
                "to": {
                    "id": contact_id
                }
            }
        ]

        note = SimplePublicObjectInputForCreate(
            associations=associations, properties=properties)
        try:
            response = self.client.crm.objects.notes.basic_api.create(
                simple_public_object_input_for_create=note)
            resp = json.loads(response)
            return resp.get("id")
        except ApiException as e:
            raise ApplicationError(e.reason, True)
