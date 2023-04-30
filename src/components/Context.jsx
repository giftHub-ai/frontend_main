import React, { createContext, useState } from "react";


const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const headingStyle = "font-bold text-2xl text-center "
function UserProvider({ children }) {
  const [userInput, setUserInput] = useState({
    age: -1,
    gender: undefined,
    interest: undefined,
  });
  
  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  return (
    <UserContext.Provider value={{userInput,headingStyle,activeStep,displayAgeInput}}>
      <UserDispatchContext.Provider value={{setUserInput,setActiveStep,nextStep,prevStep,setDisplayAgeInput}}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
