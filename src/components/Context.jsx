import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userInput, setUserInput] = useState({
    age: 20,
    gender: "Male",
    interest: "playing",
  });

  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  return (
    <UserContext.Provider value={{ userInput, activeStep }}>
      <UserDispatchContext.Provider
        value={{ setUserInput, setActiveStep, nextStep, prevStep }}
      >
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
