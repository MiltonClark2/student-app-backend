const express = require('express');
const controller = express.Router();

const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('../utils/stringUtils');

controller.get('/capitalizeName/:name/', (request, response) => {
    try{
        // Get name
        const name = request.params.name
        console.log(name)
        // Get result of repeatNTimesWithSpace
        const capitalizedName = capitalizeFirstLetter(name);
        // Send string response of result
        response.send(capitalizedName);
    } catch(err){
        response.send("There was an error.")
    }
})

controller.get('/:name/:times', (request, response) => {
    try{

        // Get name
        const name = request.params.name

        // Get times
        const times = request.params.times

        // Get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times);

        // Send string response of result
        response.send(repeatedNames);

    } catch (err){
        response.send("There was an error.")
    }
});

module.exports = controller;