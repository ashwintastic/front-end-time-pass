import apiCall from './ApiCall'
const serverUri = 'http://localhost:3003/';
var $ = require('jquery')

const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;



export function get(params ={}){

   //return  fetch(serverUri, { headers: {}})
    return apiCall().get(serverUri, { params })
}

export function post(params = {}) {
    return apiCall()(serverUri+params.endpoint, { method: 'POST', body: params.payload });
    // return apiCall().post(serverUri+params.endpoint, { params:params.payload })
}

