#!/usr/bin/env python3


from dotenv import load_dotenv
from os import getenv
from utils.exception import ApplicationError
from .crm.hubspot_api import HubspotCrm

load_dotenv()

access_token = getenv('PRIVATE_APP_ACCESS_TOKEN')

if access_token == None or access_token == '':
    raise ApplicationError('Private Access Token is not available', False)

HubspotClient = HubspotCrm(token=access_token)
