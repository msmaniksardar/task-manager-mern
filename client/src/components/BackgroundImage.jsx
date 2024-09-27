import React from "react";

const BackgroundImage = ({ children }) => {
  return (
    <div className="bg-[url('../public/images/background.svg')] w-full h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  );
};

export default BackgroundImage;
