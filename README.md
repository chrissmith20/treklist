# README

[![Codeship Status for chrissmith20/treklist](https://app.codeship.com/projects/75400d90-2f0b-0138-53fa-3efebd8540f1/status?branch=master)](https://app.codeship.com/projects/385007)

# Travel List App

-Title: Treklist

Description:

-Authors:<br />
-Chris Smith <br />

Heroku Link
https://treklist.herokuapp.com/

# Technologies

-Ruby - 2.6.3
-Rails - 5.2.3
-React - 16.8.0
-Foundation-Rails - 6.5.3.0

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
