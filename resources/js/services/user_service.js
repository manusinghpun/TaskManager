import {http, httpFile} from './http_service';


export function userScope(){
    return http().get('/user/user-scope');
}

export function adminScope(){
    return http().get('/user/admin-scope');
}

export function loadUsers(){
    return http().get('./users');
}

export function createUser(data){
    return http().post('./auth/register', data);
}

export function deleteUser(id){
    return http().delete(`users/${id}`);
}

export function updateUser(id, data) {
    return httpFile().post(`users/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`users?page=${nextPage}`);
}