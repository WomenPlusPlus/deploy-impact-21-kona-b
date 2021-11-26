import model.utils.strings as strings
import model.utils.utils as utils
import model.utils.data_frames as dfs


def link_tables():
    '''

    :return: links data from key-value files and one-hot-encoded filter files (csv) and generates a json file
    that includes additional data columns (eg. region, age, gender, categories , sub-categoreis)
    '''
    sub_cats_row = []
    categories_row = []
    for index, row in dfs.df_dots_subcategories_filters.iterrows():
        org_sub_cats = []
        org_cats = []
        for dots_sub_cat_id in dfs.df_dots_subcategories_filters.columns[2:]:
            val = row[dots_sub_cat_id]
            if val == 1:
                val_id = dfs.df_dots_subcategories_keys.loc[
                    dfs.df_dots_subcategories_keys['key'] == int(dots_sub_cat_id)]
                sub_category = val_id.iloc[0]['translation_key']
                org_sub_cats.append(sub_category)
                category = utils.get_cat_value(dfs.df_dots_categories_keys, dfs.df_dots_subcategories_keys,
                                               dots_sub_cat_id)
                org_cats.append(category)
        categories_row.append(list(set(org_cats)))
        sub_cats_row.append(org_sub_cats)

    dfs.df[strings.CATEGORIES] = categories_row
    dfs.df[strings.SUB_CATEGORIES] = sub_cats_row
    dfs.df[strings.AGE] = utils.get_linked_data(dfs.df_age_filters, dfs.df_age_keys)
    dfs.df[strings.GENDER] = utils.get_linked_data(dfs.df_gender_filters, dfs.df_gender_keys)
    dfs.df[strings.AGE_GENDER] = [dfs.df[strings.GENDER][i] + dfs.df[strings.AGE][i] for i in
                                  range(len(dfs.df[strings.GENDER]))]
    dfs.df[strings.REGION] = utils.get_linked_data(dfs.df_region_filters, dfs.df_region_keys)

    dfs.df.to_json(strings.ORGANISATION_DISPLAY, orient='records', lines=True)
