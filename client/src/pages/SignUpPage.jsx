import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa";
const SignUpPage = () => {
  return (
    <BackgroundImage>
      <div className="flex justify-center relative top-40">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-10">Join With Us</h1>
          <input
            type="text"
            placeholder="Email"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="First Name"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="Mobile"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />

          <button className="bg-green-600 text-white w-80 lg:w-96  py-3 px-3 mt-10  rounded-sm">
            <FaArrowRight className="m-auto" />
          </button>

          <span className="text-md font-bold text-black m-auto mt-5">
            Have an account ?
            <span className="text-md font-bold text-green-600"> Sign In</span>
          </span>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default SignUpPage;
