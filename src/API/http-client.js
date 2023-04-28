import axios from 'axios';

class HttpClient {
    abortController;
    axiosInstance;

    constructor() {
        this.abortController = new AbortController();
        this.axiosInstance = axios.create({
            signal: this.abortController.signal,
        });
    }

    get(url, options = {}) {
        return this.axiosInstance.get(url, options);
    }

    post(url, body, options = {}) {
        return this.axiosInstance.post(url, body, options)
    }
}

export const httpClient = new HttpClient();

