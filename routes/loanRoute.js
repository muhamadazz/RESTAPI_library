'use strict';

module.exports = function(app) {
    var myjson = require('../controller/loanController')
    
    app.route('/loan')
        .get(myjson.allLoans) //get a list of all loans
    app.route('/loan/add')
        .post(myjson.addLoan); // Add a new loan

    app.route('/loan/memberId/:memberId')
        .get(myjson.loansByMemberId); // Get a list of loans by memberId

    app.route('/loan/category/:category')
        .get(myjson.loansByCategory); // Get a list of loans by category

    app.route('/loan/bookId/:bookId')
        .get(myjson.showLoanByBookId); //Get details of loans by book id
    app.route('/loan/update')
        .put(myjson.updateLoanByBookId) // Updates borrowing information based by book id
    app.route('/loan/delete/:bookId')
        .delete(myjson.deleteLoanByBookId); // Delete Loans by book id

}