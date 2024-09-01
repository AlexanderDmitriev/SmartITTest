import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';
import { BASIC_URL } from '../api/basicData';
import { IUserData } from '../interfaces/IUserData';

export const userDataApi = createApi({
    reducerPath: 'userData',
    baseQuery: fetchBaseQuery({
      baseUrl: `${BASIC_URL}`,
    }),
    tagTypes: ['Data'],
    endpoints: builder => ({
      getAllData: builder.query<IUserData[],void>({
        query: () => `/users`,
        providesTags: ['Data'],
      }),
      createData: builder.mutation({
        query: ({title,body}) => ({
          url: `/users`,
          method: 'POST',
          body: JSON.stringify({
            title: title,
            body: body,
            userId: uuidv4(),
          }),
          
        }),invalidatesTags: ['Data'],
      }),
      updateData: builder.mutation({
        query: ({id,title,body}) => ({
          url: `/users/${id}`,
          method: 'PUT',
          body: JSON.stringify({
            title: title,
            body: body,
            userId: uuidv4(),
          }),
          
        }),invalidatesTags: ['Data'],
      }),
      deleteData: builder.mutation({
        query: id => ({
          url: `/users/${id}`,
          method: 'DELETE',
         
        }), invalidatesTags: ['Data'],
      }),
    }),
  });
  
  export const {
    useGetAllDataQuery,
    useCreateDataMutation,
    useUpdateDataMutation,
    useDeleteDataMutation,
  } = userDataApi;