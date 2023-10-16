import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
};

const coinSlice = createSlice({

    name : "coin",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(coinList.pending, (state)=>{
            state.isLoading=true;
        });
        builder.addCase(coinList.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
        });
        builder.addCase(coinList.rejected, (state, action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.user=null;
        });
    },
});

export default coinSlice.reducer;


export const coinList = createAsyncThunk("FETCH_COINLIST", async()=>{
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    const data=await response.json();
    console.log(data);
    return data;
})


