import pandas as pd

def add(data):
    filename = 'organisations dataset.csv'
    df = pd.read_csv(filename)
    df = df.astype(str)
    df2 = pd.DataFrame([data],
                       columns=['Name of Organisation', 'Region', 'Can individuals contact them?'])
    df = pd.concat([df2, df]).reset_index()
    df.to_csv(filename, sep=',', index=False)
