import pandas as pd
import json
import ast

# DISPLAY_INFO_FILE =
def search(filters):
    '''

    :param filters: dictionary of the filer parameters
    :return: dictionary of organisations matching passed filter values
    '''
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename)
    df = df.astype(str)
    for key, value in filters.items():
        df = df.loc[df[key] == value]
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = js.values()
    return list(res)


def get_all():
    '''
    :return: dictionary of all organisations in db
    '''
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename)
    df = df.astype(str)
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = js.values()
    return list(res)


def get_one(org_id):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename, index_col=False)
    df = df.astype(str)
    df = df.loc[df['id'] == org_id]
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res


def add(data):
    '''
    :param data: dictionary of the new organisation info
    :return: adds organisation to the db file
    '''
    filename = 'organisations dataset.csv'
    keys = []
    values = []
    for key, value in data.items():
        keys.append(key)
        values.append(value)

    df = pd.read_csv(filename, index_col=False)
    df = df.astype(str)
    df2 = pd.DataFrame([values],
                       columns=keys)
    df = pd.concat([df, df2]).reset_index(drop=True)
    df.to_csv(filename, sep=',', index=False)


def delete(org_id):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename, index_col=False)
    df = df.astype(str)
    df = df[df.id != org_id]
    df.to_csv(filename, sep=',', index=False)


def update_values(org_id, data):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename, index_col=False)
    df = df.astype(str)
    for key, value in data.items():
        df.loc[df.id == org_id, key] = value
    df.to_csv(filename, sep=',', index=False)
