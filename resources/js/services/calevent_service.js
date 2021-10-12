import {http, httpFile} from './http_service';

export function loadEvents(){
    return http().get(`./calevents`);
}

export function loadCategories(){
    return http().get(`/get-categories`);
}

export function filterCategories(data){
    return http().post('./filterCalendar', data);
}
 

/*
export function createEvent(data){
    return httpFile().post('./events', data);
}



export function deleteEvent(id){
    return http().delete(`events/${id}`);
}

export function updateEvent(id, data) {
    return httpFile().post(`events/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`events?page=${nextPage}`);
}*/