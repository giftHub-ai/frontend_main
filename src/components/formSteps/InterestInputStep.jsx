import React, { useState } from "react";
import Button from "../Button";

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
  " Solving puzzles",
  " Movies",
];
const InterestInputStep = ({ nextStep }) => {
  const [selectedInterest, setInterest] = useState([]);
  return (
    <div className="">
      <h1 className=" font-bold text-2xl text-center ">
        Pick Recipient's Interests
      </h1>
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
      <div className="float-right" onClick={()=>{console.log(selectedInterest); nextStep()}}>
        <Button className="p-4 font-bold " type="submit" text="Next">
          Next
        </Button>
      </div>
    </div>
  );
};
   
export default InterestInputStep;
