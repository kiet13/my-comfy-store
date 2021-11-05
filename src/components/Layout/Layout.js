import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <div className='container'>
      <SideBar show={showSideBar} />
      <NavBar
        showSideBar={showSideBar}
        onSideBarToggled={() => setShowSideBar(!showSideBar)}
      />
      <Outlet />
      <Footer />
    </div>
  )
}
