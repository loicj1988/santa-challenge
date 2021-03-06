let usersInMemory = [];

// Add user to pending list
function addUser(userName, wish, userProfile) {
    usersInMemory.push({userName, wish, userProfile, status:'pending'});
}

// Get pending users
function getPendingUsers() {
    return usersInMemory.filter(u => u.status == 'pending');
}

// Set user status
function setUserStatus(users, status) {
    usersInMemory.forEach(u1 =>  {
        users.forEach(u2 =>  {
            if(u1.userName == u2.userName) {
                u1.status = status;
            }
        });
    });
}

module.exports.addUser = addUser;
module.exports.getPendingUsers = getPendingUsers;
module.exports.setUserStatus = setUserStatus;