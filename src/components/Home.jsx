import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { blogGet } from '../features/blogSlice';

function Home() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(blogGet())
    },[dispatch])

    const blog=useSelector((state)=>({...state.blog}));


    console.log(blog.blogs)

  return (
    <div className='row'>

        {/* {blog.blogs.length===0 && (
           <p>No blogs Founds</p>)} */}

        {blog.blogs.map((item,index)=>(
            <>
            <div class="max-w rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
            <div class="px-6 py-4">

                <div class="font-bold text-xl mb-2" key={index}>{item.title}</div>
                <p class="text-gray-700 text-base">{item.description}</p>
            </div>
            </div>
            </>
        ))
}
        </div>
  
  )
}

export default Home