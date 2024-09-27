import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import PinInput from "react-pin-input";
const PinVerification = () => {
  return (
    <BackgroundImage>
      <div className="flex justify-center relative top-56 scroll-m-0">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-2">Pin Verification</h1>
          <span className=" mb-10 text-gray-500 w-80 lg:w-96">
            A 6 digit verification pin will sent your email address
          </span>
          <PinInput
            length={6}
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ margin: "auto" }}
            inputStyle={{ borderColor: "gray" }}
            inputFocusStyle={{ borderColor: "green" }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <button className="bg-green-600 text-white w-80 lg:w-96 py-3 px-3 mt-8  rounded-sm">
            Verify
          </button>

          <span className="text-md font-bold text-black m-auto mt-8">
            Have an account ?
            <span className="text-md font-bold text-green-600"> Sign In</span>
          </span>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default PinVerification;
