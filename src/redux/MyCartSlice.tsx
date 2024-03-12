import { createSlice } from "@reduxjs/toolkit";



interface CartItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    image: string
};

interface CartState {
    cart: CartItem[];
};

const initialState: CartState = {
    cart: [],

};

const MyCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToMyCart(state, action) {
            console.log('data', action.payload);
            console.log("id", action.payload.id);
            const existingItem = state.cart.find((item) => item.id === action.payload.id)
            console.log("existingItem id", existingItem?.id);
            if (existingItem?.id !== undefined) {
                console.log("same item");
                existingItem.qty += 1

            }
            else {
                console.log("diff item");
                state.cart.push({ ...action.payload, qty: 1 });
            }
        },
        incrementQuantity(state, action) {
            const add = state.cart.find((item) => item.id === action.payload.id);
            if (add == undefined) {

            } else {
                add.qty++;
            }
        },
        decrementQuantity(state, action) {
            const decrease = state.cart.find((item) => item.id === action.payload.id);
            if (decrease == undefined) {

            } else {
                decrease.qty--;
            }
        },

        deleteProductFromMyCart(state, action) {
            const delt = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = delt
        },
    },
});
export const { addProductToMyCart, deleteProductFromMyCart, incrementQuantity, decrementQuantity } = MyCartSlice.actions;

export default MyCartSlice.reducer; 