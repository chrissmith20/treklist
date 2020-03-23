# README

[![Codeship Status for chrissmith20/treklist](https://app.codeship.com/projects/75400d90-2f0b-0138-53fa-3efebd8540f1/status?branch=master)](https://app.codeship.com/projects/385007)

# Travel List App

# Title: Treklist

# Description:
This application is designed to help a user keep a list of locations from around the world that they would like to one day travel to.
The opening page requires a log in or sign up to ensure users list belongs only to them.
Once they complete this step, they are redirected to the home page of the app which shows an interactive GoogleMap and a form showing a title and description.
A user can then type in any location in the title field and it will return the first result in the GooglePlaces API. This result is then persisted onto the list once the user types a description and selects submit.

# Dream Features:
-Continue adding style via HTML and CSS <br />
-Add an edit and delete function to allow users to manage the list more efficiently <br />
-Persist a marker on the map once a user has entered a location <br />
-Create a checkmark box next to each location on the list for the user to select locations they've visited <br />
-Allow user to separate list in categories for organization

# Authors:<br />
-Chris Smith <br />

# Heroku Link:
https://treklist.herokuapp.com/

# Technologies

-Ruby - 2.6.3 <br />
-Rails - 5.2.3 <br />
-React - 16.8.0 <br />
-Foundation-Rails - 6.5.3.0 <br />

# Setup

To set up this app, download the repo and run the following commands in your terminal in exact order:

-yarn install<br />
-bundle exec bundle install<br />
-bundle exec rake db:create<br />
-bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate<br />
-bundle exec rake db:seed<br />
-yarn start<br />
-new tab- bundle exec rails s<br />
-Navigate your browser to localhost:3000

# Testing

To run tests, run these files in a separate terminal tab:<br />
-bundle exec rake db:test:prepare<br />
-bundle exec rspec<br />
-yarn run test
