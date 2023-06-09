import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: (builder) => {
        getRecentProducts: builder.query({
            query: () => {
                'recent-products';
            }
        });
    }
});

export { productsApi };
