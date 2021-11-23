import pandas as pd
import strings
import utils

df = pd.read_csv(strings.ORGANISATIONS_DATA)

# keys df
df_age_keys = pd.read_csv(strings.AGE_KEYS)
df_dots_categories_keys = pd.read_csv(strings.DOTS_CATEGORIES_KEYS)
df_dots_subcategories_keys = pd.read_csv(strings.DOTS_SUBCATEGORIES_KEYS)
df_gender_keys = pd.read_csv(strings.GENDER_KEYS)
df_region_keys = pd.read_csv(strings.REGION_KEYS)

# filters df
df_age_filters = pd.read_csv(strings.AGE_FILTER)
df_age_gender_filters = pd.read_csv(strings.GENDER_AGE_FILTER)
df_dots_subcategories_filters = pd.read_csv(strings.DOTS_SUBCATEGORIES_FILTER)
df_gender_filters = pd.read_csv(strings.GENDER_FILTER)
df_region_filters = pd.read_csv(strings.REGION_FILTER)

sub_cats_row = []
categories_row = []
for index, row in df_dots_subcategories_filters.iterrows():
    org_sub_cats = []
    org_cats = []
    for dots_sub_cat_id in df_dots_subcategories_filters.columns[2:]:
        val = row[dots_sub_cat_id]
        if val == 1:
            val_id = df_dots_subcategories_keys.loc[df_dots_subcategories_keys['key'] == int(dots_sub_cat_id)]
            sub_category = val_id.iloc[0]['translation_key']
            org_sub_cats.append(sub_category)
            category = utils.get_cat_value(df_dots_categories_keys, df_dots_subcategories_keys, dots_sub_cat_id)
            org_cats.append(category)
    categories_row.append(list(set(org_cats)))
    sub_cats_row.append(org_sub_cats)

df[strings.CATEGORIES] = categories_row
df[strings.SUB_CATEGORIES] = sub_cats_row
df[strings.GENDER] = utils.get_linked_data(df_age_filters, df_age_keys)
df[strings.AGE] = utils.get_linked_data(df_gender_filters, df_gender_keys)
df[strings.AGE_GENDER] = [df[strings.GENDER][i] + df[strings.AGE][i] for i in range(len(df[strings.GENDER]))]
df[strings.REGION] = utils.get_linked_data(df_region_filters, df_region_keys)

df.to_json(strings.ORGANISATION_DISPLAY, orient='records', lines=True)
