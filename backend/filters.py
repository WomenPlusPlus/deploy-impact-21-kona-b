import pandas as pd
import json
import ast
import utils
import strings


def get_filters():
    '''

    :return: list of all filters, filter values and corresponding display value
    '''
    # load daata
    df_age_keys = pd.read_csv( strings.AGE_KEYS)[['key', 'value','translation_key','icon']]
    df_dots_categories_keys = pd.read_csv(strings.DOTS_CATEGORIES_KEYS)[['key', 'value','translation_key','icon']]
    df_dots_subcategories_keys = pd.read_csv(strings.DOTS_SUBCATEGORIES_KEYS)[['key', 'value','translation_key','icon']]
    df_gender_keys = pd.read_csv(strings.GENDER_KEYS)[['key', 'value','translation_key','icon']]
    df_region_key = pd.read_csv(strings.REGION_KEYS)[['key', 'value','translation_key','icon']]

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
    df_dots_subcategories_keys = pd.read_csv(strings.DOTS_SUBCATEGORIES_KEYS)
    df_display = pd.read_json(strings.ORGANISATION_DISPLAY, lines=True)
    df_age_filters = pd.read_csv(strings.AGE_FILTER)
    df_age_gender_filters = pd.read_csv(strings.GENDER_AGE_FILTER)
    df_dots_subcategories_filters = pd.read_csv(strings.DOTS_SUBCATEGORIES_FILTER)
    df_gender_filters = pd.read_csv(strings.GENDER_FILTER)
    df_region_filters = pd.read_csv(strings.REGION_FILTER)
    age_flag = False
    gender_flag = False
    age = ""
    gender = ""
    orgs = []
    # check for filters and add organisation ids matching filters to orgs list
    for filter_type, filter_values in filters['filters'].items():
        for filter_value in filter_values:
            if filter_type == strings.CATEGORIES:
                sub_cat_ids = utils.get_subcat_value(df_dots_subcategories_keys,filter_value)
                for id in sub_cat_ids:
                    print(id)
                    res = df_dots_subcategories_filters.loc[df_dots_subcategories_filters[str(id)] == 1]
                    orgs.extend(list(res["organization_id"]))

            if filter_type == strings.SUB_CATEGORIES:
                res = df_dots_subcategories_filters.loc[df_dots_subcategories_filters[filter_value] == 1]
                orgs.extend(list(res["organization_id"]))

            if filter_type == strings.REGION:
                res = df_region_filters.loc[df_region_filters[filter_value] == 1]
                orgs.extend(list(res["id"]))

            if filter_type == strings.AGE:
                res = df_age_filters.loc[df_age_filters[filter_value] == 1]
                orgs.extend(list(res["id"]))
                age_flag = True
                age = filter_value

            if filter_type == strings.GENDER:
                res = df_gender_filters.loc[df_gender_filters[filter_value] == 1]
                orgs.extend(list(res["id"]))
                gender_flag = True
                gender = filter_value

    # assumes gender and age will have only one parameter
    if age_flag and gender_flag:
        res = df_age_gender_filters.loc[df_age_gender_filters[age] == 1]
        res = res.loc[res[gender] == 1]
        orgs.extend(list(res["id"]))

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
