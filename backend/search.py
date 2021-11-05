import pandas as pd
import json


def search(filters):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename)
    df = df.astype(str)
    for key, value in filters.items():
        df = df.loc[df[key] == value]
    js = df.to_json(orient='index')
    res = json.loads(js)
    return res
