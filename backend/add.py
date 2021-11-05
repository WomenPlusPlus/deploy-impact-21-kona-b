import pandas as pd


def add(data):
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
    df = pd.concat([df2, df]).reset_index(drop=True)
    df.to_csv(filename, sep=',', index=False)
