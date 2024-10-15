import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
const SignInPage = () => {

  const validationSchema = yup.object({
      
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    }
  })


  return (
    <BackgroundImage>
      <div className="flex justify-center relative top-56 scroll-m-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-10">Get Started With</h1>
            <input
              type="text"
              name="email"

              placeholder="Email"
              className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm"
            />
            <button type="submit" className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10  rounded-sm">
              <FaArrowRight className="m-auto" />
            </button>

            <Link className="mt-10 text-gray-500 text-md m-auto" to="/forget-password">
              <span className="">
                Forget Password ?
              </span>
            </Link>
            <span className="text-md font-bold text-black m-auto mt-3">
              Don't have an account ?
              <Link to="/sign-up"> <span className="text-md font-bold text-green-600">Sign Up</span></Link>
            </span>
          </div>
        </form>
      </div>
    </BackgroundImage>
  );
};

export default SignInPage;
