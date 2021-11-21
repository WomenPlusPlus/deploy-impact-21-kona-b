import pandas as pd
import ast

# extra filters / column headers
AGE = "age"
GENDER = "gender"
SUB_CATEGORIES = "dots_subcategories"
REGION = "region"
CATEGORIES = "dots_categories"
AGE_GENDER = "age_gender"


def str_to_list(df):
    '''

    :param df: dataframe to be modified
    :return: modified dataframe with columns of lists instead of string list
    '''
    # convert lists string  to list objects
    for i in range(len(df[CATEGORIES])):
        df[CATEGORIES][i] = ast.literal_eval(df[CATEGORIES][i])
        df[AGE][i] = ast.literal_eval(df[AGE][i])
        df[GENDER][i] = ast.literal_eval(df[GENDER][i])
        df[SUB_CATEGORIES][i] = ast.literal_eval(df[SUB_CATEGORIES][i])
        df[AGE_GENDER][i] = ast.literal_eval(df[AGE_GENDER][i])
        df[REGION][i] = ast.literal_eval(df[REGION][i])
    return df
