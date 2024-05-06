# WebFlix

## Learning Goals

- What I set out to learn with this project was the following:
  -Create an app that uses a Flask backend with a React frontend.

  -RESTful API endpoints for CRUD operations on movies, users, reviews, and cart items.

  -Create animation effects using React Awesome Reveal to enhance user experience.

  -Integrate Tailwind CSS and Daisy UI for responsive and visually appealing UI.

  -Create 4 tables which have a one to many relationships and a many to many relationship.

  -Create new users through the front end and secure their passwords with Bcrypt.

  -Have existing users login and create sessions to keep them logged in even when they refresh the page.

  -Create at least 5 routes which the client can use to navigate the website.

  -Have the database store information for movies, cart, users and reviews.

  -Have the front end display the desired information.

  -Have customers browse movies, view movie details, view reviews, wrtie reviews, add movies to cart, remove movies from cart and checkout.

  -Have admin users do everything that customers can do, plus add, update and delete movies.


---

## Overview

This project is a web application developed using Flask SQLAlchemy for the backend and React for the frontend. It incorporates authentication with bcrypt, follows RESTful API practices, and utilizes Tailwind CSS, Daisy UI, and React Awesome Reveal for styling and animations.

---

## Database Structure
The project's database consists of four main tables:

-Movies: Stores information about movies.

-Users: Contains user data including authentication details.

-Reviews: Connects users and movies, allowing users to write reviews for movies.

-Cart Items: Represents the items in the user's shopping cart, linking users and movies.

---

## Setup

To start:

1. clone repository:
  ```
  git clone git@github.com:Dkerr2061/webflix.git
  ```
2. Install python dependancies:
  ```
  pipenv install
  ```
3. Install javascript dependancies:
  ```
  cd client
  npm install
  ```
4. Start backend:
  ```
  pipenv shell
  cd server
  python app.py
  ```
5. Start frontend:
  ```
  cd client
  npm start
  ```
6. Enjoy!


---

## Usage

- Register or log in to access the application features.

- Browse movies, add them to your cart, and write reviews.

- Manage your cart items and view your reviews.

- Log out when finished using the application.

---

## Technologies Used
-Flask SQLAlchemy
-React
-bcrypt
-Tailwind CSS
-Daisy UI
-React Awesome Reveal

---

## Conclusion

A lot of work goes into a full-stack application, but it all relies on concepts
that you've practiced thoroughly throughout this phase. Hopefully this template
and guide will get you off to a good start with your Phase 4 Project.

Happy coding!

---

## Contributors
David Kerr - Full Stack Developer




