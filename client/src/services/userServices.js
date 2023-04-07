import * as api from "./api";

export async function register(email, fullName, phoneNumber, password) {
    const response = await api.post('/users/register', {email, fullName, phoneNumber, password});
    return response;
};

export async function login(email, password) {
    const response = await api.post('/users/login', {email, password});
    return response;
};

export function logout(token) {
    return fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': token
        },
    });
}

export async function getUserById(userId, token){
    const response = await fetch(`http://localhost:3030/users/${userId}`, {
        method: 'GET',
        headers: {
            'X-Authorization': token,
            // "content-type": "application/json",
        },
    });
    
    const data = await response.json();
    return data;

    
}