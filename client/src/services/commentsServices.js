import * as api from './api';

export async function getCommnetsByOfferId(offerId){
    const response = await api.get(`/data/instrument/${offerId}/comments`);
    return response;
};

export async function createComment(offerId, data){
    const response = await api.post(`/data/instrument/${offerId}/comments`, data);
    return response;
};

export async function deleteComment(commentId) {
    const response = await api.remove(`/data/instrument/comments/${commentId}`);
    return response;
};

export async function editComment(commentId, data) {
    const response = api.put(`/data/instrument/comments/${commentId}`, data);
    return response;
  
};