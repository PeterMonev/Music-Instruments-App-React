import * as api from './api';

export async function register(email, fullName, phoneNumber, password) {
    const response = await api.post('/users/register', {email, fullName, phoneNumber, password});
    return response;
};

export async function login(email, password) {
    const response = await api.post('/users/login', {email, password});
    return response;
};

export async function logout(){
   const response = await api.get('/users/logout');
   return response;
};