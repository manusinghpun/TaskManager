import {http, httpFile} from './http_service';

export function createToDo(data){
    return httpFile().post('./todo', data);
}

export function loadToDo(){
    return http().get('./todo');
}

export function deleteToDo(id){
    return http().delete(`todo/${id}`);
}

export function updateToDo(id, data) {
    return httpFile().post(`todo/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`todo?page=${nextPage}`);
}