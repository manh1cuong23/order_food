import * as httpRequest from '~/utils/httpRequest';


export const HttpPost = (url, data = {}) => {
    try {
        const rs = httpRequest.post(url,data);
        return rs;
    } catch (error) {
        return error;
    }
}

