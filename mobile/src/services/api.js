import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333' //alterar o ip com o ip da sua máquina
});

export default api;