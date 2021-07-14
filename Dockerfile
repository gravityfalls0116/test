FROM python:3.6-slim

RUN yum clean && yum update

RUN yum install nginx
RUN yum install python3-dev
RUN yum install build-essential

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt --src /usr/local/src

COPY . .

EXPOSE 5000
CMD [ "python", "app.py" ]