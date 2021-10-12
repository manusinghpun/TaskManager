import {http, httpFile} from './http_service';

export function createTask(data){
    return httpFile().post('./tasks', data);
}

export function loadTasks(){
    return http().get('./tasks');
}

export function deleteTask(id){
    return http().delete(`tasks/${id}`);
}

export function updateTask(id, data) {
    return httpFile().post(`tasks/${id}`, data);
}

export function showTask(id){
    return http().get(`tasks/${id}`);  
}

