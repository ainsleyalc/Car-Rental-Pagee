import os
from flask import Flask , make_response , jsonify  , session, request
from flask_migrate import Migrate
from model import db, User, Vehicle
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy import MetaData


app = Flask(__name__)
api = Api(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
migrate = Migrate(app,db,render_as_batch=True)

CORS(app)

db.init_app(app)

@app.route("/")
def home():
    return "<h1>hello<h1>"



class Vehicles(Resource):
    def get(self):
      vehicle = [vehicle.to_dict() for vehicle in Vehicle.query.all()]
      return make_response(jsonify(vehicle), 201)



api.add_resource(Vehicles, "/vehicles")





if __name__ == '__main__':
    app.run(debug=True, port=5555)



