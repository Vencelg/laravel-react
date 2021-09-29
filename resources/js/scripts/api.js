import axios from 'axios';
import { LOGOUT } from '../context/types';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            // store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);

export default api;