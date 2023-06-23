import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeLayout