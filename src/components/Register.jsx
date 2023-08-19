import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../features/loginSlice'
import { NavLink, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

function Register() {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const navigate=useNavigate();

    const {name,email,password}=data

    const state=useSelector((state)=>state.user);
    console.log("state",state)

    const dispatch=useDispatch()

    const readOnly=(e)=>{
        setData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const submit=(e)=>{
        e.preventDefault();
        console.log(data)
        let userCredentials={
            name,
            email,
            password
        }
        dispatch(signUp(userCredentials))
        toast.success("Registered data successfully")

        navigate(`/`)

    }
  return (
    <div className='bg-[#f8e3c1] rounded-2xl shadow-lg p-5 max-w-3xl items-center w-2/4'>

        <h1 className="text-3xl text-center">Register</h1>
        <div className='p-6 max-w-md mx-auto h-full'>
        <form onSubmit={submit} className='rounded px-8 pt-8 pb-8 mb-4'>
            <div className="mb-4 flex gap-10 justify-items-center">
                <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='name' value={name} onChange={readOnly}/>
            </div>
            
            <div className="mb-4 flex gap-10 justify-items-center">
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="email" value={email} onChange={readOnly}/>
            </div>
            
            <div className="mb-4 flex gap-4 justify-items-center">
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name='password' value={password} onChange={readOnly}/>
            </div>

            <div class="mb-4 flex flex-col items-center justify-between">
                <button className='bg-[#ae8a6f] rounded-xl py-2 px-5 text-white hover:scale-105 duration-300' type='submit'>SIGNUP</button>
            </div>

            <div className='flex text-xs text-gray-600 justify-between mt-6 '>
                <p className="">Already a member?</p> 
                <NavLink to={`/`} className="">Go to SignIn</NavLink>
            </div>
        </form>

        </div>
        
    </div>
  )
}

export default Register