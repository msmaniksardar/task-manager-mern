import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { FaArrowRight } from 'react-icons/fa6'
import { Authenticate } from '../controllers/authenticationController'



const AddNewTask = () => {

    Authenticate.getToken(); 
    console.log(Authenticate.accessToken);

    return (
        <BackgroundImage>
            <div className='flex flex-col items-center relative top-52'>
                <h1 className="text-3xl font-bold mb-10">Add New Task</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
                />
                <textarea
                    placeholder='Task Description'
                    className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm resize-none"
                    rows="4"
                ></textarea>

                <button className="bg-green-600 text-white w-80 lg:w-96  py-3 px-3 mt-10  rounded-sm">
                    <FaArrowRight className="m-auto" />
                </button>
            </div>

        </BackgroundImage>
    )
}

export default AddNewTask