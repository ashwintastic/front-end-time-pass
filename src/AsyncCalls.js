import apiCall from './ApiCall'

export function get(params ={}){
    return apiCall().get('http://localhost:3003/', { params })
}

export function post(params = {}) {
    return apiCall().post(`http://localhost:3003${params.endpoint}`, { params:params.payload })
}

