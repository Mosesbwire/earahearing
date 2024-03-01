FROM ubuntu:latest

ENV TZ=UTC \
    DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y python3 \
    python3-pip -y && \
    apt-get install -y wkhtmltopdf

WORKDIR /app

COPY ./ /app/


RUN pip install --no-cache-dir -r requirement.txt

EXPOSE 5000

CMD ["gunicorn", "api.wsgi:app", "--bind", "0.0.0.0:5000"]

