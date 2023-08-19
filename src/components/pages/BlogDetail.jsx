import React from 'react'
import { useEffect,useState } from 'react'
import { blogDetails } from '../../features/blogSlice'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import Nav from '../Nav'

function BlogDetail() {
  const dispatch=useDispatch();
  const {id}=useParams()
  useEffect(()=>{
    if (id){
      dispatch(blogDetails(id))
    }
  },[dispatch,id]);

  const blog=useSelector((state)=>({...state.blog}));

  return (
    <div className="">
          <Nav/>
          <section className="py-16">

            <div className="container mx-auto px-20 md:px-15">
              <h1 className='font-bold text-4xl pb-12 text-center'>Blogs</h1>
              <div className="grid md:grid-cols-2 gap-3">
                <div className='image'>
                  <img src={blog.blogs?.photo} alt="blog img" className="md:w-full h-full" width={600} height={600}></img>
                </div>
                <div className='info flex text-justify flex-col'>
                  <div className="title">
                    <p className='text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600'>{
                    blog.blogs?.title
                    }</p>
                  </div>
                    <div className="desc">
                    <p className='text-2xl md:text-sm'>
                    {
                      blog.blogs?.description
                    }
                  </p>
                    </div>
                    <br />
                  <div className="views">
                    <p>Views:
                      {
                        blog.blogs?.views
                      }
                    </p>
                  </div>
                  <div className="likes">
                    <p>Likes:
                      {
                        blog.blogs?.likes
                      }
                    </p>
                  </div>
                 
                  {/* <NavLink to={`/dashboard`}>Back</NavLink> */}
                {/* <NavLink to={`/dashboard`}>Back</NavLink> */}
                </div>
              </div>

                
            </div>
        </section>
    </div>
  )
}

export default BlogDetail