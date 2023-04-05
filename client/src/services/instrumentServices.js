import * as api from "./api";

export async function createOffer(data) {
    const response = await api.post(`/data/instrument`, data);
    return response;
};

export async function getAll(query){
   const { page, limit, sort, order, search, category, except, owner } = query;
    const endpoint = `/data/instrument?page=${page || ''}&limit=${limit || ''}&sort=${sort || 'createdAt'}&order=${order || 'desc'}&search=${search || ''}&category=${category || ''}&except=${except || ''}&owner=${owner || ''}`;
    const response = await api.get(endpoint);
    return response;
};

export async function getById(id) {
    const response = await api.get(`/data/instrument/${id}`);
    return response;
};

export async function deleteOffer(id) {
    const response = await api.remove(`/data/instrument/${id}`);
    return response;
};

export async function editOffer(id, data) {
    const response = await api.put(`/data/instrument/${id}`, data);
    return response;
};