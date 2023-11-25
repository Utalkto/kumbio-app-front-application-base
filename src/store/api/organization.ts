import { createApi } from '@reduxjs/toolkit/query/react';
import { configFetch } from "./configFetch";
import { Country, Sector } from "@/interfaces";


export const organizationApi = createApi({
    reducerPath: 'organizationApi',
   
    baseQuery: configFetch,
    tagTypes: ['organizationApi'],

    endpoints: (builder) => ({

        getAllSectors: builder.query<Sector[], {}>({
            query: () => '/sectors',
        }),

        getAllCountries: builder.query<Country[], {}>({
            query: () => '/countries',
        })
        
    })

    
})

export const { 
    useGetAllSectorsQuery,
    useGetAllCountriesQuery
} = organizationApi;