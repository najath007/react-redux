import { createSlice } from "@reduxjs/toolkit";

const initialState = { value:0};

const counterSlice = createSlice ({
    name:"counter",initialState,
    reducers:{
        increment:(state)=>{ state.value += 1; },
        decrement:(state)=>{ state.value -= 1; },
        reset:(state)=>{state.value = 0}
    }
})

export const { increment,decrement,reset } = counterSlice.actions;
export default counterSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => { state.value += 1 },
//     decrement: (state) => { state.value -= 1 },
//   }
// })

// export const { increment, decrement } = counterSlice.actions
// export default counterSlice.reducer