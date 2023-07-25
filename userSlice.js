import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'user',
    initialSatate:[{}],
    reducers:{
        getUser:(state)=>{
            state.push ({name:"ACS"})
            state.push ({name:"CS"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;
