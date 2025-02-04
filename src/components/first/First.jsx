import React from 'react'

import { Outlet } from 'react-router-dom'

import Footer from '../footer/Footer'
import Header from '../header/Header'

function First() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default First