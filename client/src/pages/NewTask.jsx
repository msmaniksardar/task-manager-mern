import React, { useEffect, useState } from 'react';
import { MdOutlineDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest } from '../features/taskManager/FutureSlice';
import { NetworkMethod, NetworkURL } from '../utils/NetworkURL';
import { Authenticate } from '../controllers/authenticationController';
import { Link } from 'react-router-dom';
import { deleteTaskService, updateTaskStatus } from '../services/apiService';
import { ToastContainer } from 'react-toastify';

const NewTask = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.taskManager);
  const [getStatus, setGetStatus] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [updateId , setUpdateId] = useState("");
  const status = "New";
  const token = Authenticate.getToken(); // Fetch token from localStorage


console.log(data);

  useEffect(() => {
    dispatch(apiRequest({
      method: NetworkMethod.GET,
      url: `${NetworkURL.listTaskByStatusURL}/${status}`,
      headers: { "Content-Type": "application/json", token }
    }));
  }, [dispatch, status, token]); // Added proper dependencies


  const updateTask = ()=>{
      dispatch(updateTaskStatus(updateId, getStatus));
      setOpenModal(false);
  }
  

  const deleteTask = (id) => {
    dispatch(deleteTaskService(id))
  }




  return (
    <div className='mx-auto'>
      <ToastContainer />


      {openModal &&

        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h3 className="text-xl font-bold mb-4">Update Status</h3>
            <div className="flex flex-col space-y-3">
              {["New", "Completed", "Progress", "Canceled"].map((status, index) => (
                <button
                  key={index}
                  onClick={() => setGetStatus(status)}
                  className={`p-2 text-left rounded-md ${getStatus === status ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-6 space-x-2">
              <button
              onClick={()=> setOpenModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Close
              </button>
              <button
              onClick={updateTask}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>}





      <div className='mx-auto'>
        {isError && <h2>{isError.data}</h2>}
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <h2>Loading...</h2>
          </div>
        ) : (
          <>
            {/* Task Status Summary */}
            <div className='flex flex-row justify-center gap-4 mt-4'>
              {["New Task", "Completed", "Progress", "Canceled"].map((status, index) => (
                <div key={index} className='card shadow w-20 h-20 sm:w-28 sm:h-20 md:w-36 md:h-28'>
                  <div className='card-title ml-2 md:mt-3'>
                    <h1 className='mt-5 text-xl font-bold'>10</h1> {/* Static data here */}
                  </div>
                  <div className='card-info ml-2'>
                    <h3 className='text-sm'>{status}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Task List */}
            <div className='flex flex-col gap-3 mt-5'>
              {data?.map((task) => (
                <div className='card-task shadow p-5' key={task._id}>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <label>Date: {new Date(task.date).toLocaleDateString()}</label> {/* Formatted date */}
                  <div className='flex flex-row justify-between mt-3'>
                    <div>
                      <label className={`bg-${task.status === 'New' ? 'green' : 'gray'}-400 px-2 py-1 rounded`}>
                        {task.status}
                      </label>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <button onClick={() => deleteTask(task._id)}>
                        <MdOutlineDelete size={20} />
                      </button>

                      <button onClick={() => { setOpenModal(true); setUpdateId(task._id) } }>

                        <MdOutlineSystemUpdateAlt size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>



          </>
        )}

      </div>
    </div>
  );
};

export default NewTask;
