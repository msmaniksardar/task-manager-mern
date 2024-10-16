import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import PinInput from "react-pin-input";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { apiRequest, resetState } from "../features/taskManager/FutureSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";
import { errorResponse, successResponse } from "../controllers/responseController";
import { ToastContainer } from "react-toastify";

const PinVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.taskManager);
  const location = useLocation();
  const { email } = location.state;

  const validationSchema = yup.object({
    pinCode: yup
      .string()
      .matches(/\b\d{6}\b/, "Pin must be exactly 6 digits")
      .required("OTP code is required"),
  });

  const formik = useFormik({
    initialValues: {
      pinCode: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(`${NetworkURL.RecoverVerifyOTPURL}/${email}/${values.pinCode}`);
      dispatch(apiRequest({
        method: NetworkMethod.GET,
        url: `${NetworkURL.RecoverVerifyOTPURL}/${email}/${values.pinCode}`,
        headers: { "Content-Type": "application/json" }
      })).unwrap()
        .then((response) => {
          successResponse(response, { message: response.data });
          resetForm();
          dispatch(resetState());
          navigate("/reset-password", {
            replace: true,
            state: { email: email, otp: values.pinCode }
          });

        })
        .catch((error) => {
          errorResponse(error, { message: error.data })
        })
    },
  });

  return (
    <BackgroundImage>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center relative top-56 scroll-m-0">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-2">Pin Verification</h1>
            <span className=" mb-10 text-gray-500 w-80 lg:w-96">
              A 6 digit verification pin will be sent to your email address
            </span>

            <PinInput
              length={6}
              type="numeric"
              inputMode="number"
              style={{ margin: "auto" }}
              inputStyle={{ borderColor: "gray" }}
              inputFocusStyle={{ borderColor: "green" }}
              autoSelect={true}
              regexCriteria={/^[0-9]*$/}
              onChange={(value) => formik.setFieldValue("pinCode", value)}
            />

            {formik.touched.pinCode && formik.errors.pinCode ? (
              <small className="text-red-600">{formik.errors.pinCode}</small>
            ) : null}

            <button
              type="submit"
              className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-8 rounded-sm"
            >
              {isloading ? "Verifying" : "Verify"}
            </button>

            <span className="text-md font-bold text-black m-auto mt-8">
              Have an account ?
              <span className="text-md font-bold text-green-600"> Sign In</span>
            </span>
          </div>
        </div>
      </form>
    </BackgroundImage>
  );
};

export default PinVerification;
