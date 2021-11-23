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

def get_cat_value(df_dots_categories_keys, df_dots_subcategories_keys, dots_sub_cat_id):
    '''

    :param df_dots_categories_keys: categories key-value file
    :param df_dots_subcategories_keys: subcategories key-value file
    :param sub_cat_id: subcategory id
    :return: category id corresponding to subcategory id
    '''
    filtered_df = df_dots_subcategories_keys.loc[df_dots_subcategories_keys['key'] == int(dots_sub_cat_id)]

    cat_id = filtered_df.iloc[0]['dots_category_id']
    filtered_df = df_dots_categories_keys.loc[df_dots_categories_keys['key'] == cat_id]
    cat_val = filtered_df.iloc[0]['translation_key']
    return cat_val

def get_subcat_value(df_dots_subcategories_keys, dots_cat_id):
    filtered_df = df_dots_subcategories_keys.loc[df_dots_subcategories_keys['dots_category_id'] == dots_cat_id]
    sub_cat_ids = list(filtered_df['key'])
    return sub_cat_ids

def get_linked_data(filters_df, key_val_df):
    '''

    :param filters_df: one hot encoded df
    :param key_val_df: its key-value corresponding df
    :return: array of values
    '''
    sub_cats_row = []
    for index, row in filters_df.iterrows():
        org_sub_cats = []
        for dots_cat_id in filters_df.columns[2:]:
            val = row[dots_cat_id]
            if val == 1:
                val_id = key_val_df.loc[key_val_df['key'] == dots_cat_id]
                if (len(val_id) >= 1):
                    category = val_id.iloc[0]['translation_key']
                    org_sub_cats.append(category)
        sub_cats_row.append(org_sub_cats)
    return sub_cats_row
