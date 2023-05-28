import React, { useState } from "react";
import Button from "../../Button";
import ModalForm from "./ModalForm";

const Modal = ({ setIsOpenModal, currModalData,setCurrModalData }) => {
  const [showModalForm, setShowModalForm] = useState(false);

  return (
    <div className="absolute h-[80vh] w-[83vw] flex justify-center items-center">
      <div className="bg-white px-8 shadow-2xl w-[40%] min-h-fit   absolute top-1/2  rounded-lg z-50 ">
        {showModalForm ? (
          <ModalForm currModalData={currModalData} setCurrModalData={setCurrModalData} />
        ) : (
          <>
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
                  setShowModalForm(true);
                }}
              >
                <Button text="Yes" />
              </div>
              <div onClick={() => setIsOpenModal(false)}>
                <Button text="No" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
