import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name : "slice",
    initialState : {
        value : 0
    },
    reducers : {
        Increment : (state) => {
            state.value += 1;
        }
    }
});

export const {Increment} = slice.actions;
export default slice.reducer; 
