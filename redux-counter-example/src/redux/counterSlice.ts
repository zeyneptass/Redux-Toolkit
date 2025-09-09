import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state){
            state.value += 1;
        },
        decrement(state){
            if(state.value === 0){
                return;
            }
            state.value -= 1;
        },
        reset: () => initialState,
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const {increment,decrement,reset,incrementByAmount} =  counterSlice.actions;
export default counterSlice.reducer;