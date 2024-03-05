import axios from 'axios';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response;
};


export const post = async (path, data) => {
    const response = await httpRequest.post(path, data);
    return response;
};


export default httpRequest;
