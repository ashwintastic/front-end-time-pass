const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
export default function apiCall(){

    return fetch
}