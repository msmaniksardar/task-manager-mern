import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa6";

const SignInPage = () => {
  return (
    <BackgroundImage>
      <div className="flex justify-center relative top-56 scroll-m-0">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-10">Get Started With</h1>
          <input
            type="text"
            placeholder="Email"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none rounded-sm"
          />
          <button className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-10  rounded-sm">
            <FaArrowRight className="m-auto" />
          </button>

          <span className="mt-10 text-gray-500 text-md m-auto">
            Forget Password ?
          </span>
          <span className="text-md font-bold text-black m-auto mt-3">
            Don't have an account ?{" "}
            <span className="text-md font-bold text-green-600">Sign Up</span>
          </span>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default SignInPage;
