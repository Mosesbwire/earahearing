#!/usr/bin/env python3

from lib import HubspotClient
from utils.exception import ApplicationError, ClientInputError


class User:

    def create_user_contact(self, **kwargs):
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
            raise ClientInputError('Input validation Failed', errors=errors)

        response = HubspotClient.create_contact(**kwargs)
        return response
