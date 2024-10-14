import React from 'react'
import { MdOutlineDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";

const NewTask = () => {
    return (
        <div className='mx-auto'>
            <div className='flex flex-row justify-center gap-4'>
                <div className='card shadow w-20 h-20 sm:w-28 sm:h-20 md:w-36 md:h-28'>
                    <div className='card-title ml-2 md:mt-3 '>
                        <h1 className='mt-5 text-xl font-bold'>10</h1>
                    </div>
                    <div className='card-info ml-2'>
                        <h3 className='text-sm'>New Task</h3>
                    </div>
                </div>
                <div className='card shadow w-20 h-20 sm:w-28 sm:h-20 md:w-36 md:h-28'>
                    <div className='card-title ml-2 md:md:mt-3'>
                        <h1 className='mt-5 text-xl font-bold'>10</h1>
                    </div>
                    <div className='card-info ml-2'>
                        <h3 className='text-sm'>Completed</h3>
                    </div>
                </div>
                <div className='card shadow w-20 h-20 sm:w-28 sm:h-20 md:w-36 md:h-28'>
                    <div className='card-title ml-2 md:mt-3'>
                        <h1 className='mt-5 text-xl font-bold'>10</h1>
                    </div>
                    <div className='card-info ml-2'>
                        <h3 className='text-sm'>Progress</h3>
                    </div>
                </div>
                <div className='card shadow w-20 h-20 sm:w-28 sm:h-20 md:w-36 md:h-28'>
                    <div className='card-title ml-2 md:mt-3'>
                        <h1 className='mt-5 text-xl font-bold'>10</h1>
                    </div>
                    <div className='card-info ml-2'>
                        <h3 className='text-sm'>Canceled</h3>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 mt-5'>
                <div className='card-task shadow p-5 '>
                    <h2>Task Title </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.repudiandae nihil</p>
                    <label>Date:14/12/2003</label>
                    <div className='flex flex-row justify-between mt-3'>
                        <div className=''><label className=' bg-green-400 px-2 py-1 rounded'>New</label></div>
                        <div className='flex flex-row gap-2'>
                            <button className=''><MdOutlineDelete size={20} /></button>
                            <button className=''><MdOutlineSystemUpdateAlt size={20} /></button>
                        </div>
                    </div>
                </div>
                <div className='card-task shadow p-5 '>
                    <h2>Task Title </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.repudiandae nihil</p>
                    <label>Date:14/12/2003</label>
                    <div className='flex flex-row justify-between mt-3'>
                        <div className=''><label className=' bg-green-400 px-2 py-1 rounded'>New</label></div>
                        <div className='flex flex-row gap-2'>
                            <button className=''><MdOutlineDelete size={20} /></button>
                            <button className=''><MdOutlineSystemUpdateAlt size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewTask