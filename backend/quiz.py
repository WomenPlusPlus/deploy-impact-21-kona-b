import pandas as pd
import json


def get_questions():
    df = pd.read_csv('Quiz Questions.csv')
    df = df.astype(str)
    js = df.to_json(orient='index')
    res = json.loads(js)
    return res


def process_quiz(data):
    return {}
