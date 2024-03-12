import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import MyProductSlice from "./MyProductSlice";
import MyCartSlice from "./MyCartSlice";


export const myStore = configureStore({
    reducer: {
        product: MyProductSlice,
        cart: MyCartSlice

    }
})
export type RootState = ReturnType<typeof myStore.getState>;

