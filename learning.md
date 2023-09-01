## 4 step conversion

### 1. Store
- old syntax
```js
const store = createStore(reducer);
```
- new syntax
```js
// import cartReducer
const store = createStore({
    reducer: {
        cart: cartReducer
    }
})
```
### 2. Reducer
```js
// import actions
export const clearItemsFromCart = (state, action) => {
    return {
        ...state,
        cart: []
    }
}

const initialState = {
    cart: []
}

const reducer = (state = initialState, action) => {
    switch(action.payload) {
        case actions.CLEAR_ITEMS_CART_ACTION:
            return clearItemsFromCart(state, action);
            break;
    }
}
```
- new syntax
```js
const cartSlice = createSlice({
    name: 'cart,
    initialState: [],
    reducers:{
        clearCart: (state) => {
            // immer.js
            state.cart = [];
        }
    }
})


export default cartSlice.reducer;
```

### 3. Action
```js
export const CLEAR_ITEMS_CART_ACTION = "CLEAR_ITEMS_CART_ACTION"; 
```
- new syntax
```js
const cartSlice = createSlice({
    name: 'cart,
    initialState: [],
    reducers:{
        clearCart: (state) => {
            // immer.js
            state.cart = [];
        }
    }
})

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

### 4. Dispatch
- old syntax
```js


```
> new syntax: No need just use it in components

### 5. Async Actions 