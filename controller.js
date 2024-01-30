'use strict';

var response = require('./res');
var connection = require('./config/connection');

exports.index = function(req,res){
    response.ok("running my Rest API", res)
};

//1. Get a list of all books
exports.allbooks = function(req,res) {
    connection.query('SELECT * FROM book', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//2. Get details of a book by book id
exports.ShowBookbyId = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM book WHERE book_id = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
};