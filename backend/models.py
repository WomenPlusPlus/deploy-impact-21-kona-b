import os
from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.sql.sqltypes import Boolean, Text, Time
from flask_sqlalchemy import SQLAlchemy
from config import config

database_path = config.database_url

db = SQLAlchemy()


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)


def db_drop_and_create_all():
    db.drop_all()
    db.create_all()

# ----------------------------------------------------------------------------#
# Actors.
# ----------------------------------------------------------------------------#


class Organisations(db.Model):
    __tablename__ = 'organisations'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    objective = Column(Text)
    services = Column(String)
    target_groups = Column(String)
    contactable = Column(Boolean)
    phone_number = Column(Integer)
    email = Column(String)
    website = Column(String)
    address = Column(String)
    region = Column(String)
    latitude = Column(Integer)
    longitude = Column(Integer)
    opening_hours = Column(String)
    hotline = Column(Integer)
    facebook = Column(String)
    linkedin = Column(String)
    twitter = Column(String)
    youtube = Column(String)
    instagram = Column(String)
    tiktok = Column(String)
    flicker = Column(String)
    sound_cloud = Column(String)


    def __init__(self, name, address):
        self.name = name
        self.address = address

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.address
        }

