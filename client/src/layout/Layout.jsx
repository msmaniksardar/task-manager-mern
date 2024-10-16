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



            <div class="fixed bottom-10 right-5">
                <button class="bg-green-500 text-white p-4 rounded-md shadow">
                    +
                </button>
            </div>
        </div>
    )
}

export default Layout
