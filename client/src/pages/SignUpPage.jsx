import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { apiRequest, resetState } from "../features/taskManager/FutureSlice";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";
import { ToastContainer, toast } from 'react-toastify';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.taskManager);
  const selector = useSelector((state) => state.taskManager);
  console.log(selector);


  const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    mobile: yup.string().required("Mobile number is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
  });




  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      password: ""
    },
    validationSchema: () => validationSchema, // Pass schema directly
    onSubmit: (values, { resetForm }) => {

      dispatch(apiRequest({
        method: NetworkMethod.POST,
        url: NetworkURL.registerURL,
        data: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      }))
        .unwrap()
        .then((response) => {
          if (response.status === "success") {
            toast.success("Registration Successfully");
            resetForm();
            dispatch(resetState()); // Reset the state after success
          }
        })
        .catch((error) => {
          toast.error(error?.data)
        })

    }
  });




  return (
    <BackgroundImage>
      <ToastContainer />
      <div className="flex justify-center relative top-40">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-3xl font-bold mb-10">Join With Us</h1>

            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <small className="text-red-500">{formik.errors.email}</small> : null}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2 mt-4"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? <small className="text-red-500">{formik.errors.firstName}</small> : null}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2 mt-4"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? <small className="text-red-500">{formik.errors.lastName}</small> : null}

            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2 mt-4"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile ? <small className="text-red-500">{formik.errors.mobile}</small> : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-white h-10 w-80 lg:w-96 focus:outline-none rounded-sm p-2 mt-4"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.touched.password && formik.errors.password ? <small className="text-red-500">{formik.errors.password}</small> : null}


            <button type="submit" className="bg-green-600 text-white w-80 lg:w-96  py-3 px-3 mt-10  rounded-sm">
              <FaArrowRight className="m-auto" />
            </button>


            <span className="text-md font-bold text-black m-auto mt-5">
              Have an account ?
              <Link to="/"> <span className="text-md font-bold text-green-600"> Sign In</span></Link>
            </span>
          </div>
        </form>
      </div>
    </BackgroundImage>
  );
};

export default SignUpPage;
