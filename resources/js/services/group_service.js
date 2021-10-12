import {http, httpFile} from './http_service';

export function createGroup(data){
    return httpFile().post('./groups', data);
}

export function loadGroups(){
    return http().get('./groups');
}

export function deleteGroup(id){
    return http().delete(`groups/${id}`);
}

export function updateGroup(id, data) {
    return httpFile().post(`groups/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`groups?page=${nextPage}`);
}