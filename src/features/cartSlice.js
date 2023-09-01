import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        amount: 0
    }
});

export default cartSlice.reducer;