'use strict';

module.exports = function(app) {
    var myjson = require('./controller')

    app.route('/')
        .get(myjson.index);
    
    app.route('/book')
        .get(myjson.allbooks);
    app.route('/book/:id')
        .get(myjson.ShowBookbyId);
}