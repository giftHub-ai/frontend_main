import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userInput, setUserInput] = useState({
    age: 50,
    gender: "Male",
    interest: "Sports",
    relationship: "Friend",
    occasion: "Friendship Day",
    budget: "5000",
  });

  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const [activeStep, setActiveStep] = useState(7);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  return (
    <UserContext.Provider value={{ userInput, activeStep, displayAgeInput }}>
      <UserDispatchContext.Provider
        value={{
          setUserInput,
          setActiveStep,
          nextStep,
          prevStep,
          setDisplayAgeInput,
        }}
      >
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
