import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { FaArrowRight } from 'react-icons/fa6'



const UpdateProfile = () => {
    return (
        <BackgroundImage>
            <div className='flex flex-col items-center relative top-48'>
                <div className='flex flex-row items-start w-80 md:w-96'>
                    <h1 className="text-3xl font-bold mb-10">Update Profile</h1>
                </div>
                <div className='flex flex-row'>
                    <div className=' bg-gray-500 w-[70px] h-10 flex items-center justify-center'>
                        <label className=' text-white font-semibold text-sm'>Photos</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        className="bg-white py-2 px-3 w-60 lg:w-80 focus:outline-none mb-4 rounded-sm"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Email"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Mobile"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />

                <button className="bg-green-600 text-white w-80 lg:w-96  py-3 px-3 mt-10  rounded-sm">
                    <FaArrowRight className="m-auto" />
                </button>
            </div>

        </BackgroundImage>
    )
}

export default UpdateProfile