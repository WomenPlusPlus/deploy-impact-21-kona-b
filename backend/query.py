import pandas as pd
import json

def query(filters):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename)
    df = df.astype(str)
    for key, value in filters.items():
        df = df.loc[df[key] == value]
    df = df[['Name of Organisation']]
    js = df.to_json(orient='split')
    res = json.loads(js)['data']
    return res