import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

//get user from localStorage

// const user = JSON.parse(localStorage.getItem('users'))

const baseUrl="https://backend-u775.onrender.com"

const initialState={
    user:null,
    error:false,
    isLoading:false,

}

export const signUp=createAsyncThunk('user/register',async(userCredentials)=>{
    try {
        const res= await axios.post(`${baseUrl}/api/signup`,userCredentials)
        //console.log(res.data)

        // if(res.data){
        //     localStorage.setItem('user',JSON.stringify(res.data))
        // }

        return res.data

    } catch (error) {
        console.log(error)
    }
})

export const loginUser=createAsyncThunk("user/login",async(userCredentials)=>{
    try {
        const request=await axios.post(`${baseUrl}/api/login`,userCredentials)
        const response=await request.data;
        localStorage.setItem('users',JSON.stringify(response))
        return response
    } catch (error) {
        console.log(error)
    }    
})

const loginSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setLogout:(state,action)=>{
            localStorage.clear()
            state.user=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
                state.user=action.payload;
                state.error=null;
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=true;
            state.error=action.error.message
        })
        builder.addCase(signUp.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(signUp.fulfilled,(state,{payload:{user,error,msg}})=>{
            state.isLoading=false;
            state.user=user
            if(error){
                state.error=error
            }else{
                state.msg=msg
            }
            // localStorage.setItem(token,JSON.stringify(token))
            // localStorage.setItem(user,JSON.stringify())
        })
        builder.addCase(signUp.rejected,(state,action)=>{
            state.isLoading=true
        })
    }
})
export const {setUser,setLogout}=loginSlice.actions;
//export const selectUser=(state)=>state.users.users
export default loginSlice.reducer