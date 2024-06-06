#!/usr/bin/env python3

"""Abstract class defines the interface for common db interaction queries"""

from abc import ABC, abstractmethod

class DataStorageEngine(ABC):

    @abstractmethod
    def update(self, **kwargs):
        pass

    @abstractmethod
    def find(self, identifier):
        pass
    
    