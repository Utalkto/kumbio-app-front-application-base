import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const configFetch = fetchBaseQuery({
    baseUrl: 'https://dev2.api.kumbio.com/api', // url peticion
    prepareHeaders: (headers) => {
        // Configuracion de header para cada request
        headers.set("content-type", "application/json");
        
        
        return headers;
    },
   
})