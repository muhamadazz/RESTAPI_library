'use strict';

module.exports = function(app) {
    var myjson = require('../controller/memberController')
    
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

}