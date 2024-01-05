import React from "react";
import PrivateProvider from "../../../providers/PrivateProvider";

const Flight = () => {
  return (
    <PrivateProvider>
      <div className="w-screen h-screen flex justify-center items-center">
        This is Flight Admin Page
      </div>
    </PrivateProvider>
  );
};

export default Flight;
