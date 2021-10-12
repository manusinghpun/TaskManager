import {http, httpFile} from './http_service';

export function createReply(data){
    return httpFile().post('./replies', data);
}

export function loadReplies(){
    return http().get('./replies');
}

export function deleteReply(id){
    return http().delete(`replies/${id}`);
}

export function updateReply(id, data) {
    return httpFile().post(`replies/${id}`, data);
}

