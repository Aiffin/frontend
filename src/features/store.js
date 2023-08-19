
import {configureStore} from "@reduxjs/toolkit"
import loginSlice from "./loginSlice"
import blogSlice from "./blogSlice"


const store=configureStore({
    reducer:{
        user:loginSlice,
        blog:blogSlice
    }
})

export default store