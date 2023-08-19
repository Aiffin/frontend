import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { blogGet } from '../../features/blogSlice'
import { NavLink } from 'react-router-dom';

function Blogs() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(blogGet())
    },[dispatch])

    const blog=useSelector((state)=>({...state.blog}));


    // console.log(blog.blogs)

    const excerpt=(str)=>{
        if(str.length>65){
            str=str.substring(0,65)+"..."
            return str
        }
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-3 justify-items-center">

        {blog.blogs.length===0 && (
           <p>No blogs Founds</p>)}

        {blog.blogs.map((item,index)=>(
            <>

            {/* cards */}
            <div className="max-w-sm overflow-hidden rounded shadow-lg m-12">
            <img className="w-full" key={index} src={item.photo} alt="No Image"/>
            <div className="px-6 py-4">

                <div className="font-bold text-xl mb-2" >{item.title}</div>
                <p className="text-gray-700 text-base">{excerpt(item.description)}</p>
                <NavLink to={`/blog/${item._id}`}><button>Read more..</button></NavLink>
            </div>
            </div>
            </>
        ))
}
        </div>
  
  )
}

export default Blogs