import React, { useState } from "react";
import NavBar from "../NavBar";
import { useLocation } from "react-router-dom";
import Modal from "../formSteps/Result/Modal";



const ProductPage = () => {
  const location = useLocation();
  console.log(location.state);
    const { Gift, ImageLink, Rating } = location.state;
  console.log(location);
  const [amount, setAmount] = useState(1);

  const [isOpenModal, setIsOpenModal] = useState(false);
const [currModalData, setCurrModalData] = useState({});

  return (
    <>
      <NavBar showLogin={false} />
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          currModalData={Gift}
          setCurrModalData={setCurrModalData}
        />
      )}
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex justify-center items-center gap-6 lg:w-2/4 ">
          <img
            src={ImageLink}
            alt=""
            className="w-10/12 h-[50%] aspect-square object-contain rounded-xl"
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-light font-semibold">GiftHub Exclusive</span>
            <h1 className="text-3xl font-bold"> {Gift}</h1>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            minima beatae, explicabo id ab nobis fugiat, sequi temporibus amet
            architecto ex fuga. Magni earum a ut. Similique expedita libero
            fugit eius voluptate hic sed, asperiores, quaerat autem assumenda
            non ipsa.
          </p>
          <h6 className="text-2xl font-semibold">₹ {1000 * amount}</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-background text-white font-semibold py-3 px-16 rounded-xl h-full"
              onClick={() => {
                setIsOpenModal(true);
                setCurrModalData(productData);
              }}
            >
              Send to Recipient
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
