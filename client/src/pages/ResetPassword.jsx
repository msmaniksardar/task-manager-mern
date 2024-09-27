import React from "react";
import BackgroundImage from "../components/BackgroundImage";

const ResetPassword = () => {
  return (
    <BackgroundImage>
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
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm"
          />
          <button className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10  rounded-sm">
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
    </BackgroundImage>
  );
};

export default ResetPassword;
