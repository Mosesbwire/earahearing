#!/usr/bin/env python3

import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages


def generate_audiogram():
    frequencies = [500, 1000, 2000, 4000, 8000]
    right_ear_values = [20, 20, 20, 20, 20]
    left_ear_values = [25, 35, 45, 55, 65]

    plt.scatter(frequencies, left_ear_values,
                label='Left Ear', marker='o', color='blue')
    plt.scatter(frequencies, right_ear_values,
                label='Right Ear', marker='x', color='red')

    plt.title('Audiogram')
    plt.xlabel('Frequencies (Hz)')
    plt.ylabel('Decibels (Db)')

    plt.yticks(range(0, 75, 5))
    # plt.xticks([500, 1000, 2000, 4000, 8000])
    plt.xscale('linear')
    plt.gca().invert_yaxis()

    plt.tick_params(axis='x', top=True, labeltop=True,
                    bottom=False, labelbottom=False)

    plt.gcf().set_size_inches(8, 6)
    plt.legend()
    plt.grid(True)

    with PdfPages('audiogram.pdf') as pdf:
        pdf.savefig()
        plt.close()


if __name__ == "__main__":
    generate_audiogram()
