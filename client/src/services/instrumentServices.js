import * as api from "./api";

export async function createOffer(data) {
    const response = await api.post(`/data/instrument`, data);
    return response;
};

export async function getAll(){
    const response = await api.get('/data/instrument',);
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