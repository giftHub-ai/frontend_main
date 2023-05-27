import React from "react";
import Button from "../../Button";

const Modal = ({ setIsOpenModal, currModalData }) => {
  return (
    <div className="absolute h-[80vh] w-[83vw] flex justify-center items-center">
      <div className="bg-white px-8 shadow-2xl w-[40%] h-[40%] absolute top-1/2  rounded-lg z-50" onBlur={()=>setIsOpenModal(false)}>
        <h2 className="text-center mt-8 text-2xl">
          {" "}
          Did you bought this gift :{" "}
          <span className="text-light font-semibold">
            {" "}
            {currModalData.Gift}
          </span>
          ?
        </h2>
        <div className="flex justify-center   mx-auto gap-x-8 mt-16">
          <div
            onClick={() => {
              setIsOpenModal(false);
            }}
          >
            <Button text="Yes" />
          </div>
          <div onClick={() => setIsOpenModal(false)}>
            <Button text="No" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
