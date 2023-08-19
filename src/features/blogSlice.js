import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    blog:{},
    blogs:[],
    userBlog:[],
    isLoading:false,
    error:false
}

axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("users")){
        req.headers.Authorization=`${JSON.parse(localStorage.getItem("users")).accessToken}`
    }
    return req
})

export const blogPost=createAsyncThunk(`blog/create`,async(blogData)=>{
    try {
        const config={
            headers:{
                "Content-type":"multipart/form-data"
            }
        }
        const res=await axios.post(`/api/createBlog`,blogData,{config})
        //console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

export const blogGet=createAsyncThunk(`blog/All`,async()=>{
    try {
        const res=await axios.get(`/api/blogs`)
        //console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message)
    }
})

export const blogLike=createAsyncThunk(`blog/like`,async(id)=>{
    try {
        const res=await axios.get(`/api/likeBlog/${id}`)
        //console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message)
    }
})

export const blogDetails=createAsyncThunk(`blog/single`,async(id)=>{
    try {
        const res=await axios.get(`/api/blog/${id}`)
        //console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message)
    }
})

const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        setBlog:(state,action)=>{
            state.blog=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(blogPost.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(blogPost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blogs=[action.payload];
            state.error=false;
        })
        builder.addCase(blogPost.rejected,(state,action)=>{
            state.error=true
        })
        builder.addCase(blogGet.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(blogGet.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blogs=action.payload;
            state.error=false;
        })
        builder.addCase(blogGet.rejected,(state,action)=>{
            state.error=true;
        })
        builder.addCase(blogLike.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(blogLike.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blogs=action.payload;
            state.error=false;
        })
        builder.addCase(blogLike.rejected,(state,action)=>{
            state.error=true;
        })
        builder.addCase(blogDetails.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(blogDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blogs=action.payload;
            state.error=false;
        })
        builder.addCase(blogDetails.rejected,(state,action)=>{
            state.error=true;
        })
    }
})

export const {setBlog}=blogSlice.actions;

export default blogSlice.reducer

