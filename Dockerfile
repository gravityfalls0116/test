FROM python:3.8.5
RUN pip install -r requirements.txt

EXPOSE 5000

CMD python app.py