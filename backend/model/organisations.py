import ast
import model.utils.utils as utils
import model.utils.data_frames as dfs

def get_all():
    '''
    :return: dictionary of all organisations in db
    '''

    df = dfs.df_linked_data.astype(str)
    df = utils.str_to_list(df)
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res


def get_one(org_id):
    '''

    :param org_id: organisation id
    :return: get info of a single organisation corresponding to organisation id
    '''
    df = dfs.df_linked_data.astype(str)
    df = utils.str_to_list(df)
    df = df.loc[df['id'] == org_id]
    js = df.to_json(orient='index')
    js = ast.literal_eval(js)
    res = list(js.values())
    return res
