import ast
import model.utils.strings as strings


def str_to_list(df):
    '''

    :param df: dataframe to be modified
    :return: modified dataframe with columns of lists instead of columns of strings
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

def get_cat_id(df_subcategory_mapping, dots_sub_cat_id):
    '''

    :param df_subcategory_mapping: categories-subcategory mapping file
    :param dots_sub_cat_id: subcategory id
    :return: category id corresponding to subcategory id
    '''
    filtered_df = df_subcategory_mapping.loc[df_subcategory_mapping['dots_subcategory_id'] == int(dots_sub_cat_id)]
    cat_id = filtered_df.iloc[0]['dots_category_id']
    return cat_id

def get_col_value(df,id,column):
    '''

    :param df: key-value dataframe
    :param id:  id (key)
    :param column: column of the desired data
    :return: column value corresponding to the id value
    '''
    filtered_df = df.loc[df[strings.KEY] == id]
    val = filtered_df.iloc[0][column]
    return val

def get_subcat_value(df_subcategory_mapping, dots_cat_id):
    '''

    :param df_subcategory_mapping: categories-subcategory mapping file
    :param dots_cat_id: category id
    :return: subcategory id
    '''
    filtered_df = df_subcategory_mapping.loc[df_subcategory_mapping['dots_category_id'] == dots_cat_id]
    sub_cat_ids = list(filtered_df['dots_subcategory_id'])
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
                val_id = key_val_df.loc[key_val_df[strings.KEY] == dots_cat_id]
                if (len(val_id) >= 1):
                    category = val_id.iloc[0]['translation_key']
                    org_sub_cats.append(category)
        sub_cats_row.append(org_sub_cats)
    return sub_cats_row
