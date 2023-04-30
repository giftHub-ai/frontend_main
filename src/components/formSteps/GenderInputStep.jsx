import React from "react";
import female from "../../assets/Female.png";
import male from "../../assets/Male.png";
import Button from "../Button";
import PrevNext from "../PrevNext";

const GenderInputStep = () => {
  return (
    <div className="">
      <div className="w-full flex justify-evenly ">
        <div className=" p-2 m-2">
          <img src={male} alt="male"></img>
        </div>
        <div className="p-2 -ml-16">
          <img src={female} alt="female"></img>
        </div>
      </div>
  <PrevNext/>
    </div>
  );
};

export default GenderInputStep;
