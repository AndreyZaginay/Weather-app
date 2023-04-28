import { httpClient } from "./http-client";

export class WeatherService {
    url = 'https://api.openweathermap.org/data/2.5/weather';

    getWeatherByCity(cityName) {
        const API_KEY = '32ddfad7d427a46a440cac19e54df686';
        return httpClient.get(this.url, {
            params: {
                q: cityName,
                lang: 'ua',
                appid: API_KEY
            }
        });
    }
}
