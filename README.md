# Crowdcube backend

implementation of the backend with Typescript and NodeJS.
the backend interacts with a persistence layer (mongoDB) on heroku cloud.

## install

- yarn install or npm install

- npm run start

- npm run test (to run the test)

## storage
there's an initial phase that populates the remote db with ideas and categories available (for simplicity they're fetched from the files src/config/ideas.json and src/config/categories.json.
Once the db is populated the server is ready to handle the requests coming come from the client.

Mongoose library is used to define both the schema of Idea and Category and for general CRUD operations.

## routes
most of the work is on the front, expose to the client there are two routes to fetch both the ideas and the categories.




