import React from "react";
import female from "../../assets/Female.png";
import male from "../../assets/Male.png";

const GenderInputStep = () => {
  return (
    <div className="w-full">
      <div className="border p-2 m-2">
        <img src={male} alt="male"></img>
      </div>
      <div className="border p-2 m-2">
        <img src={female} alt="female"></img>
      </div>
    </div>
  );
};

export default GenderInputStep;
