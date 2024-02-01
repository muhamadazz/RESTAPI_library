'use strict';

var response = require('../res');
var connection = require('../config/connection');


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
    let id = req.body.id;
    let name = req.body.name;
    let phone = req.body.phone_number;
    let address = req.body.address;

    connection.query('INSERT INTO member (id, name, phone_number, address) VALUES(?,?,?,?)', [id, name, phone, address],
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
    let id = req.body.id;
    let name = req.body.name;
    let phone = req.body.phone_number;
    let address = req.body.address;

    connection.query('UPDATE member SET name=?, phone_number=?, address=? WHERE id = ?', [name,phone,address,id],
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