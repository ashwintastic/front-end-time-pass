import apiCall from './ApiCall'
const serverUri = 'http://localhost:3003/';


export function get(params ={}){
    return apiCall().get(serverUri, { params })
}

export function post(params = {}) {
    return apiCall().post(serverUri+params.endpoint, params.payload );
}

