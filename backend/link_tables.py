import pandas as pd

# files path
KEYS_PATH = "csv/keys/"
FILTERS_PATH = "csv/filters/"
DATA_PATH = "csv/data/"
JSON_PATH = "json/"

# extra filters / column headers
AGE = "age"
GENDER = "gender"
SUB_CATEGORIES = "dots_subcategories"
REGION = "region"
CATEGORIES = "dots_categories"
AGE_GENDER = "age_gender"

# key-value files
AGE_KEYS = "age_key_value.csv"
DOTS_CATEGORIES_KEYS = "dots_categories_key_value.csv"
DOTS_SUBCATEGORIES_KEYS = "dots_subcategories_key_value.csv"
GENDER_KEYS = "gender_key_value.csv"
REGION_KEYS = "region_key_value.csv"

# filter files
AGE_FILTER = "age_filters.csv"
DOTS_SUBCATEGORIES_FILTER = "dots_subcategories_filters.csv"
GENDER_FILTER = "gender_filters.csv"
REGION_FILTER = "region_filters.csv"
GENDER_AGE_FILTER = "gender_and_age_filters.csv"

# organisations file
ORGANISATIONS_DATA = 'organisations_in_senegal_konab.csv'

# linked data
ORGANISATION_DISPLAY = "organisation_display.json"

df = pd.read_csv(DATA_PATH + ORGANISATIONS_DATA)

# keys df
df_age_keys = pd.read_csv(KEYS_PATH + AGE_KEYS)
df_dots_categories_keys = pd.read_csv(KEYS_PATH + DOTS_CATEGORIES_KEYS)
df_dots_subcategories_keys = pd.read_csv(KEYS_PATH + DOTS_SUBCATEGORIES_KEYS)
df_gender_keys = pd.read_csv(KEYS_PATH + GENDER_KEYS)
df_region_keys = pd.read_csv(KEYS_PATH + REGION_KEYS)

# filters df
df_age_filters = pd.read_csv(FILTERS_PATH + AGE_FILTER)
df_age_gender_filters = pd.read_csv(FILTERS_PATH + GENDER_AGE_FILTER)
df_dots_subcategories_filters = pd.read_csv(FILTERS_PATH + DOTS_SUBCATEGORIES_FILTER)
df_gender_filters = pd.read_csv(FILTERS_PATH + GENDER_FILTER)
df_region_filters = pd.read_csv(FILTERS_PATH + REGION_FILTER)


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
                    category = val_id.iloc[0]['value']
                    org_sub_cats.append(category)
        sub_cats_row.append(org_sub_cats)
    return sub_cats_row


def get_cat_value(cat_df, sub_cat_df, sub_cat_id):
    '''

    :param cat_df: categories key-value file
    :param sub_cat_df: subcategories key-value file
    :param sub_cat_id: subcategory id
    :return: category id corresponding to subcategory id
    '''
    filtered_df = sub_cat_df.loc[sub_cat_df['key'] == int(sub_cat_id)]

    cat_id = filtered_df.iloc[0]['dots_category_id']
    filtered_df = cat_df.loc[cat_df['key'] == cat_id]
    cat_val = filtered_df.iloc[0]['value']
    return cat_val


sub_cats_row = []
categories_row = []
for index, row in df_dots_subcategories_filters.iterrows():
    org_sub_cats = []
    org_cats = []
    for dots_sub_cat_id in df_dots_subcategories_filters.columns[2:]:
        val = row[dots_sub_cat_id]
        if val == 1:
            val_id = df_dots_subcategories_keys.loc[df_dots_subcategories_keys['key'] == int(dots_sub_cat_id)]
            sub_category = val_id.iloc[0]['value']
            org_sub_cats.append(sub_category)
            category = get_cat_value(df_dots_categories_keys, df_dots_subcategories_keys, dots_sub_cat_id)
            org_cats.append(category)
    categories_row.append(list(set(org_cats)))
    sub_cats_row.append(org_sub_cats)

df[CATEGORIES] = categories_row
df[SUB_CATEGORIES] = sub_cats_row
df[GENDER] = get_linked_data(df_age_filters, df_age_keys)
df[AGE] = get_linked_data(df_gender_filters, df_gender_keys)
df[AGE_GENDER] = [df[GENDER][i] + df[AGE][i] for i in range(len(df[GENDER]))]
df[REGION] = get_linked_data(df_region_filters, df_region_keys)

df.to_json(JSON_PATH + ORGANISATION_DISPLAY, orient='records', lines=True)
