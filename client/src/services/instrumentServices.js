import * as api from "./api";

export async function createOffer(data) {
    const response = await api.post(`/data/instrument`, data);
    return response;
};

export async function getAll(params){
    const response = await api.get('/data/instrument',)
}