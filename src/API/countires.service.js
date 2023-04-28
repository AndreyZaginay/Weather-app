import { httpClient } from "./http-client";

export class CountriesService {
    url = 'https://countriesnow.space/api/v0.1/countries';
    options = {
        transformResponse: [(response) => {
            return JSON.parse(response).data;
        }]
    }

    getCountries() {
        return httpClient.get(`${this.url}/capital`, this.options);
    }

    getCountryCities(countryName) {
        return httpClient.post(`${this.url}/cities`, {country: countryName}, this.options);
    }
}
