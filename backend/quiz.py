import pandas as pd
import json
import strings
import data_frames as dfs

def get_questions():
    q_js = dfs.df_questions.to_json(orient='index')
    q_js = json.loads(q_js)
    a_js = dfs.df_answers.to_json(orient='index')
    a_js = json.loads(a_js)
    quiz = []
    for i in q_js:
        res = {}
        res["scope"] = {"id": q_js[i]["q_id"], "text": q_js[i]["question"], "filter": q_js[i]["filter"],"translation_key":q_js[i]["translation_key"]}
        res["type"] = q_js[i]["format"]
        ans = []
        for j in a_js:
            if (a_js[j]["q_id"] == q_js[i]["q_id"]):
                ans.append({"id": a_js[j]["a_id"], "text": a_js[j]["answers"], "value": a_js[j]["filter_value"],"translation_key":a_js[j]["translation_key"]})
        res["answers"] = ans
        quiz.append(res)
    return quiz
