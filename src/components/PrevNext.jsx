import React, { useContext } from "react";
import Button from "./Button";
import { UserContext, UserDispatchContext } from "./Context";

import toast from "react-hot-toast";
import Toast from "./Toast";

const PrevNext = ({ input, alreadyFilled,submitRelevancyRating }) => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const checkNext = (input) => {
    if (
      alreadyFilled === true ||
      (input !== "" && input !== undefined && input !== null)
    ) {
      setUserDetails.nextStep();
    } else {
      toast.error("Make sure you have given response!", {
        duration: 2000,
        position: "top-right",
      });
      // window.alert("Make sure you have given response!");
    }
  };

  return (
    <>
      <Toast/>
      <div className="flex justify-between">
        <div
          className={`items-start ${
            inputDetails.activeStep == 1 ? "invisible" : null
          }`}
          onClick={() => {
            setUserDetails.prevStep();
          }}
        >
          <Button className="p-4 font-bold " text="Prev " />
        </div>
        <div
          className="items-start "
        >
          {/* {console.log(alreadyFilled)} */}
          <div className={`${inputDetails.activeStep == 7 ? "hidden" : null}`} onClick={() => {
            checkNext(input);
          }}>
            <Button className={`p-4 font-bold `} text="Next " />
          </div>
          <div className={`${inputDetails.activeStep == 7 ? null : "hidden"}`} onClick={()=>submitRelevancyRating()}>
            <Button className={`p-4 font-bold `} text="Give Rating " />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrevNext;
