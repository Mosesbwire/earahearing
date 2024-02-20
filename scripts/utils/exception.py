#!/usr/bin/env python3

""" Custom Exceptions """


class ClientInputError(Exception):
    """Error raised from client errors"""

    def __init__(self, message: str, errors=None):
        super().__init__(message)
        self.errors = errors


class ApplicationError(Exception):
    """Error raised from Application errors"""

    def __init__(self, message: str, isOperational: bool):
        super().__init__(message)
        self.isOperational = isOperational
