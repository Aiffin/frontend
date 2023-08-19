import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {  setLogout } from '../features/loginSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Nav() {
const dispatch=useDispatch()
const navigate=useNavigate()

const user=useSelector((state)=>state.user)

const handleLogout=()=>{
    dispatch(setLogout())
    toast("logout successfully")
    navigate(`/`)
}
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className="md:flex item-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                Dream Blog
            </div>
       
        <ul className='md:flex md:items-center'>
            <li className='md:ml-8 p-1'><a href={`/dashboard`} className='text-gray-800 hover:text-gray-400'>DASHBOARD</a></li>
            <li className='md:ml-8 p-1'><a href={`/blogs`} className='text-gray-800 hover:text-gray-400'>CREATE BLOG</a></li>
            <li className='md:ml-8 p-1'><a href={`/`} className='text-gray-800 hover:text-gray-400'>logIn:{user?.user?.extUser?.name}</a></li>
            <li className='md:ml-8 p-1'><a href={`/`} className='text-gray-800 hover:text-gray-400' onClick={handleLogout}>LOGOUT</a></li>

        </ul>
    </div>
    </div>
  )
}

export default Nav