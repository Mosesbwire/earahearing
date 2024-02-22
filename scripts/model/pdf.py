#!/usr/bin/env python3

from datetime import datetime
import jinja2
from matplotlib.backends.backend_pdf import PdfPages
import os
import pdfkit


class Pdf:

    def file_name(self, file: str) -> str:
        VALID_LENGTH = 2
        MIME_INDEX = 1
        split = file.split('.')

        if len(split) > VALID_LENGTH:
            raise ValueError(
                f'{file}:  is not a supported file name format')
        if len(split) == VALID_LENGTH and split[MIME_INDEX] != 'pdf':
            raise ValueError(
                f'Unsupported mime type: .{split[MIME_INDEX]} .Valid mime-type is pdf.')
        fullname = file if len(
            split) == VALID_LENGTH else f'{file}.pdf'
        return fullname

    def create_audiogram_pdf(self, file_name: str, plt):
        fullname = self.file_name(file_name)
        with PdfPages(fullname) as pdf:
            pdf.savefig()
            plt.close()

    def validate_template_data(self, data: dict, required_fields: list[str]) -> bool:

        for key, val in data.items():
            if key not in required_fields:
                return False
            if val == None or val == '':
                return False
        return True

    def create_test_result_pdf(self, data: dict, file_name: str):
        required_fields = [
            "qn_1",
            "qn_2",
            "qn_3",
            "qn_4",
            "qn_5",
            "ans_1",
            "ans_2",
            "ans_3",
            "ans_4",
            "ans_5",
            "name",
            "email",
            "phone_number"
        ]
        if not self.validate_template_data(data, required_fields):
            raise ValueError(
                f'missing key or invalid data. data is required to have {required_fields}')

        fullname = self.file_name(file_name)
        today = datetime.today().strftime("%d %b, %Y")
        data["date"] = today

        template_dir = os.path.abspath('../scripts/templates')

        template_loader = jinja2.FileSystemLoader(template_dir)
        template_env = jinja2.Environment(loader=template_loader)

        template = template_env.get_template('test_results_template.html')
        output = template.render(data)
        config = pdfkit.configuration(wkhtmltopdf='/usr/bin/wkhtmltopdf')

        pdfkit.from_string(output, fullname, configuration=config, options={
                           "enable-local-file-access": ""})

    def remove_files(self, files: list[str]):

        for file in files:
            path = os.path.abspath(f'./{file}')

            try:
                os.remove(path=path)
            except FileNotFoundError:
                pass
