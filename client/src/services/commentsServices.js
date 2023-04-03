import * as api from './api';

export async function getCommnetsByOfferId(offerId){
    const response = await api.get(`/data/instrument/${offerId}/comments`);
    return response;
};

export async function createComment(offerId, data){
    const response = await api.post(`/data/instrument/${offerId}/comments`, data);
    return response;
}