import axios from 'axios';

// register
export const duplicateUserID = userID => {
  return axios.get(`/check/id?userID=${userID}`);
};

export const duplicateUserEmail = userEmail => {
  return axios.get(`/check/email?userEmail=${userEmail}`);
};

export const duplicateUserName = userName => {
  return axios.get(`/check/name?userName=${userName}`);
};

export const registerNew = (userPhone, userEmail, userID, userName, userPW) => {
  return axios.post('/users/register', {
    userPhone,
    userEmail,
    userID,
    userName,
    userPW,
  });
};
