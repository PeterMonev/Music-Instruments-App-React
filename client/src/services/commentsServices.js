import * as api from './api';

export async function getCommnetsByOfferId(offerId){
    const response = await api.get(`/data/instrument/${offerId}/commnets`);
    return response;
}