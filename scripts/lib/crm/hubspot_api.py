#!/usr/bin/env python3

"""Handles interaction with the hubspot crm"""
from hubspot import HubSpot
from hubspot.crm.contacts import SimplePublicObjectInputForCreate
from hubspot.crm.contacts.exceptions import ApiException, ApiKeyError
from utils.exception import ClientInputError


class HubspotCrm:

    def __init__(self, token: str):
        self.client = HubSpot(access_token=token)

    def create_contact(self, **kwargs):
        if 'email' not in kwargs:
            raise ClientInputError('Email is required')
        if 'first_name' not in kwargs:
            raise ClientInputError('First Name is required')
        if 'last_name' not in kwargs:
            raise ClientInputError('Last Name is required')
        if 'phone_number' not in kwargs:
            raise ClientInputError('Phone number is required')
        try:
            user_name = f'{kwargs.get("first_name")} {kwargs.get("last_name")}'
            contact = SimplePublicObjectInputForCreate(
                properties={"email": kwargs.get("email"), "phone": kwargs.get("phone_number"), "firstname": kwargs.get("first_name"), "lastname": kwargs.get("last_name")})
            response = self.client.crm.contacts.basic_api.create(
                simple_public_object_input_for_create=contact)
            return response
        except ApiKeyError as e:
            print('ApiKeyError occured when creating contact: %s\n' % e)
        except ApiException as e:
            print('Error occured when creating contact: %s\n' % e)
