import os
from sqlalchemy import String, Integer, DateTime, create_engine
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Boolean, Text
from config import config
import pandas as pd
import strings

db_uri = config.database_url

def load_csv_data(csv):
    """Create DataFrame from local CSV."""
    df = pd.read_csv(csv)
    return df

class Database:
    """Pandas database client."""

    def __init__(self, db_uri):
        self.engine = create_engine(
            db_uri,
            echo=True
        )

    def upload_dataframe_to_sql(self, csv_df, table_name,dtype):
        """Upload data to database with proper dtypes."""
        csv_df.to_sql(
            table_name,
            self.engine,
            if_exists='replace',
            index=False,
            chunksize=500,
            dtype=dtype
        )
        result = f'Loaded {len(csv_df)} rows INTO {table_name} table.'        
        print(result)
        return result

    def add_primary_key(self,table_name,primary_key='id'):
        primary_key_sql = f'ALTER TABLE {table_name} ADD PRIMARY KEY ({primary_key});'
        with self.engine.connect() as con:
            con.execute(primary_key_sql)
    
    def add_foreign_key(self,table_name,foreign_key,foreign_table):
        foreign_key_sql = f'ALTER TABLE {table_name} ADD FOREIGN KEY ({foreign_key}) REFERENCES {foreign_table}({foreign_key});'
        with self.engine.connect() as con:
            con.execute(foreign_key_sql)

    def get_dataframe_from_sql(self, table_name):
        """Create DataFrame form SQL table."""
        table_df = pd.read_sql_table(
            table_name,
            con=self.engine
        )
        result = f'Loaded {len(table_df)} rows FROM {table_name}.'
        print(table_df.info())
        return result

# ----------------------------------------------------------------------------#
# Organisations.
# ----------------------------------------------------------------------------#
def load_organisation ():
    organisations_dtype ={
        "id": Integer,
        "name": String,
        "objective": Text,
        "service": Text,
        "contactable": Boolean,
        "phone_number": String,
        "email": String,
        "website": String,
        "address": String,
        "region": String,
        "latitude": String,
        "longitude": String,
        "opening_hours": String,
        "hotline": String,
        "facebook": String,
        "linkedin": String,
        "twitter": String,
        "youtube": String,
        "instagram": String,
        "tiktok": String,
        "flicker": String,
        "sound_cloud": String,
    }

    organisation_df = load_csv_data(strings.ORGANISATIONS_DATA)
    db = Database(db_uri)
    upload_result = db.upload_dataframe_to_sql(organisation_df, 'organisations', organisations_dtype)
    db.add_primary_key('organisations')


def load_sdg ():
    sdg_dtype ={
        "sdg_id": Integer,
        "sdg": String,
        "sdg_explanation": String,
        "sdg_constructive_message_link": String,
        "sdg_constructive_message": String,
    }

    sdg_df = load_csv_data(strings.SDG_KEYS)
    db = Database(db_uri)
    upload_result = db.upload_dataframe_to_sql(sdg_df, 'sdg', sdg_dtype)
    db.add_primary_key('sdg','sdg_id')

def load_sdg_target ():
    sdg_t_dtype ={
        "sdg_id": Integer,
        "sdg_target_idname": String,
        "sdg_target_id": String,
        "sdg_target": String,
        "sdg_target_description": String,
    }

    sdg_t_df = load_csv_data(strings.SDG_TARGET_KEYS)
    db = Database(db_uri)
    upload_result = db.upload_dataframe_to_sql(sdg_t_df, 'sdg_target', sdg_t_dtype)
    db.add_primary_key('sdg_target','sdg_target_id')
    db.add_foreign_key('sdg_target','sdg_id','sdg')

def load_categories ():
    categories_dtype ={
        "key": Integer,
        "sdg_id": Integer,
        "translation_key": String,
        "value": String,
        "icon": String
    }

    categories_df = load_csv_data(strings.DOTS_CATEGORIES_KEYS)
    db = Database(db_uri)
    upload_result = db.upload_dataframe_to_sql(categories_df, 'categories', categories_dtype)
    db.add_primary_key('categories','key')
    db.add_foreign_key('categories','sdg_id','sdg')

def load_subcategories ():
    subcategories_dtype ={
        "id": Integer,
        "sdg_id": Integer,
        "sdg_target_id": String,
        "dots_category_id": String,
        "value": String,
        "translation_key": String,
        "icon": String
    }

    subcategories_df = load_csv_data(strings.DOTS_SUBCATEGORIES_KEYS)
    db = Database(db_uri)
    upload_result = db.upload_dataframe_to_sql(subcategories_df, 'subcategories', subcategories_dtype)

load_organisation()
load_sdg()
load_sdg_target()
load_categories()
# load_subcategories()