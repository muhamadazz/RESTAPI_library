'use strict';

module.exports = function(app) {
    var myjson = require('./controller')
    
    app.route('/book')
        .get(myjson.allbooks);
    app.route('/book/bookId/:id')
        .get(myjson.ShowBookbyId);
    
    app.route('/book/published/:publishedYear')
        .get(myjson.booksByPublishedYear);

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

    // ... (previous code)

    app.route('/member')
        .get(myjson.allMembers) // get all members

    app.route('/member/memberId/:memberId')
        .get(myjson.showMemberById) // Get details of a specific member by member id
    app.route('/member/update')
        .put(myjson.updateMember) // Update details of a member
    app.route('/member/delete/:memberId')
        .delete(myjson.deleteMember); // Delete a member
    app.route('/member/add')
        .post(myjson.addMember)// Add a new member

// ... (rest of the code)

// ... (previous code)

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

    // ... (rest of the code)

}