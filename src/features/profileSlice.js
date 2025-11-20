import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:"",
    age:"",
    place:"",
}

const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        updateName:(state,action)=>{
            state.name = action.payload
        },
        updateAge:(state,action)=>{
            state.age = action.payload
        },
        updatePlace:(state,action)=>{
            state.place = action.payload
        }
    }
})
export const { updateName,updatePlace,updateAge } = profileSlice.actions;
export default profileSlice.reducer;