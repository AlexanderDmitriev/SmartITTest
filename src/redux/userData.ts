import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASIC_URL } from '../api/basicData';
import { IUserData } from '../interfaces/IUserData';

export const userDataApi = createApi({
  reducerPath: 'userData',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASIC_URL}`,
  }),
  tagTypes: ['Data'],
  endpoints: builder => ({
    getAllData: builder.query<IUserData[], void>({
      query: () => ({ url: `/users`, method: 'GET' }),
      providesTags: ['Data'],
    }),
  }),
});

export const { useGetAllDataQuery } = userDataApi;
