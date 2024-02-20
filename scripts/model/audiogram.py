#!/usr/bin/env python3

"""Audiogram class"""

import matplotlib.pyplot as plt


class Audiogram:
    """ Creates an audiogram """
    MAX_DB = 70
    MIN_DB = 0

    def __init__(self, data: dict, frequencies: list):
        self.frequencies = frequencies
        self._data = None
        self.data = data
        self.plot = plt

    def valid_length(self, ear):
        """ Frequencies length should be equal to each ears test data """
        return len(self.frequencies) == len(ear.values())

    def valid_test_data(self, ear):
        """Validate test data is within correct range """
        test_data = ear.values()
        for x in test_data:
            if x > Audiogram.MAX_DB or x <= Audiogram.MIN_DB:
                return False

        return True

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, value: dict):
        right = value.get('right')
        left = value.get('left')
        if not self.valid_length(right):
            raise ValueError(
                f'Length of data in right {right} should match frequencies length {self.frequencies}')

        if not self.valid_length(left):
            raise ValueError(
                f'Length of data in right {left} should match frequencies length {self.frequencies}')

        if not self.valid_test_data(right):
            raise ValueError(
                f'Test data is invalid {right}. Values should be in the range {Audiogram.MIN_DB} - {Audiogram.MAX_DB}')

        if not self.valid_test_data(left):
            raise ValueError(
                f'Test data is invalid {left}. Values should be in the range {Audiogram.MIN_DB} - {Audiogram.MAX_DB}')
        self._data = value

    def create_audiogram(self, xlabel: str, ylabel: str, title=None):
        self.plot.scatter(self.frequencies, self.data.get(
            'right').values(), label='Right ear', marker='o', color='blue')
        self.plot.scatter(self.frequencies, self.data.get(
            'left').values(), label='Left ear', marker='x', color='red')

        if title:
            self.plot.title(title)
        self.plot.xlabel(xlabel)
        self.plot.ylabel(ylabel)
        self.plot.yticks(range(Audiogram.MIN_DB, Audiogram.MAX_DB + 5, 5))
        self.plot.xscale('linear')
        self.plot.gca().invert_yaxis()
        self.plot.tick_params(axis='x', top=True, labeltop=True,
                              bottom=False, labelbottom=False)

        self.plot.gcf().set_size_inches(8, 6)
        self.plot.legend()
        self.plot.grid(True)

        return self.plot
