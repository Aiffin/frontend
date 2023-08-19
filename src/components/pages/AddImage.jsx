import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { blogPost } from '../features/blogSlice'

function AddImage() {
    const [data,setData]=useState({
        title:"",
        description:"",
        photo:"",
        category:""
    })

    const [blogtitle,setBlogTitle]=useState()

    const [blogImage,setBlogImage]=useState()

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {title,description,photo,category}=data

    const readOnly=(e)=>{
        setData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


    // const state=useSelector((state)=>state.blog);
    // console.log("state",state)

    const submit=(e)=>{
        e.preventDefault();
        console.log(data)
        let blogData={
            title,
            description,
            photo,
            category
        }
        dispatch(blogPost(blogData))
        toast.success("Blog added successfully")
        navigate(`/dashboard`)

    }

  return (

    <div className='rounded p-5 max-w-3xl items-center w-2/4'>
        <h1 className='text-4xl bg-white text-center'>Create Blog</h1>
    <form onSubmit={submit} className='bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4'>
        <div className="mb-4">
            <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='title' value={title} onChange={readOnly}/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="description" value={description} onChange={readOnly}/>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Category</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="category" value={category} onChange={readOnly}/>
        </div>

        <div className="mb-4">
            <input type="file"/>
        </div>


        {/* <div className="mb-4">
            <label htmlFor="photo" className='block text-gray-700 text-sm font-bold mb-2'>Photo</label> */}
        
            
            {/* <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="photo" */}
        {/* </div> */}

    
        <div class="flex items-center justify-between ">
            <button className='bg-[#ae8a6f] rounded-xl py-2 px-5 text-white hover:scale-105 duration-300' type='submit'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default AddImage