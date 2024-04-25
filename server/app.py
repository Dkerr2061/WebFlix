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
# ===================================================================================

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

# =================================================================================

class AllUsers(Resource):

    def get(self):
        users = User.query.all()
        body = [user.to_dict(only=('id', 'username', 'password_hash', 'type')) for user in users]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_user = User(username=request.json.get('username'), password_hash=request.json.get('password_hash'), type=request.json.get('type'))
            db.session.add(new_user)
            db.session.commit()
            body = new_user.to_dict(only=('id', 'username', 'password_hash', 'type'))
            return make_response(body, 201)
        except:
            body = {"error": "Could not create new user."}
            return make_response(body, 400)

api.add_resource(AllUsers, '/users')

class UserByID(Resource):

    def get(self, id):
        user = db.session.get(User, id)
        if user:
            try:
                body = user.to_dict(rules=('-reviews.movie', '-reviews.user', '-cart_items.movie_cart', '-cart_items.user_cart'))

                body['movies'] = [movie.to_dict(only=('id', 'name', 'image', 'year', 'director', 'description', 'price')) for movie in user.movies]

                return make_response(body, 200)
            except:
                body = {"error": "User not found"}
                return make_response(body, 404)
        else:
            body = {"error": f"User {id} was not found."}
            return make_response(body, 404)
        
    def delete(self, id):
        user = db.session.get(User, id)
        if user:
            try:
                db.session.delete(user)
                db.session.commit()
                body = {}
                return make_response(body, 204)
            except:
                body = {"error": f"User {id} could not be deleted"}
                return make_response(body, 400)
        else:
            body = {"error": f"User {id} could not be found"}
            return make_response(body, 404)


api.add_resource(UserByID, '/users/<int:id>')

# =================================================================================

class AllReviews(Resource):

    def get(self):
        reviews = Review.query.all()
        body = [review.to_dict(rules=('-movie.reviews', '-user.reviews', '-user.cart_items', '-movie.cart_items')) for review in reviews]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_review = Review(rating=request.json.get('rating'), text=request.json.get('text'), movie_id=request.json.get('movie_id'), user_id=request.json.get('user_id'))
            db.session.add(new_review)
            db.session.commit()
            body = new_review.to_dict(only=('id', 'rating', 'text', 'movie_id', 'user_id'))
            return make_response(body, 201)
        except:
            body = {"error": "Review could not be created."}
            return make_response(body, 400)

api.add_resource(AllReviews, '/reviews')

class ReviewByID(Resource):

    def get(self, id):
        pass
        review = db.session.get(Review, id)
        if review:
            try:
                body = review.to_dict(rules=('-movie.reviews', '-user.reviews', '-user.cart_items', '-movie.cart_items'))
                return make_response(body, 200)
            except:
                body = {"error": "Could not fetch review at this moment."}
                return make_response(body, 400)
        else:
            body = {"error": f"Review {id} could not be found."}
            return make_response(body, 404)
        
    def patch(self, id):
        review = db.session.get(Review, id)
        if review:
            try:
                for attr in request.json:
                    setattr(review, attr, request.json[attr])
                db.session.commit()
                body = review.to_dict(only=('id', 'rating', 'text', 'movie_id', 'user_id'))
                return make_response(body, 200)
            except:
                body = {"error": "Review could not be updated."}
                return make_response(body, 400)
        else:
            body = {"error": f"Review {id} not found."}
            return make_response(body, 404)
        
    def delete(self, id):
        review = db.session.get(Review, id)
        if review:
            db.session.delete(review)
            db.session.commit()
            body = {}
            return make_response(body, 204)
        else:
            body = {"error": f"Review {id} not found."}
            return make_response(body, 404)

api.add_resource(ReviewByID, '/reviews/<int:id>')

class AllCartItems(Resource):

    def get(self):
        cart_items = CartItem.query.all()
        body = [cart_item.to_dict(only=('id', 'movie_id', 'user_id')) for cart_item in cart_items]
        return make_response(body, 200)
    
    def post(self):
        try:
            new_cart_item = CartItem(movie_id=request.json.get('movie_id'), user_id=request.json.get('user_id'))
            db.session.add(new_cart_item)
            db.session.commit()
            body = new_cart_item.to_dict(only=('id', 'movie_id', 'user_id'))
            return make_response(body, 201)
        except:
            body = {"error": "Could not add item to cart."}
            return make_response(body, 400)

api.add_resource(AllCartItems, '/cart_items')

class CartItemsByID(Resource):

    def get(self, id):
        cart_item = db.session.get(CartItem, id)
        if cart_item:
            try:
                body = cart_item.to_dict(only=('id', 'movie_id', 'user_id'))
                return make_response(body, 200)
            except:
                body = {"error": "Could not process request."}
                return make_response(body, 400)
        else:
            body = {"error": f"Cart item {id} could not be found."}
            return make_response(body, 404)
        
    def delete(self, id):
        cart_item = db.session.get(CartItem, id)
        if cart_item:
            db.session.delete(cart_item)
            db.session.commit()
            body = {}
            return make_response(body, 204)
        else:
            body = {"error": f"Cart item {id} not found."}

api.add_resource(CartItemsByID, '/cart_items/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

