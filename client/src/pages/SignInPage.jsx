import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest, resetState } from "../features/taskManager/FutureSlice";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { Authenticate } from "../controllers/authenticationController";
import { errorResponse, successResponse } from "../controllers/responseController";

const SignInPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.taskManager);

  // Validation schema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(apiRequest({
        method: NetworkMethod.POST,
        url: NetworkURL.loginURL,
        data: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      }))
        .unwrap()
        .then((response) => {
          successResponse(response, { message: "Login Successfully" })
          Authenticate.setToken(response.token);
          resetForm();
          dispatch(resetState()); // Reset the state after success

        })
        .catch((error) => {
          errorResponse(error, { message: error.data })
        });
    }
  });

  return (
    <BackgroundImage>
      <ToastContainer />
      <div className="flex justify-center relative top-56 scroll-m-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-10">Get Started With</h1>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-red-500 text-[15px] mt-1">{formik.errors.email}</small>
            ) : null}
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2 mt-4"
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-red-500 text-[15px]">{formik.errors.password}</small>
            ) : null}
            <button type="submit" disabled={isLoading} className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10 rounded-sm">
              {isLoading ? "Loading..." : <FaArrowRight className="m-auto" />}
            </button>

            <Link className="mt-10 text-gray-500 text-md m-auto" to="/forget-password">
              <span>Forget Password?</span>
            </Link>
            <span className="text-md font-bold text-black m-auto mt-3">
              Don't have an account?
              <Link to="/sign-up">
                <span className="text-md font-bold text-green-600"> Sign Up</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </BackgroundImage>
  );
};

export default SignInPage;
