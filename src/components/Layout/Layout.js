import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from '../Spinner/Spinner'

export default function Layout() {
  const [showSideBar, setShowSideBar] = useState(false)
  const { isAuthenticated, isLoading } = useAuth0()

  const classes = ['container']

  // If show sidebar, add a padding on the top to prevent content slide to top effect
  if (showSideBar) {
    classes.push('pt-8')
  }

  let content = null
  if (isLoading) {
    content = <Spinner />
  } else {
    content = (
      <div className={classes.join(' ')}>
        <SideBar show={showSideBar} auth={isAuthenticated} />
        <NavBar
          showSideBar={showSideBar}
          onSideBarToggled={() => setShowSideBar(!showSideBar)}
        />
        <Outlet />
        <Footer />
      </div>
    )
  }
  return content
}
