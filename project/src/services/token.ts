const AUTH_TOKEN_KEY = 'what-to-watch-token';

export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const removeToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export const saveToken = (token: string) => localStorage.setItem(AUTH_TOKEN_KEY, token);
