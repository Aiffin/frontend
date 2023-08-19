import React from 'react'
import Nav from './Nav'
import Blogs from './pages/Blogs'

function Dashboard() {
  return (
    <>
        <div className='bg-white-600 w-full h-screen'>
          <div className='header fixed'>
                  <Nav/>
          </div>
    
         <div className="container mt-5">
            <Blogs/> 
          </div>
    </div>
    </>
  )
}

export default Dashboard