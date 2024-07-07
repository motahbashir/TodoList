import {configureStore, createSlice} from '@reduxjs/toolkit'
import { Login } from './Login'

const userSlice=createSlice({
    name:"user",
    initialState:{username:""},
    reducers :{
        login:(state,action)=>{

            state.username=action.payload.username

        },
        logout:(state)=>{
            state.username=""
        }

        }
,
        logout:()=>{

        }
    }

)
export const {login,logout}=userSlice.actions
 export const store= configureStore({reducer:{
    user:userSlice.reducer
}

})