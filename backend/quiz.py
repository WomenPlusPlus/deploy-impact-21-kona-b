import pandas as pd
import json

QUESTIONS = 'Questions.csv'
ANSWERS = 'Answers.csv'

def get_questions():
    questions = pd.read_csv(QUESTIONS)
    answers = pd.read_csv(ANSWERS)
    q_js = questions.to_json(orient='index')
    q_js = json.loads(q_js)
    a_js = answers.to_json(orient='index')
    a_js = json.loads(a_js)
    quiz = []
    for i in q_js:
        res = {}
        res["scope"] = {"id": q_js[i]["q_id"], "text": q_js[i]["question"], "filter": q_js[i]["filter"]}
        res["type"] = q_js[i]["format"]
        ans = []
        for j in a_js:
            if (a_js[j]["q_id"] == q_js[i]["q_id"]):
                ans.append({"id": a_js[j]["a_id"], "text": a_js[j]["answers"], "value": a_js[j]["filter_value"]})
        res["answers"] = ans
        quiz.append(res)
    return quiz


def process_quiz(data):
    return {}
