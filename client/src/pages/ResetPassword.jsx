import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { useFormik } from "formik"
import { apiRequest } from "../features/taskManager/FutureSlice";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";
import { errorResponse, successResponse } from "../controllers/responseController";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp } = location.state;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  const validationSchema = yup.object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")  // Ensure it matches the 'password' field
      .required("Confirm password is required")

  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        email: email,
        OTP: otp,
        password: values.password

      }
      dispatch(apiRequest({
        method: NetworkMethod.POST,
        url: NetworkURL.RecoverResetPasswordURL,
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })).unwrap()
        .then((response) => {
          successResponse(response, { message: response.data });
          resetForm(); 
          navigate("/" , {replace: true})
          
        })
        .catch((error) => {
          errorResponse(error, { message: error.data })
        })
    }
  })





  return (
    <BackgroundImage>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center relative top-56">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-2">Set Password</h1>
            <span className="mb-10 text-gray-500 w-80 lg:w-96">
              Minimum length password 8 character with letter and number
              combination
            </span>
            <input
              type="password"
              placeholder="Password"
              className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.initialTouched.password || formik.errors.password ? <small>{formik.errors.password}</small> : null}
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.initialTouched.confirmPassword || formik.errors.confirmPassword ? <small>{formik.errors.confirmPassword}</small> : null}

            <button type="submit" className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10  rounded-sm">
              Confirm
            </button>
            <span className="mt-10 text-gray-500 w-80 lg:w-96 py-3 px-3 text-center">
              Forget Password ?
            </span>
            <span className="text-md font-bold text-black  w-80 lg:w-96 text-center">
              Have an account ?
              <span className="text-md font-bold text-green-600"> Sign In</span>
            </span>
          </div>
        </div>
      </form>
    </BackgroundImage>
  );
};

export default ResetPassword;
