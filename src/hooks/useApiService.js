import { useRef } from "react";

import { httpClient } from "../API/http-client";

export const useServiceApi = (ServiceApi) => {
    const abortControllerRef = useRef(httpClient.abortController);
    const service = new ServiceApi();

    const serviceMethods = Object.getOwnPropertyNames(ServiceApi.prototype)
        .slice(1)
        .map(property => {
            const serviceMethod = Object.getOwnPropertyDescriptor(ServiceApi.prototype, property).value;
            return {[property]: serviceMethod.bind(service)};
        })
        .reduce((acc, curr) => ({...acc, ...curr}), {});

    return [serviceMethods, abortControllerRef.current];
}

// {property: 'string'}  {getCountries: 'value'} {getCountriesCities: 'value'}