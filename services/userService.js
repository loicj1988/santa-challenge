const fetch = require('node-fetch');
const { userServiceUrl } = require('../config/config.json');

async function getUserByUsername (username) {
  
  // Fetch data
  const users = 
    await fetch(userServiceUrl + '/users.json')
      .then(res => res.json());

  // Filter data
  const targetUsers = users.filter(u => u.username == username);

  // Return data
  return targetUsers.length == 0 ? null : targetUsers[0];

}

async  function getUserProfile (userUid) {
  
  // Fetch data
  const userProfiles = 
    await fetch(userServiceUrl + '/userProfiles.json')
      .then(res => res.json());

  // Filter data
  const targetUserProfiles = userProfiles.filter(u => u.userUid == userUid);

  // Return data
  return targetUserProfiles.length == 0 ? null : targetUserProfiles[0];

}

module.exports.getUserByUsername = getUserByUsername;
module.exports.getUserProfile = getUserProfile;