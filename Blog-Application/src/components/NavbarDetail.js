import React from 'react'
import Header from './layouts/Header'
import { Outlet } from 'react-router-dom'

const NavbarDetail = () => {
  return (
    <div>
      <Header/>
      <Outlet className="container"/>
    </div>
  )
}

export default NavbarDetail
