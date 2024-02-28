FROM python:3.8-alpine

WORKDIR /app

COPY ./ /app/

RUN sudo apt-get install wkhtmltopdf

RUN pip install --no-cache-dir -r requirement.txt

