import React, { useContext, useEffect, useState } from "react";
import { UserContext,UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "../Interest/InterestCard";
const InterestArray = [
 "Boss",
 "Brother",
 "Wife",
 "Colleague",
 "Daughter",
 "Father",
 "For Her",
 "For Him",
 "Friend",
 "Husband",
 "Kids",
 "Mother",
 "Sister",
 "Son",
];
const RelationshipInputStep = () => {
  const [selectedInterest, setInterest] = useState();
  const [activeInterest, setActiveInterest] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  
  const inputDetails = React.useContext(UserContext);
  const setSelectedInterest=(interest)=>{
    inputDetails.userInput.relationship = interest;
    setAlreadyFilled(true);
    console.log(inputDetails.userInput);
  }

 let interestValue;
  useEffect(() => {
   
    interestValue = inputDetails.userInput.relationship;
    console.log("interest value",interestValue);
    if (interestValue!== "") {
      setAlreadyFilled(true);
      setActiveInterest(InterestArray.indexOf(interestValue));
    }
  }, []); 

 

  return (
    <div className="border w-full px-4">
      <h1 className="w-full py-4 heading-style">Pick your relationship with recipient</h1>
      <div className="w-full py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {InterestArray && InterestArray.length ? (
          InterestArray.map((interest, index) => {
            return (
              <InterestCard
                key={index}
                setInterest={setSelectedInterest}
                setActiveInterest={setActiveInterest}
                active={activeInterest === index}
                interest={interest}
                index={index}
                selectedInterest={selectedInterest}
              ></InterestCard>
            );
          })
        ) : (
          <div className="w-full text-center font-semibold p-4 text-xl">
            interests were not found
          </div>
        )}
      </div>
      <PrevNext input={selectedInterest} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default RelationshipInputStep;