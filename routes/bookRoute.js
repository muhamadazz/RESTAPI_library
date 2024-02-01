'use strict';

module.exports = function(app) {
    var myjson = require('../controller/bookController')
    
    app.route('/book')
        .get(myjson.allbooks); // get a list of all books
    app.route('/book/bookId/:id')
        .get(myjson.ShowBookbyId); // get a list of a books by book id
    
    app.route('/book/published/:publishedYear')
        .get(myjson.booksByPublishedYear); // get a list of books by published year

    app.route('/book/category/:category')
        .get(myjson.booksByCategory); // Get a list of books by category

    app.route('/book/available/:availableStatus')
        .get(myjson.booksByAvailability); // Get a list of books by available_status
    app.route('/book/add')
        .post(myjson.addBook); //add a new book
    app.route('/book/update')
        .put(myjson.updateBook); //Update details of a book
    app.route('/book/delete/:id')
        .delete(myjson.deleteBook);//delete a book

}