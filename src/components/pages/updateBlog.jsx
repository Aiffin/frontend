import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { blogPost } from '../features/blogSlice'
import axios from 'axios'

function updateBlog
() {
    const [data,setData]=useState({
        title:"",
        description:"",
        photo:"",
        category:""
    })

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {title,description,photo,category}=data

    const readOnly=(e)=>{
        setData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


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

    }

  return (
    <div className='w-full max-w-xs'>
    <form onSubmit={submit} className='bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4'>
        <div className="mb-4">
            <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>title</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='title' value={title} onChange={readOnly}/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>description</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="description" value={description} onChange={readOnly}/>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>category</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="category" value={category} onChange={readOnly}/>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>photo</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="photo" value={photo} onChange={readOnly}/>
        </div>

        <div class="flex items-center justify-between">
            <button className='bg-[#ae8a6f] rounded-xl py-2 px-5 text-white hover:scale-105 duration-300' type='submit'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default updateBlog

