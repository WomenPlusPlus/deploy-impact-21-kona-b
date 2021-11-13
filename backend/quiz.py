import pandas as pd
import ast

def get_questions():
    df = pd.read_csv('Quiz Questions.csv')
    df = df.astype(str)
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res


def process_quiz(data):
    return {}
