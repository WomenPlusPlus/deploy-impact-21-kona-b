import pandas as pd
import json
import ast

# files path
KEYS_PATH = "csv/keys/"
FILTERS_PATH = "csv/filters/"
JSON_PATH = "json/"

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

# organisations data
ORGANISATION_DISPLAY = "organisation_display.json"

# filters
AGE = "age"
GENDER = "gender"
SUB_CATEGORIES = "dots_subcategories"
REGION = "region"
CATEGORIES = "dots_categories"
AGE_GENDER = "age_gender"

def get_filters():
    '''

    :return: list of all filters, filter values and corresponding display value
    '''
    # load daata
    df_age_keys = pd.read_csv(KEYS_PATH + AGE_KEYS)[['key', 'value','translation_key','icon']]
    df_dots_categories_keys = pd.read_csv(KEYS_PATH + DOTS_CATEGORIES_KEYS)[['key', 'value','translation_key','icon']]
    df_dots_subcategories_keys = pd.read_csv(KEYS_PATH + DOTS_SUBCATEGORIES_KEYS)[['key', 'value','translation_key','icon']]
    df_gender_keys = pd.read_csv(KEYS_PATH + GENDER_KEYS)[['key', 'value','translation_key','icon']]
    df_region_key = pd.read_csv(KEYS_PATH + REGION_KEYS)[['key', 'value','translation_key','icon']]

    # get data for each filter group
    age = df_age_keys.to_json(orient='index')
    age_key_val_list = list(json.loads(age).values())
    age_key_val_dict = {"filter_key": AGE, "filter_value": age_key_val_list}

    dsc = df_dots_subcategories_keys.to_json(orient='index')
    dsc_key_val_list = list(json.loads(dsc).values())
    dsc_key_val_dict = {"filter_key": SUB_CATEGORIES, "filter_value": dsc_key_val_list}

    gender = df_gender_keys.to_json(orient='index')
    gender_key_val_list = list(json.loads(gender).values())
    gender_key_val_dict = {"filter_key": GENDER, "filter_value": gender_key_val_list}

    dc = df_dots_categories_keys.to_json(orient='index')
    dc_key_val_list = list(json.loads(dc).values())
    dc_key_val_dict = {"filter_key": CATEGORIES, "filter_value": dc_key_val_list}

    region = df_region_key.to_json(orient='index')
    region_key_val_list = list(json.loads(region).values())
    region_key_val_dict = {"filter_key": REGION, "filter_value": region_key_val_list}

    res = []
    res.append(age_key_val_dict)
    res.append(dsc_key_val_dict)
    res.append(gender_key_val_dict)
    res.append(dc_key_val_dict)
    res.append(region_key_val_dict)

    return res


def get_filtered_orgs(filters):
    df_display = pd.read_json(JSON_PATH + ORGANISATION_DISPLAY, lines=True)
    df_age_filters = pd.read_csv(FILTERS_PATH + AGE_FILTER)
    df_age_gender_filters = pd.read_csv(FILTERS_PATH + GENDER_AGE_FILTER)
    df_dots_subcategories_filters = pd.read_csv(FILTERS_PATH + DOTS_SUBCATEGORIES_FILTER)
    df_gender_filters = pd.read_csv(FILTERS_PATH + GENDER_FILTER)
    df_region_filters = pd.read_csv(FILTERS_PATH + REGION_FILTER)
    age_flag = False
    gender_flag = False
    age = ""
    gender = ""
    orgs = []
    # check for filters and add organisation ids matching filters to orgs list
    for filter_type, filter_value in filters['filters'].items():
        if filter_type == SUB_CATEGORIES:
            res = df_dots_subcategories_filters.loc[df_dots_subcategories_filters[filter_value] == 1]
            orgs.extend(list(res["organization_id"]))

        if filter_type == REGION:
            res = df_region_filters.loc[df_region_filters[filter_value] == 1]
            orgs.extend(list(res["id"]))

        if filter_type == AGE:
            res = df_age_filters.loc[df_age_filters[filter_value] == 1]
            orgs.extend(list(res["id"]))
            age_flag = True
            age = filter_value

    if filter_type == GENDER:
        res = df_gender_filters.loc[df_gender_filters[filter_value] == 1]
        orgs.extend(list(res["id"]))
        gender_flag = True
        gender = filter_value

    if age_flag and gender_flag:
        res = df_age_gender_filters.loc[df_age_gender_filters[age] == 1]
        res = res.loc[res[gender] == 1]
        orgs.extend(list(res["id"]))

    # get a list of unique organisation ids, sorted by their no. of occurence
    sorted_orgs = sorted(set(orgs), key=lambda x: orgs.count(x), reverse=True)

    # get full orgainsation data corresponding to ids
    df = pd.DataFrame(columns=df_display.columns)
    for i in sorted_orgs:
        filtered_df = df_display.loc[df_display["id"] == i]
        df = df.append(filtered_df)

    df = df.astype(str).reset_index(drop=True)

    #convert array strings to array objects
    for i in range(len(df[CATEGORIES])):
        df[CATEGORIES][i] = ast.literal_eval(df[CATEGORIES][i])
        df[AGE][i] = ast.literal_eval(df[AGE][i])
        df[GENDER][i] = ast.literal_eval(df[GENDER][i])
        df[SUB_CATEGORIES][i] = ast.literal_eval(df[SUB_CATEGORIES][i])
        df[AGE_GENDER][i] = ast.literal_eval(df[AGE_GENDER][i])

    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res
