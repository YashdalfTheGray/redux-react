# redux-react
Egghead course on Redux

Current location: Redux: React Todo List Example (Adding a Todo)

## Installing

Running an `npm install` after cloning the repository will install all the dependencies.

## Running

The app can be built and run by running `gulp start`. This will start a server on `localhost:8080`.

For development, `gulp watch` and `gulp serve` might be more preferable since changes are automatically compiled and the server runs in a separate process.

## Cleaning

The `dist` folder contains all the built sources for the app. It can be cleaned using `gulp clean:dist`. `gulp clean:modules` will clean up the `node_modules` folder. After a `gulp clean:modules`, an `npm install` is going to be needed before any other commands are run.
