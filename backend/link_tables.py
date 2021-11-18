import pandas as pd

df = pd.read_csv('organisations_in_senegal_konab.csv')  # .reset_index(drop=True)
dots_sc = pd.read_csv('dots_subcategories.csv')
dots_sc_key_val = pd.read_csv('dots_subcategories_key_value.csv')
sub_cats_row = []
for index, row in dots_sc.iterrows():
    org_sub_cats = []
    for dots_cat_id in dots_sc.columns[2:]:
        val = row[dots_cat_id]
        if val == 1:
            val_id = dots_sc_key_val.loc[dots_sc_key_val['dots_subcategory_id'] == int(dots_cat_id)]
            category = val_id.iloc[0]['dots_subcategory']
            org_sub_cats.append(category)
    sub_cats_row.append(org_sub_cats)
df['categories'] = sub_cats_row
df.to_json('organisation_display.json', orient='records', lines=True)
