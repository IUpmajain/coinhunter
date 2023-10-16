import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coin/coinSlice";


const store = configureStore({
    reducer:{
        coin : coinReducer,
    },
});

export default store;