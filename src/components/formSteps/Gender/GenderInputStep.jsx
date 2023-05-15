import React, { useEffect, useState } from "react";
import female from "../../../assets/gender_female.png";
import male from "../../../assets/gender_male.png";
import { UserContext } from "../../Context";
import PrevNext from "../../PrevNext";
import GenderImage from "./GenderImage";

const GenderInputStep = () => {
  const inputDetails = React.useContext(UserContext);

  let genderValue;
  const [gender, setGender] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  const genders = [
    { imageGender: "Male", src: male },
    { imageGender: "Female", src: female },
  ];
  const handleClick = (str) => {
    inputDetails.userInput.gender = str;
    setAlreadyFilled(true);
    setGender(str);
  };
  useEffect(() => {
    genderValue = inputDetails.userInput.gender;
    if (genderValue !== "") {
      setAlreadyFilled(true);
      setGender(genderValue);
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 h-full justify-between">
      <h1 className={`w-full heading-style text-white`}>
        Pick Recipient's Gender
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-evenly">
        {genders && genders.length
          ? genders.map(({ imageGender, src }, index) => (
              <GenderImage
                key={index}
                className={""}
                src={src}
                gender={gender}
                imageGender={imageGender}
                handleClick={handleClick}
              ></GenderImage>
            ))
          : null}
      </div>
      {/* {alreadyFilled && (
        <div className="text-center">
          <h2>Current Gender Input value: {gender}</h2>
        </div>
      )} */}
      <PrevNext input={gender} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default GenderInputStep;
