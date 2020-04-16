import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333' //Substituir 192.168.0.105 pelo seu endereço IP;
});

export default api;