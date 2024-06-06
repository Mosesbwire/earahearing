#!/usr/bin/env python3

"""API for interacting with mongoDb"""

import pymongo
from model.datastorageengine import DataStorageEngine

DATABASE_NAME = 'earahearing'
class MongoStorageEngine(DataStorageEngine):

    def __init__(self, connection_string):
        try:
            self.client = pymongo.MongoClient(connection_string)
            self.db = self.client[DATABASE_NAME]
        except Exception as error:
            print(error)
    

    def insert_one(self, data):
        try:
            self.collection.insert_one(data)
        except Exception as error:
            print(error)

    def update(self, data):
        pass

    def find(self, data):
        pass


