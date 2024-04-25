#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Movie, User, CartItem, Review


# Views go here!

class AllMovies(Resource):

    def get(self):
        movies = Movie.query.all()
        body = [movie.to_dict(only=('id', 'name', 'image', 'year', 'director', 'description', 'price')) for movie in movies]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_movie = Movie(name=request.json.get('name'), image=request.json.get('image'), year=request.json.get('year'), director=request.json.get('director'), description=request.json.get('description'), price=request.json.get('price'))
            db.session.add(new_movie)
            db.session.commit()
            body = new_movie.to_dict(only=('id', 'name', 'image', 'year', 'director', 'description', 'price'))
            return make_response(body, 201)
        except:
            body = {"error": "New movie could not be created."}
            return make_response(body, 400)


api.add_resource(AllMovies, '/movies')

class MovieByID(Resource):

    def get(self, id):
        movie = db.session.get(Movie, id)
        if movie:
            body = movie.to_dict(rules=('-reviews.movie', '-reviews.user', '-cart_items.movie_cart', '-cart_items.user_cart'))

            body['users'] = [user.to_dict(only=('id', 'username')) for user in movie.users]

            # body['users_cart'] = [user_cart.to_dict(only=('id', 'username')) for user_cart in movie_cart.users_cart]

            return make_response(body, 200)
        else:
            body = {"error": f"Movie {id} not found."}
            return make_response(body, 404)
        
    def patch(self, id):
        movie = db.session.get(Movie, id)
        if movie:
            try:
                for attr in request.json:
                    setattr(movie, attr, request.json[attr])
                db.session.commit()
                body = movie.to_dict(only=('id', 'name', 'image', 'year', 'director', 'description', 'price'))
                return make_response(body, 200)
            except:
                body = {"error": "Movie could not be updated."}
                return make_response(body, 400)
        else:
            body = {"error": f"Movie {id} could not be found."}
            return make_response(body, 404)
        
    def delete(self, id):
        movie = db.session.get(Movie, id)
        if movie:
            db.session.delete(movie)
            db.session.commit()
            body = {}
            return make_response(body, 204)
        else:
            body = {"error": f"Movie {id} was not found"}
            return make_response(body, 404)

api.add_resource(MovieByID, '/movies/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

