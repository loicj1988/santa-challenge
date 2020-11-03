const fetch = require('node-fetch');
const { userServiceUrl } = require('../config/config.json');

async function getUserByUsername (username) {
  
  const users = 
    await fetch(userServiceUrl + '/users.json')
      .then(res => res.json());

  const targetUsers = users.filter(u => u.username == username);

  return targetUsers.length == 0 ? null : targetUsers[0];

}

async  function getUserProfile (userUid) {
  
  const userProfiles = 
    await fetch(userServiceUrl + '/userProfiles.json')
      .then(res => res.json());

  const targetUserProfiles = userProfiles.filter(u => u.userUid == userUid);

  return targetUserProfiles.length == 0 ? null : targetUserProfiles[0];

}

module.exports.getUserByUsername = getUserByUsername;
module.exports.getUserProfile = getUserProfile;