import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Authenticate } from '../controllers/authenticationController'

const Navbar = () => {

    const navigate = useNavigate();

  // Logout function
  const logout = () => {
    Authenticate.clearUser(); // Clears the token from localStorage and in-memory
    navigate("/", { replace: true }); // Redirect to sign-in page
  };


    return (
        <div className=''>
            <div className="navbar fixed top-0 bg-green-400 ">
                <div className='container flex flex-row justify-between m-auto'>
                    <div className='flex flex-row hidden md:block'>
                        <ul className='flex flex-row gap-3'>
                            <li><NavLink to="/new-task" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "text-white font-semibold"}>New Task </NavLink></li>
                            <li><NavLink to="/completed-task" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "text-white font-semibold"}>Completed </NavLink></li>
                            <li><NavLink to="/canceled-task" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "text-white font-semibold"}>Canceled</NavLink></li>
                            <li><NavLink to="/progress-task" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "text-white font-semibold"}>Progress</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><NavLink to="/update-profile">Update Profile</NavLink></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-0'>
                            <p className='text-white text-md font-bold mb-1'>Manik Sardar</p>
                            <p className='text-white font-semibold text-sm'>anonymousmanik@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar