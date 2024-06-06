#!/usr/bin/env python3

"""Audiogram class"""

import matplotlib.pyplot as plt
from model.pdf import Pdf
from utils.exception import ClientInputError
from uuid import uuid4


class Audiogram:
    """ Creates an audiogram """
    MAX_RANGE = 70
    MIN_RANGE = 0
    MAX_DB = 65
    MIN_DB = 20
    FREQUENCIES = [500, 1000, 2000, 4000, 8000]

    def __init__(self, data: dict):
        self._data = None
        self.data = data
        self.plot = plt

    def valid_length(self, ear):
        """ Frequencies length should be equal to each ears test data """
        return len(Audiogram.FREQUENCIES) == len(ear.values())

    def valid_test_data(self, ear):
        """Validate test data is within correct range """
        test_data = ear.values()
        for x in test_data:
            if x > Audiogram.MAX_DB or x < Audiogram.MIN_DB:
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

    def create_audiogram_plot(self, xlabel: str, ylabel: str, title=None):
        self.plot.scatter(Audiogram.FREQUENCIES, self.data.get(
            'right').values(), label='Right ear', marker='o', color='blue')
        self.plot.scatter(Audiogram.FREQUENCIES, self.data.get(
            'left').values(), label='Left ear', marker='x', color='red')

        if title:
            self.plot.title(title)
        self.plot.xlabel(xlabel)
        self.plot.ylabel(ylabel)
        self.plot.yticks(
            range(Audiogram.MIN_RANGE, Audiogram.MAX_RANGE + 5, 5))
        self.plot.xscale('log')
        xticks = Audiogram.FREQUENCIES
        xtickLables = ['{}Hz'.format(i) for i in xticks]
        self.plot.xticks(xticks, xtickLables)
        self.plot.gca().invert_yaxis()
        self.plot.tick_params(axis='x', top=True, labeltop=True,
                              bottom=False, labelbottom=False)

        self.plot.gcf().set_size_inches(8, 6)
        self.plot.legend()
        self.plot.grid(True)

        return self.plot
    
    async def create_pdf(self, pdf_generator: Pdf):
        try:

            plot = self.create_audiogram_plot('Frequency(Hz)', 'Decibel (db)', 'Frequency(Hz)')
            audiogram_pdf_name = await pdf_generator.create_audiogram_pdf(f'{uuid4()}.pdf', plot)
            return audiogram_pdf_name
        except ValueError as error:
            print(error.args)
            raise ClientInputError('InvalidHearingTestData')
    
