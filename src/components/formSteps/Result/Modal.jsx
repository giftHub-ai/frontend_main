import React, { useState } from "react";
import Button from "../../Button";
import ModalForm from "./ModalForm";

const Modal = ({ setIsOpenModal, giftName, selectedGift }) => {
  const [showModalForm, setShowModalForm] = useState(false);

  return (
    <div className="absolute h-full w-screen flex justify-center items-center">
      <div className="bg-white p-8 shadow-2xl min-w-fit min-h-fit      rounded-lg z-50 ">
        {showModalForm ? (
          <ModalForm
          selectedGift={selectedGift}
            setIsOpenModal={setIsOpenModal}
          />
        ) : (
          <>
            <h2 className="text-center mt-8 text-2xl">
              Do you want to send this gift {" "}
              <span className="text-light font-semibold">
               
                {giftName}
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
