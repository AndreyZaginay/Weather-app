import axiosInstance from "./axios";

const url = 'https://countriesnow.space/api/v0.1/countries';
const options = {
    transformResponse: [(response) => {
        return JSON.parse(response).data;
    }]
};

export function getCountries() {
    return axiosInstance.get(`${url}/capital`, options);
}

export function getCountryCities(countryName) {
    return axiosInstance.post(`${url}/cities`, {country: countryName}, options);
}
