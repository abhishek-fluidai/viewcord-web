// Utils for Local Storage
export const getLocal = (key) => {
  return localStorage.getItem(key);
};

export const setLocal = (key, value) => {
  return localStorage.setItem(key, value);
};

export const clearLocal = () => {
  return localStorage.clear();
};

// utils for session storage
export const getSession = (key) => {
  return sessionStorage.getItem(key);
};

export const setSession = (key, value) => {
  return sessionStorage.setItem(key, value);
};

export const removeSession = (key) => {
  return sessionStorage.removeItem(key);
};

export const clearSession = () => {
  return sessionStorage.clear();
};
