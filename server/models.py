from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!

class Movie(db.Model, SerializerMixin):
  __tablename__ = 'movies'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, unique=True)
  image = db.Column(db.String, nullable=False)
  year = db.Column(db.Integer, nullable=False)
  director = db.Column(db.String, nullable=False)
  description = db.Column(db.String, nullable=False)
  price = db.Column(db.Integer, nullable=False)

  reviews = db.relationship('Review', back_populates='movie', cascade='all')
  cart_items = db.relationship('CartItem', back_populates='user_cart', cascade='all')

  users = association_proxy('reviews', 'user', creator = lambda u: User(user=u))
  users_cart = association_proxy('cart_items', 'user_cart', creator = lambda uc: User(user_cart=uc))

  @validates('name', 'image', 'director', 'description')
  def validate_fields(self, key, value):
    if not value:
      raise ValueError(f'{key} must be completed.')
    else: 
      return value
    
  @validates('year')
  def validate_year(self, key, value):
    if not (isinstance(value, int)) and (1900 <= value):
      raise ValueError('Year must be an integer and it has to be greater than 1900.')
    else:
      return value

# -----------------------------------------------------------------------------------------------------------------------------------------------------

class User(db.Model, SerializerMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String, unique=True)
  password_hash = db.Column(db.String, nullable=False)
  type = db.Column(db.String, nullable=False)

  reviews = db.relationship('Review', back_populates='user', cascade='all')
  cart_items = db.relationship('CartItem', back_populates='user_cart', cascade='all')

  movies = association_proxy('reviews', 'movie', creator = lambda m: Movie(movie=m))
  movies_cart = association_proxy('cart_items', 'movie_cart', creator = lambda mc: User(movie_cart=mc))

  @validates('username', 'password_hash')
  def validate_username_and_password(self, key, value):
    if not value and (3 <= len(value) <= 25):
      raise ValueError(f'{key} must be 3 to 25 characters long.')
    else:
      return value

# ----------------------------------------------------------------------------------------------------------------------------------------------------

class CartItem(db.Model, SerializerMixin):
  __tablename__ = 'cart_items'

  id = db.Column(db.Integer, primary_key=True)

  movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  movie_cart = db.relationship('Movie', back_populates='cart_items')
  user_cart = db.relationship('User', back_populates='cart_items')

# -----------------------------------------------------------------------------------------------------------------------------------------------------

class Review(db.Model, SerializerMixin):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer)
  text = db.Column(db.String)

  movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  movie = db.relationship('Movie', back_populates='reviews')
  user = db.relationship('User', back_populates='reviews')

  @validates('rating')
  def validate_rating(self, key, value):
    if not (isinstance(value, int)) and (0 <= value <= 10):
      raise ValueError('Rating must be an integer between 0 to 10.')
    else:
      return value
    
  @validates('text')
  def validate_text(self, key, value):
    if not (0 <= len(value) <= 250):
      raise ValueError('Review text must be between 1 to 250 characters long.')
    else:
      return value






