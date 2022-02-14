import axios from 'axios';

// register
export const duplicateUserID = userID => {
  return axios.get(`https://ktl-last.herokuapp.com/check/id?userID=${userID}`);
};

export const duplicateUserEmail = userEmail => {
  return axios.get(
    `https://ktl-last.herokuapp.com/check/email?userEmail=${userEmail}`,
  );
};

export const duplicateUserName = userName => {
  return axios.get(
    `https://ktl-last.herokuapp.com/check/name?userName=${userName}`,
  );
};

export const register = (userID, userPW, userEmail, userName, userPhone) => {
  return axios.put('https://ktl-last.herokuapp.com/users/register', {
    userID,
    userPW,
    userEmail,
    userName,
    userPhone,
  });
};

export const login = (userID, userPW) => {
  return axios.post('https://ktl-last.herokuapp.com/users/login', {
    userID,
    userPW,
  });
};
