import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ForgetPasswordPage = () => {
  return (
    <BackgroundImage>
      <div className="flex justify-center relative top-56 scroll-m-0">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-10">Your Email Address</h1>
          <input
            type="text"
            placeholder="Email"
            className="bg-white py-2 px-3 w-80 lg:w-96 focus:outline-none mb-4 rounded-sm"
          />
          <button className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-8  rounded-sm">
            <FaArrowRight className="m-auto" />
          </button>

          <span className="text-md font-bold text-black m-auto mt-8">
            Have an account ?
            <Link to="/">
              <span className="text-md font-bold text-green-600"> sign in</span>
            </Link>
          </span>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ForgetPasswordPage;
