import axios from 'axios';

// register
export const duplicateUserID = userID => {
  return axios.get(`http://localhost:8080/check/id?userID=${userID}`);
};

export const duplicateUserEmail = userEmail => {
  return axios.get(`http://localhost:8080/check/email?userEmail=${userEmail}`);
};

export const duplicateUserName = userName => {
  return axios.get(`http://localhost:8080/check/name?userName=${userName}`);
};

export const registerNew = (userID, userPW, userEmail, userName, userPhone) => {
  return axios.put('http://localhost:8080/users/register', {
    userID,
    userPW,
    userEmail,
    userName,
    userPhone,
  });
};
