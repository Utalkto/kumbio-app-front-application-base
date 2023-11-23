import { createApi } from '@reduxjs/toolkit/query/react';
import { configFetch } from './configFetch';
import { IRegisterFormValues, AuthUser, ILoginFormValues  } from '@/interfaces/user';


export const authApi = createApi({
    reducerPath: 'authApi',
   
    baseQuery: configFetch,
    tagTypes: ['authApi'],

    endpoints: (builder) => ({

        /**
         * Registro de nuevo usuario
         * 
         * @param IRegisterFormValues
        */

        registerUser: builder.mutation<AuthUser, Partial<IRegisterFormValues>>({
            query: (data) => ({
                url: '/users/signup/',
                method: 'POST',
                body: JSON.stringify(data),
            }),
            invalidatesTags: ['authApi'],

            transformResponse: (response: AuthUser, meta, arg) => response
        }),

        /**
         * Iniciar Sesion 
        */

        loginUser: builder.mutation<AuthUser, Partial<ILoginFormValues>>({
            query: (data) => ({
                url: '/users/login/',
                method: 'POST',
                body: JSON.stringify(data),
            }),
            invalidatesTags: ['authApi'],

            transformResponse: (response: AuthUser, meta, arg) => response
        }),
    })

    
})

export const { 
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi;