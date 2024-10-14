import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />

            <main className='flex flex-col'>
                <Outlet />
            </main>




        </div>
    )
}

export default Layout
