import pandas as pd
import model.utils.strings as strings

# organisations raw data
df = pd.read_csv(strings.ORGANISATIONS_DATA)

# keys df
df_age_keys = pd.read_csv(strings.AGE_KEYS)
df_dots_categories_keys = pd.read_csv(strings.DOTS_CATEGORIES_KEYS)
df_dots_subcategories_keys = pd.read_csv(strings.DOTS_SUBCATEGORIES_KEYS)
df_gender_keys = pd.read_csv(strings.GENDER_KEYS)
df_region_keys = pd.read_csv(strings.REGION_KEYS)
df_subcategory_mapping = pd.read_csv(strings.SUBCATEGORIES_MAPPING)

# filters df
df_age_filters = pd.read_csv(strings.AGE_FILTER)
df_age_gender_filters = pd.read_csv(strings.GENDER_AGE_FILTER)
df_dots_subcategories_filters = pd.read_csv(strings.DOTS_SUBCATEGORIES_FILTER)
df_gender_filters = pd.read_csv(strings.GENDER_FILTER)
df_region_filters = pd.read_csv(strings.REGION_FILTER)

#quiz df
df_questions = pd.read_csv(strings.QUESTIONS)
df_answers = pd.read_csv(strings.ANSWERS)

# processed df
df_linked_data = pd.read_json(strings.ORGANISATION_DISPLAY, lines=True)