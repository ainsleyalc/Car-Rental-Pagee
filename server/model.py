from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, String 
from datetime import datetime
convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}
metadata = MetaData(naming_convention=convention)
db = SQLAlchemy(metadata=metadata)


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True )
    First_name = db.Column(db.String)
    last_name = db.Column(db.String)
    date_signed = db.Column(db.DateTime, default=datetime.utcnow)
 
    profile_picture = db.Column(db.String, nullable=True)


class Vehicle(db.Model, SerializerMixin):
    __tablename__ = "vehicles"

    id = db.Column(db.Integer, primary_key=True)
    vehicle_Type = db.Column(db.String, nullable=False)
    vehicle_Year = db.Column(db.Integer, nullable=False)
    vehicle_Name = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable= False)
    image = db.Column(db.String)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    price = db.Column(db.Integer)
   