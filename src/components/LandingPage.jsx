import React, { useEffect } from 'react'
import Login from './Login'
import Register from './Register'
import AddBlog from './AddBlog'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { setUser } from '../features/loginSlice';
import Home from './Home'
import BlogDetail from './pages/BlogDetail'


function LandingPage() {
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem("users"));
  useEffect(()=>{
    dispatch(setUser(user))
  },[dispatch,user])

  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
        {/* Login Container */}
        <ToastContainer position='left' />
        <Router>
          <Routes>
            <Route exact path={`/`} element={<Login/>}/>
            {/* //<Route exact path={`/dashboard`} element={<Home/>}/> */}

            <Route path={`/register`} element={<Register/>}/>
            <Route path={`/dashboard`} element={<Dashboard/>}/>
            <Route path={`/blog`} element={<AddBlog/>}/>
            <Route path={`/blog/:id`} element={<BlogDetail/>}/>
          </Routes>
        </Router>
    </section>
  )
}

export default LandingPage