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
    let book = req.body;
    connection.query('INSERT INTO book SET ?', book,
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
    let id = req.params.id;
    let updatedBook = req.body;
    connection.query('UPDATE book SET ? WHERE book_id = ?', [updatedBook, id],
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

// ... (previous code)

// 9. Get a list of all members
exports.allMembers = function(req, res) {
    connection.query('SELECT * FROM member', function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// 10. Get details of a specific member by member id
exports.showMemberById = function(req, res){
    let memberId = req.params.memberId;
    connection.query('SELECT * FROM member WHERE id = ?', [memberId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 11. Add a new member
exports.addMember = function(req, res){
    let member = req.body;
    connection.query('INSERT INTO member SET ?', member,
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Member added successfully.", res);
            }
        });
};

// 12. Update details of a member
exports.updateMember = function(req, res){
    let memberId = req.params.memberId;
    let updatedMember = req.body;
    connection.query('UPDATE member SET ? WHERE id = ?', [updatedMember, memberId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Member updated successfully.", res);
            }
        });
};

// 13. Delete a member
exports.deleteMember = function(req, res){
    let memberId = req.params.memberId;
    connection.query('DELETE FROM member WHERE id = ?', [memberId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Member deleted successfully.", res);
            }
        });
};

// ... (rest of the code)


// ... (previous code)

// 14. Get a list of all loans
exports.allLoans = function(req, res) {
    connection.query('SELECT * FROM loan', function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// 15. Get a list of loans by memberId
exports.loansByMemberId = function(req, res){
    let memberId = req.params.memberId;
    connection.query('SELECT * FROM loan WHERE memberId = ?', [memberId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 16. Get a list of loans by category
exports.loansByCategory = function(req, res){
    let category = req.params.category;
    connection.query('SELECT * FROM loan WHERE category = ?', [category],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 17. Add a new loan
exports.addLoan = function(req, res){
    let loan = req.body;
    connection.query('INSERT INTO loan SET ?', loan,
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Loan added successfully.", res);
            }
        });
};

// 18. Get details of loans by book id
exports.showLoanByBookId = function(req, res){
    let bookId = req.params.bookId;
    connection.query('SELECT * FROM loan WHERE bookId = ?', [bookId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// 19. Updates borrowing information based by book id
exports.updateLoanByBookId = function(req, res){
    let bookId = req.params.bookId;
    let updatedLoan = req.body;
    connection.query('UPDATE loan SET ? WHERE bookId = ?', [updatedLoan, bookId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Loan information updated successfully.", res);
            }
        });
};

// 20. Delete Loans by book id
exports.deleteLoanByBookId = function(req, res){
    let bookId = req.params.bookId;
    connection.query('DELETE FROM loan WHERE bookId = ?', [bookId],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok("Loan deleted successfully.", res);
            }
        });
};

// ... (rest of the code)

