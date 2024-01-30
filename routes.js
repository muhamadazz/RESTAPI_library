'use strict';

module.exports = function(app) {
    var myjson = require('./controller')

    app.route('/')
        .get(myjson.index);
    
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

    // ... (previous code)

    app.route('/member')
        .get(myjson.allMembers)
        // .post(myjson.addMember); // Add a new member

    app.route('/member/memberId/:memberId')
        .get(myjson.showMemberById)
        // .put(myjson.updateMember) // Update details of a member
        // .delete(myjson.deleteMember); // Delete a member

// ... (rest of the code)

// ... (previous code)

    app.route('/loan')
        .get(myjson.allLoans)
        // .post(myjson.addLoan); // Add a new loan

    app.route('/loan/memberId/:memberId')
        .get(myjson.loansByMemberId); // Get a list of loans by memberId

    app.route('/loan/category/:category')
        .get(myjson.loansByCategory); // Get a list of loans by category

    app.route('/loan/bookId/:bookId')
        .get(myjson.showLoanByBookId)
        // .put(myjson.updateLoanByBookId) // Updates borrowing information based by book id
        // .delete(myjson.deleteLoanByBookId); // Delete Loans by book id

    // ... (rest of the code)

}