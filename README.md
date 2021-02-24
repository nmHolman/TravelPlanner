# Travel, Travel, Travel

This application allows the user to add a location they are traveling to and it will pull the weather, a photo, and information about the Country. 

The aim of this project was to become more familiar with:

Webpack set-up & use
Webpack loaders & plugins
Using APIs
Using Sass

## Installing and Running the Application

### Install

Download the code for this project from GitHub and run `npm install` in the terminal to install the required packages. 

### APIs
You will need keys for three APIs:

* [Weatherbit](https://www.weatherbit.io/api)
* [Geonames](http://www.geonames.org/export/web-services.html)
* [Pixabay](https://pixabay.com/api/docs/)

Add your aquired keys to the `.env-UPDATE` file and rename this file to `.env`

### Run Development Environment
To run the development, enter the following commands into the terminal:

* `npm run build-dev` | Starts the webpack-dev-server
* `npm start` | Starts the express server

### Run Production Build
To run the production build, enter the following commands into the terminal:

* `npm run build-prod` | Creates the `dist` folder