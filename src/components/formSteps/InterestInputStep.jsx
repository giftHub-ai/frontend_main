import React, { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../Context";
import PrevNext from "../PrevNext";

const interest = [
  " Art",
  "Writing",
  "Beauty",
  "Photography",
  "Travel",
  "Sports",
  "Reading",
  "Music",
  " Yoga",
  "Technology",
  " Dance",
  " Movies",
];
const InterestInputStep = () => {
  const [selectedInterest, setInterest] = useState([]);
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  return (
    <div className="flex flex-col justify-between  h-full">
      <h1 className={inputDetails.headingStyle}>Pick Recipient's Interests</h1>
      <div className="grid grid-cols-4 my-8 ml-24 gap-4">
        {interest.map((item, ind) => {
          return (
            <div
              onClick={() => {
                setInterest([...selectedInterest, item]);
              }}
              key={ind}
              className="w-[125px] h-[100px] bg-white drop-shadow-lg shadow-lg p-8 flex justify-center items-center border rounded-lg hover:cursor-pointer   "
            >
              {item}
            </div>
          );
        })}
      </div>
      <PrevNext />
    </div>
  );
};

export default InterestInputStep;
