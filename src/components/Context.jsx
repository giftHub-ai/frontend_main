import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userInput, setUserInput] = useState({
    age: -1,
    gender: "",
    interest: "",
    relationship: "",
    occasion: "",
    budget: "",
  });

  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  return (
    <UserContext.Provider
      value={{
        userInput,
        activeStep,
        displayAgeInput,
      }}
    >
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
