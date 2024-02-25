#!/usr/bin/env python3

from hubspot.crm.contacts import ApiException
from lib import HubspotClient
from utils.exception import ApplicationError, ClientInputError


class User:

    async def create_user_contact(self, **kwargs):
        errors = []
        if 'email' not in kwargs:
            error = {'email': 'Email is required'}
            errors.append(error)
        if 'first_name' not in kwargs:
            error = {'first_name': 'First name is required'}
            errors.append(error)
        if 'last_name' not in kwargs:
            error = {'last_name': 'Last name is required'}
            errors.append(error)
        if 'phone_number' not in kwargs:
            error = {'phone_number': 'Phone number is required'}
            errors.append(error)

        if len(errors) > 0:
            raise ClientInputError('InputValidationFailed', errors=errors)
        try:

            response = await HubspotClient.create_contact(**kwargs)
            return response
        except ApiException as e:
            if e.reason == 'Conflict':
                raise ClientInputError('ContactExists')
            else:
                raise ApplicationError('ServerError', True)

    async def get_contact_by_email(self, email: str):
        try:
            resp = await HubspotClient.get_contact_by_email(email)
            return resp
        except ApiException as e:
            if e.reason == 'Not Found':
                raise ClientInputError("RecordNotFound", errors={
                                       "error": "NotFound", "status_code": 404})
            else:
                raise ApplicationError('ServerError', True)
