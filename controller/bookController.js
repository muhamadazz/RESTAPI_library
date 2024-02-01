'use strict';

var response = require('../res');
var connection = require('../config/connection');


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

// 3. Get a list of books by publishedYear
exports.booksByPublishedYear = function(req, res){
    let publishedYear = req.params.publishedYear;
    connection.query('SELECT * FROM book WHERE published_year = ?', [publishedYear],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 4. Get a list of books by category
exports.booksByCategory = function(req, res){
    let category = req.params.category;
    connection.query('SELECT * FROM book WHERE category = ?', [category],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 5. Add a new book
exports.addBook = function(req, res){
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let publishedYear = req.body.published_year;
    let availableStatus = req.body.available_status;

    connection.query('INSERT INTO book (title, author, category, published_year, available_status) VALUES(?,?,?,?,?)', [title, author, category, publishedYear, availableStatus],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Book added successfully.", res);
            }
        });
};

// 6. Update details of a book
exports.updateBook = function(req, res){
    let id = req.body.book_id;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let publishedYear = req.body.published_year;
    let availableStatus = req.body.available_status;

    connection.query('UPDATE book SET title=?, author=?, category=?, published_year=?, available_status=? WHERE book_id=?', [title,author,category,publishedYear,availableStatus,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Book updated successfully.", res);
            }
        });
};

// 7. Get a list of books by available_status
exports.booksByAvailability = function(req, res){
    let availableStatus = req.params.availableStatus;
    connection.query('SELECT * FROM book WHERE available_status = ?', [availableStatus],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 8. Delete a book
exports.deleteBook = function(req, res){
    let id = req.params.id;
    connection.query('DELETE FROM book WHERE book_id = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Book deleted successfully.", res);
            }
        });
};


