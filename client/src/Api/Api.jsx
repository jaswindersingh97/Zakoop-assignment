import axios from 'axios';
import { toast } from 'react-toastify';
const domain = import.meta.env.VITE_API_URL;

const Api = async ({ endpoint, method = 'GET', data = {}, headers = {},includeToken = false }) => {
    try {
        const token = localStorage.getItem("token") || ""
        let config;
        if(!includeToken){
            config = {
                url: `${domain}${endpoint}`,
                method,
                headers,
                data,
            };
        }
        else{config = {
            url: `${domain}${endpoint}`,
            method,
            headers:{
                Authorization:  `Bearer ${token}`,
                ...headers
            },
            data,
        };}
        const response = await axios(config);
        return response; 
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                toast.error("Session expired. Please log in again.");
                window.location.href = '/login'; 
            } else {
                toast.error(error.response.data.message ||error.response.data.error || "An error occurred!");
            }
            return error.response;
        } else {
            toast.error(error.message || "An unexpected error occurred.");
            return { status: 500, data: { error: error.message || "Server not responding. Please try again later." } };
        }
    }
};

export default Api;