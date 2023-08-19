import React,{useState} from 'react'
import img1 from '../assets/image/Landing.jpg'
import {useDispatch, useSelector} from 'react-redux';
import { loginUser} from '../features/loginSlice';
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import {GoogleLogin} from "react-google-login"


function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    // const state=useSelector((state)=>state)
    // console.log('user',state)

    const {isLoading,error}=useSelector((state)=>state.user)
        

    const dispatch=useDispatch();
    const navigate=useNavigate();
  

    const submit=(e)=>{
        e.preventDefault()
        let userCredentials ={
            email,password
        }

        if(email && password){
            dispatch(loginUser(userCredentials))
            navigate(`/dashboard`)

        }

    }

    // const googleSuccess=()=>{};
    // const googleFailure=()=>{};

   
  return (
   
   <div className='bg-[#f8e3c1] flex rounded-2xl shadow-lg p-5 max-w-3xl items-center'>
        
        {/* form */}
        <div className='md:w-1/2 p-16'>
            <h2 className='font-bold text-2xl'>Login</h2>
            <p className="text-sm mt-4">If you already a member,easily login</p>
           
            <form action="" className='flex flex-col gap-4' onSubmit={submit}>
                <input className='p-2 mt-8 rounded-xl' type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                <input className='p-2 rounded-xl' type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                <button className='bg-[#ae8a6f] rounded-xl py-2 text-white hover:scale-105 duration-300'>
                    {isLoading?"Loading...":"Login"}
                    </button>
                {error&&(
                    <div className='text-4xl text-red-600'>{error}</div>
                )} 
            </form>

            <div className="mt-10 grid grid-cols-3 items-center">
                <hr className='border-gray-400'/>
                <p className='text-gray-400 text-center'>OR</p>
                <hr className='border-gray-400'/>
            </div>

            {/* <GoogleLogin
                clientId=""
                render={(renderProps)=>{
                    <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm' 
                    onClick={(renderProps.onClick)}
                    disabled={(renderProps.disabled)}>Login with google</button>
                }}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
            /> */}


                <p className='mt-5 text-xs border-b py-4'>Forgot your password?</p>

                <div className='mt-3 text-xs flex justify-between items-center'>
                    <p>Don't have an account?</p>
                    <NavLink to={`/register`} className='bg-white border py-2 px-5 rounded-xl'>Register</NavLink>
                </div>
            
        </div>

        {/* image width is 50% */}
        <div className='md:block hidden w-1/2 '>
            <img className='rounded-2xl' src={img1} alt="imagev" />
        </div>

    </div>
  )
}

export default Login