import { createSlice } from "@reduxjs/toolkit";

interface ProductItem {
    name: string,
    qty: number,
    price: number,
    id: number,
    image: string
};

interface ProductState {
    product: ProductItem[]
};

const initialState: ProductState = {
    product: []
};



const MyProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addMyProduct(state, action) {

            state.product.push(action.payload);
        }, incrementQty(state, action) {
            const add = state.product.find((item) => item.id === action.payload.id);
            if (add == undefined) {

            } else {
                add.qty++;
            }
        },
        decrement(state, action) {
            const decre = state.product.find((item) => item.id === action.payload.id);
            if (decre == undefined) {

            } else {
                decre.qty--;
            }
        }
    },

});

export const { addMyProduct, incrementQty, decrement } = MyProductSlice.actions;

export default MyProductSlice.reducer