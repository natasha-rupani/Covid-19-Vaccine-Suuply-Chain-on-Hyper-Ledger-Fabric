// remove the token and user from the session storage
export const clearUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
  
export const getToken = () => { 
    return sessionStorage.getItem('token') || null;
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

