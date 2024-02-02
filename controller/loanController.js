'use strict';

var response = require('../res');
var connection = require('../config/connection');


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
    let borrower = req.body.borrower;
    let memberId = req.body.memberId; 
    let book = req.body.book;
    let bookId = req.body.bookId;
    let category = req.body.category;
    let loanDate = req.body.loan_date;
    let dueDate = req.body.due_date;

    connection.query('INSERT INTO loan (borrower, memberId, book, bookId, category, loan_date, due_date ) VALUES(?,?,?,?,?,?,?)', [borrower, memberId, book, bookId, category,loanDate,dueDate],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                connection.query('UPDATE book SET available_status =0  WHERE book_id = ?',[bookId]);
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
    let loanId = req.body.loan_id;
    let borrower = req.body.borrower;
    let memberId = req.body.memberId; 
    let book = req.body.book;
    let bookId = req.body.bookId;
    let category = req.body.category;
    let loanDate = req.body.loan_date;
    let dueDate = req.body.due_date;

    connection.query('UPDATE loan SET borrower=?,memberId=?,book=?,bookId=?,category=?,loan_date=?,due_date=? WHERE loan_id = ?', [borrower, memberId,book,bookId,category,loanDate,dueDate,loanId],
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
                connection.query('UPDATE book SET available_status =1  WHERE book_id = ?',[bookId]);
                response.ok("Loan deleted successfully.", res);
            }
        });
};

