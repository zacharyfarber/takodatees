import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './apis/productsApi';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
    }
});

export const { useGetRecentProductsQuery } = productsApi;
export { productsApi, store };
