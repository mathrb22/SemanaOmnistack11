import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //parte da URL que é mantida em todas as páginas
})

export default api;