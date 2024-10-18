import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { FaArrowRight } from 'react-icons/fa6';
import { Authenticate } from '../controllers/authenticationController';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { apiRequest } from '../features/taskManager/FutureSlice';
import { NetworkMethod, NetworkURL } from '../utils/NetworkURL';

const AddNewTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, data, isError } = useSelector((state) => state.taskManager);

    const validationSchema = yup.object({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            status: 'New',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            Authenticate.getToken();
            console.log(Authenticate.accessToken);

            const response = await dispatch(
                apiRequest({
                    method: NetworkMethod.POST,
                    url: NetworkURL.createTaskURL,
                    data: JSON.stringify(values),
                    headers: { 'Content-Type': 'application/json', token: Authenticate.accessToken },
                })
            );

            if (response.meta.requestStatus === 'fulfilled') {
                toast.success('Task added successfully');
                resetForm();
            } else {
                toast.error('Failed to add new task');
            }
        },
    });

    return (
        <BackgroundImage>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-center relative top-56 scroll-m-0">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold mb-10">Add New Task</h1>
                        <input
                            type="text"
                            name="title"
                            placeholder="Task Title"
                            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm mb-1"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <small>{formik.errors.title}</small>
                        ) : null}
                        <textarea
                            placeholder="Task Description"
                            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm resize-none mt-3 mb-2"
                            rows="4"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.touched.description && formik.errors.description ? (
                            <small>{formik.errors.description}</small>
                        ) : null}

                        <button type="submit" className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10 rounded-sm">
                            {isLoading ? "Waiting" : "Add Task"} 
                        </button>
                    </div>
                </div>
            </form>
        </BackgroundImage>
    );
};

export default AddNewTask;
