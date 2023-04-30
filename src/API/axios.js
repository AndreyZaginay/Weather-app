import axios from 'axios';

const abortController = new AbortController();
const axiosInstance = axios.create({
    signal: abortController.signal
});

export default axiosInstance;
export { abortController }
