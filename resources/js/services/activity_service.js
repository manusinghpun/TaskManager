import {http, httpFile} from './http_service';


export function loadActivities(){
    return http().get('./ActivityLog');
}

export function loadMore(nextPage) {
    return http().get(`ActivityLog?page=${nextPage}`);
}