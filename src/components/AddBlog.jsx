import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { blogPost } from '../features/blogSlice'

function AddBlog() {
    
    const [title,setBlogTitle]=useState("")
    const [description,setDesc]=useState("")
    const [photo,setBlogImage]=useState("")
    const [category,setCat]=useState("")

    const dispatch=useDispatch()
    const navigate=useNavigate()

    //console.log(photo)
    const handlePhoto=(e)=>{
        const file=e.target.files[0];
        TransFormFile(file)
        console.log(file)
    }

    const TransFormFile=(file)=>{
        const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend=()=>{
                setBlogImage(reader.result)
        }
    }

    const submit=(e)=>{
        e.preventDefault();
       
        dispatch(blogPost({title,description,category,photo:photo}))
        //console.log(blogData)
        toast.success("Blog added successfully")
        navigate(`/dashboard`)

    }

  return (

    <div className='rounded p-5 max-w-3xl items-center w-2/4'>
        <h1 className='text-4xl bg-white text-center'>Create Blog</h1>
    <form onSubmit={submit} className='bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4'>
        <div className="mb-4">
            <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='title' value={title} onChange={(e)=>setBlogTitle(e.target.value)}/>
        </div>
        
        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="description" value={description} onChange={(e)=>setDesc(e.target.value)}/>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className='block text-gray-700 text-sm font-bold mb-2'>Category</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="category" value={category} onChange={(e)=>setCat(e.target.value)}/>
        </div>

        <div className="mb-4">
            <input type="file" onChange={handlePhoto}/>
        </div>

        <div className="bg-white max-w-sm overflow-hidden rounded shadow-lg m-12">
            {
                photo ? (<img src={photo} alt="blog image"/>) : (<p>Image preview will appear here</p>)
            }
        </div>

    
        <div className="flex items-center justify-between ">
            <button className='bg-[#ae8a6f] rounded-xl py-2 px-5 text-white hover:scale-105 duration-300' type='submit'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default AddBlog