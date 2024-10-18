import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />

            <main className='flex flex-col'>
                <div className='flex mt-16'>
                    <Outlet />
                </div>
            </main>



            <div className="fixed bottom-10 right-5">
                <Link to="/add-new-task">
                    <button className="bg-green-500 text-white p-4 rounded-md shadow">
                        +
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Layout
