import {http, httpFile} from './http_service';

export function exportCard(data){
    return http().post('./export', data);
}

export function loadCategories(){
    return http().get(`/get-categories`);
}