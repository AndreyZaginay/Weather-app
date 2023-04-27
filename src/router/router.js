import Cities from "../components/pages/Cities";
import Countries  from "../components/pages/Countries";
import WeatherReport  from "../components/pages/WeatherReport";


export const routes = [
    {path: '/country', component: Countries},
    {path: '/country/:countryName/city', component: Cities},
    {path: '/country/:countryName/city/:cityName/weather', component: WeatherReport}
]

