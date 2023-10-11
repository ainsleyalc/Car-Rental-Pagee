import os
from flask import Flask , make_response , jsonify  , session, request
from flask_migrate import Migrate
from model import db, User, Vehicle
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy import MetaData
from sqlalchemy import create_engine
import psycopg2
def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://cars_be1j_user:Ed8rJohhyAlOP8MHO9RXeRvjNma0QJDP@dpg-ckipl98mccbs73bjedgg-a.ohio-postgres.render.com/cars_be1j"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    migrate = Migrate(app, db, render_as_batch=True)
    CORS(app)
    api = Api(app)

    class Vehicles(Resource):
        def get(self):
            vehicles = [vehicle.to_dict() for vehicle in Vehicle.query.all()]
            return make_response(jsonify(vehicles), 201)

    api.add_resource(Vehicles, "/vehicles")

    @app.route("/")
    def home():
        return "<h1>Hello</h1>"

    return app  # Make sure you return the Flask app instance

# Check if this script is the main module
if __name__ == '__main__':
    app = create_app()  # Assign the Flask app instance to the 'app' variable
    app.run(debug=True, port=5555)








