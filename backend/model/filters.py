import pandas as pd
import json
import ast
import model.utils.utils as utils
import model.utils.strings as strings
import model.utils.data_frames as dfs

def get_filters():
    '''

    :return: list of all filters, filter values and corresponding display value.
    '''

    header = [strings.KEY, 'value','translation_key','icon']
    # load data
    df_age_keys = dfs.df_age_keys[header]
    df_dots_categories_keys = dfs.df_dots_categories_keys[header]
    df_dots_subcategories_keys = dfs.df_dots_subcategories_keys[header]
    df_gender_keys = dfs.df_gender_keys[header]
    df_region_key = dfs.df_region_keys[header]

    # get data for each filter group
    age = df_age_keys.to_json(orient='index')
    age_key_val_list = list(json.loads(age).values())
    age_key_val_dict = {"filter_key": strings.AGE, "filter_value": age_key_val_list}

    dsc = df_dots_subcategories_keys.to_json(orient='index')
    dsc_key_val_list = list(json.loads(dsc).values())
    dsc_key_val_dict = {"filter_key": strings.SUB_CATEGORIES, "filter_value": dsc_key_val_list}

    gender = df_gender_keys.to_json(orient='index')
    gender_key_val_list = list(json.loads(gender).values())
    gender_key_val_dict = {"filter_key": strings.GENDER, "filter_value": gender_key_val_list}

    dc = df_dots_categories_keys.to_json(orient='index')
    dc_key_val_list = list(json.loads(dc).values())
    dc_key_val_dict = {"filter_key": strings.CATEGORIES, "filter_value": dc_key_val_list}

    region = df_region_key.to_json(orient='index')
    region_key_val_list = list(json.loads(region).values())
    region_key_val_dict = {"filter_key": strings.REGION, "filter_value": region_key_val_list}

    res = []
    res.append(age_key_val_dict)
    res.append(dsc_key_val_dict)
    res.append(gender_key_val_dict)
    res.append(dc_key_val_dict)
    res.append(region_key_val_dict)

    return res


def get_filtered_orgs(filters):
    '''

    :param filters: dictionary of filters and corresponding array of values eg. {"region":["saint_louis","dakar"],"age":["baby"]}
    :return: list of sorted organisations matching filtering criterea, with an assigned score of how relevant the organisation is to the passed filters.
    '''
    df_display = dfs.df_linked_data
    df_age_filters = dfs.df_age_filters
    df_age_gender_filters = dfs.df_age_gender_filters
    df_dots_subcategories_filters = dfs.df_dots_subcategories_filters
    df_gender_filters = dfs.df_gender_filters
    df_region_filters = dfs.df_region_filters
    age_flag = False
    gender_flag = False
    age = ""
    gender = ""
    orgs = []
    # check for filters and add organisation ids matching filters to orgs list
    for filter_type, filter_values in filters['filters'].items():
        for filter_value in filter_values:
            if filter_type == strings.CATEGORIES:
                sub_cat_ids = utils.get_subcat_value(dfs.df_subcategory_mapping,filter_value)
                for id in sub_cat_ids:
                    res = df_dots_subcategories_filters.loc[df_dots_subcategories_filters[str(id)] == 1]
                    orgs.extend(list(res["org_id"]))

            if filter_type == strings.SUB_CATEGORIES:
                res = df_dots_subcategories_filters.loc[df_dots_subcategories_filters[filter_value] == 1]
                orgs.extend(list(res["org_id"]))

            if filter_type == strings.REGION:
                res = df_region_filters.loc[df_region_filters[filter_value] == 1]
                orgs.extend(list(res["org_id"]))

            if filter_type == strings.AGE:
                age_flag = True
                age = filter_value

            if filter_type == strings.GENDER:
                gender_flag = True
                gender = filter_value

    # assumes gender and age will have only one parameter
    if age_flag and gender_flag:
        res = df_age_gender_filters.loc[df_age_gender_filters[age] == 1]
        res = res.loc[res[gender] == 1]
        orgs.extend(list(res["org_id"]))
    elif gender_flag:
        res = df_gender_filters.loc[df_gender_filters[gender] == 1]
        orgs.extend(list(res["org_id"]))
    elif age_flag:
        res = df_age_filters.loc[df_age_filters[age] == 1]
        orgs.extend(list(res["org_id"]))

    # get a list of unique organisation ids, sorted by their no. of occurence
    sorted_orgs = sorted(set(orgs), key=lambda x: orgs.count(x), reverse=True)
    counts = [orgs.count(i) for i in sorted_orgs]

    # get full orgainsation data corresponding to ids
    df = pd.DataFrame(columns=df_display.columns)
    for i in sorted_orgs:
        filtered_df = df_display.loc[df_display["id"] == i]
        df = df.append(filtered_df)

    df['score'] = counts
    df = df.astype(str).reset_index(drop=True)
    df = utils.str_to_list(df)
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res
