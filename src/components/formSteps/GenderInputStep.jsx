import React, { useState, useContext, useEffect } from "react";
import female from "../../assets/Female.png";
import male from "../../assets/Male.png";
import PrevNext from "../PrevNext";
import { UserContext} from "../Context";

const imgStyle =
  " p-2 m-2 hover:bg-dark hover:border rounded-lg cursor-pointer";
const GenderInputStep = () => {
  const inputDetails = React.useContext(UserContext);

  let genderValue;
  const [gender, setGender] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  const handleClick = (str) => {
    inputDetails.userInput.gender = str;
    setAlreadyFilled(true);
    setGender(str);

  };
  useEffect(() => {
    genderValue = inputDetails.userInput.gender;
    if (genderValue !== "") setAlreadyFilled(true);
    setGender(genderValue);
  }, []);


  return (
    <div className="">
      <h1 className={`heading-style`}>Pick Recipient's Gender</h1>
      <div className="w-full flex justify-evenly ">
        <div className={`${imgStyle} ${gender=="Male"?"bg-dark":null}`} onClick={() => handleClick("Male")}>
          <img src={male} alt="male"></img>
        </div>
        <div className={`${imgStyle} ${gender=="Female"?"bg-dark":null}`}  onClick={() => handleClick("Female")}>
          <img src={female} alt="female"></img>
        </div>
      </div>
      {alreadyFilled && (
        <div className="text-center">
          <h2>Current Gender Input value: {gender}</h2>
        </div>
      )}
      <PrevNext input={gender} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default GenderInputStep;
