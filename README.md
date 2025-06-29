# React-Node-Scratch

## Run Commands

Run React Frontend with: `make run-frontend` </br>
Run React Backend with: `make run-backend` </br>

Check ALL files with Prettier: `make check-prettier` </br>
Format ALL files with Prettier: `make run-prettier` </br>


# What's the purpose?
Multi-Tool is a hands-on React sandbox built to level up your frontend and backend skills. It's not just about writing code — it's about experimenting, building real features, and learning through trial and error. Think of it as your dev dojo: break things, fix them, and grow. Every click, every bug, every console.log is part of the process.

</br>


## Here's what's currently loaded up:


### The Weather
Status: Complete

Code: [Here](frontend/src/components/weather.js) </br>

* The Weather — live, geolocation-based weather data with caching
* Utilizes a free weather API: https://www.weatherapi.com
* Caches weather data every hour rather than requesting it on every refresh

</br>

### Unauthenticated Messages
Status: Incomplete

Front-End Code: [Here](frontend/src/components/unauthenticatedMessages.js) </br>
Back-End Code: [Here](backend/routes/unauthenticatedMessagesRouter.js) </br>

* Connected to a database using custom Node.js API routes
* Dynamic frontend built with React Hooks and functional components
* Add, update, and delete entries in real-time — no authentication required
* Backend profanity filters included to prevent inappropriate language from being submitted to the database.

</br>

# Here's a list of potential projects:


###  Redux Video Game Tracker
Status: In Progress

Front-End Code: [Here](frontend/src/components/unauthenticatedMessages.js) </br>
Back-End Code: [Here](backend/routes/videoGamesRouter.js) </br>

* Connected to a database using custom Node.js API routes
* Utilizes redux for state management and Class Components
* Add, change, or delete a list of video games played
* Each listed video game should have these properties: id, uuid, name, platform, rating, genre, cover_image_url, external_url, favorite, comments, completed, replayable, started_at, finished_at
* No user authentication required for this yet
* Backend profanity filters included to prevent inappropriate language from being submitted to the database.
* Backend video game list should be filterable based on platform, rating, and favorite

</br>

### Book Club or Watch List
Status: Incomplete

<!-- Code: [Here]() </br> -->

Mini-app that showcases user authentication and Redux in a book club or watch list setting
Redux should utilize: "redux", "react-redux", "redux-thunk", "redux-logger"
* Utilizes Class Components
* Each user can login and add to a list of things they have enjoyed
* Users can view other users lists that are public
* Users can create private lists that other users can not see, unless invited to
* Users can NOT create, read, update, or delete their data or others data if they are not logged in

</br>