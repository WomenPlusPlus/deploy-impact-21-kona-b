import pandas as pd
import ast
import strings


def str_to_list(df):
    '''

    :param df: dataframe to be modified
    :return: modified dataframe with columns of lists instead of string list
    '''
    # convert lists string  to list objects
    for i in range(len(df[strings.CATEGORIES])):
        df[strings.CATEGORIES][i] = ast.literal_eval(df[strings.CATEGORIES][i])
        df[strings.AGE][i] = ast.literal_eval(df[strings.AGE][i])
        df[strings.GENDER][i] = ast.literal_eval(df[strings.GENDER][i])
        df[strings.SUB_CATEGORIES][i] = ast.literal_eval(df[strings.SUB_CATEGORIES][i])
        df[strings.AGE_GENDER][i] = ast.literal_eval(df[strings.AGE_GENDER][i])
        df[strings.REGION][i] = ast.literal_eval(df[strings.REGION][i])
    return df
