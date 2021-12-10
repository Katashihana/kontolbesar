'use strict';
const Far = require('./lib/brainly.js');

const Brainly = async (query, count = 5) => {
    let response = await Far(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

module.exports = Brainly;
