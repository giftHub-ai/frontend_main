import React, { useContext, useEffect, useState } from "react";
import { UserContext,UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "../Interest/InterestCard";
const interest = [
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
  const setUserDetails = useContext(UserDispatchContext);
  let interestValue=null;
  useEffect(() => {
    interestValue = inputDetails.userInput.relationship;
    console.log(interestValue);
    if (interestValue !== "") {
      setAlreadyFilled(true);
      setActiveInterest(interest.indexOf(interestValue));
    }
  }, []);

  useEffect(() => {
    inputDetails.userInput.relationship = selectedInterest;
    setAlreadyFilled(true);
    // setUserDetails.setUserInput({...inputDetails.userInput,interestV:selectedInterest});
    console.log(inputDetails.userInput);
  }, [selectedInterest]);

 

  return (
    <div className="border w-full px-4">
      <h1 className="w-full py-4 heading-style">Pick your relationship with recipient</h1>
      <div className="w-full py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interest && interest.length ? (
          interest.map((interest, index) => {
            return (
              <InterestCard
                key={index}
                setInterest={setInterest}
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
