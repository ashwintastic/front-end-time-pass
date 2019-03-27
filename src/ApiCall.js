import axios from 'axios'
export default function apiCall(){
    axios.defaults.headers.common['token'] = localStorage.getItem('token');
    return axios
}