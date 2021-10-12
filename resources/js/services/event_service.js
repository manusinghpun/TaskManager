import {http, httpFile} from './http_service';

export function createEvent(data){
    return httpFile().post('./events', data);
}

export function loadCategories(){
    return http().get(`/get-categories`);
}

export function loadEvents(){
    return http().get(`./events`);
}

export function deleteEvent(id){
    return http().delete(`events/${id}`);
}

export function showEvent(id){
    return http().get(`events/${id}`); 
}

export function updateEvent(id, data) {
    return httpFile().post(`events/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`events?page=${nextPage}`);
}