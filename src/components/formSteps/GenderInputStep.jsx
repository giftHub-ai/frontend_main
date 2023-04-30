import React, { useContext } from "react";
import female from "../../assets/Female.png";
import male from "../../assets/Male.png";
import { UserContext, UserDispatchContext } from "../Context";
import PrevNext from "../PrevNext";

const GenderInputStep = () => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  return (
    <div className="">
      <h1 className={`heading-style`}>Pick Recipient's Gender</h1>
      <div className="w-full flex justify-evenly ">
        <div className=" p-2 m-2">
          <img src={male} alt="male"></img>
        </div>
        <div className="p-2 -ml-16">
          <img src={female} alt="female"></img>
        </div>
      </div>
      <PrevNext />
    </div>
  );
};

export default GenderInputStep;
