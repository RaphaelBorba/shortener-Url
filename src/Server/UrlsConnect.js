import axios from "axios";

const urlAxios = 'http://localhost:5000'

export function postSingIn(path, body){

    const promise = axios.post(`${urlAxios+path}`, body)
    return promise
}

export function postSingUp(path, body){
    
    const promise = axios.post(`${urlAxios+path}`, body)
    return promise
}

export function getRanking(){

    const promise = axios.get(`${urlAxios}/ranking`)
    return promise
}