import os
from dotenv import load_dotenv

load_dotenv()


class config:
    database_url = os.getenv('DATABASE_URI')
