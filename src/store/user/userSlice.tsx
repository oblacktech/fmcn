import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState:any={
    user:{}
}

const userSlice=createSlice({
    name:"userSlice",
initialState,
    reducers:{
        setUserProfile:(state,action:PayloadAction<any>)=>{
            state.user=action.payload
        }
    }

})

export const {
    setUserProfile
}=userSlice.actions
export const userStore=(state:RootState)=>state.userSlice
export default userSlice