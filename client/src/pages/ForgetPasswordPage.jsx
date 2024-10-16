import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa";
import { Link, replace, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest, resetState } from "../features/taskManager/FutureSlice";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";
import { errorResponse, successResponse } from "../controllers/responseController";
import { ToastContainer } from "react-toastify";
const ForgetPasswordPage = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.taskManager);

  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required")
  })


  const Formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {

      dispatch(apiRequest({
        method: NetworkMethod.GET,
        url: `${NetworkURL.RecoverVerifyEmailURL}/${values.email}`,
        headers: { "Content-Type": "application/json" }
      })).unwrap()
        .then((response) => {
          successResponse(response, { message: response.data });
          resetForm();
          dispatch(resetState());
          navigate("/pin-verify", { replace: true, state: { email: values.email } })
        }).catch((err) => {
          errorResponse(err, { message: err.data });
        })
    }
  })






  return (
    <BackgroundImage>
      <ToastContainer />
      <form onSubmit={Formik.handleSubmit}>
        <div className="flex justify-center relative top-56 scroll-m-0">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-10">Your Email Address</h1>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.initialTouched.email || Formik.errors.email ? <small>{Formik.errors.email}</small> : null}

            <button type="submit" className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-8  rounded-sm">
              {isLoading ? "Loading.." : <FaArrowRight className="m-auto" />}
            </button>

            <span className="text-md font-bold text-black m-auto mt-8">
              Have an account ?
              <Link to="/">
                <span className="text-md font-bold text-green-600"> sign in</span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </BackgroundImage>
  );
};

export default ForgetPasswordPage;
