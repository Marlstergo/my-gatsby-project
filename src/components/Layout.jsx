import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Layout({children}) {
  return (
    <div>
      <div className="">
        <Navbar/>
      </div>
      <div className="">
        {children}
      </div>
      <div className="">
        <Footer/>
      </div>

    </div>
  )
}

export default Layout
