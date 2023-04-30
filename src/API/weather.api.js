import axiosInstance from "./axios";

const url = 'https://api.openweathermap.org/data/2.5/weather';

export function getWeatherByCity(cityName) {
    const API_KEY = '32ddfad7d427a46a440cac19e54df686';
    return axiosInstance.get(url, {
        params: {
            q: cityName,
            lang: 'ua',
            appid: API_KEY
        }
    })
}

