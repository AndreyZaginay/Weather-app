import axios from "axios";

export default class WeatherService {


    static async getWeather(city) {
        const APIkey = '32ddfad7d427a46a440cac19e54df686';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=${APIkey}`);
        return response;
    }
}