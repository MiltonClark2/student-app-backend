// import code for express
const express = require('express');

// initialize app
const app = express();

// Route
app.get('/', (request, response) => {
    response.send('Hello world!');
});

// export app
module.exports = app;