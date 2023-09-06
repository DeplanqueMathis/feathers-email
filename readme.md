# feathers-mail-api

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source framework for building APIs and real-time applications.
This project is a simple way to send email from a feathers api.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

  ```
  cd path/to/feathers-mail-api
  npm install
  ```
3. In your config file add the smtp config object like this : 
  ```
  "smtp": {

  }
  ```
4. Start your app

  ```
  npm start
  ```
5. With any api testing application like [Postman](https://www.postman.com/) call the following url

  ```
  http://localhost:3030/emails
  ```

  With following body parameters :

  ```
  {
    "name": "NAME",
    "from": "SENDER_EMAIL",
    "to": "DESTINATION_EMAIL",
    "subject": "SUBJECT",
    "text": "TEXT",
    "html": "HTML_TEXT"
  }
  ```
