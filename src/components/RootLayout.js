import React from 'react'
import NavigationBar from './NavigationBar'
import './RootLayout.css'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return(
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout