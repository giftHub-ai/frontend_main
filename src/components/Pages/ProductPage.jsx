import React, { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar";
import Modal from "../formSteps/Result/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { api_base_url_django } from "../../config/api";
let customConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const ProductPage = () => {
  const { Gift } = useParams();
  console.log("gift name", Gift);
  const [selectedGift, setSelectedGift] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const usersName = JSON.stringify({ Gift });
    axios
      .post(`${api_base_url_django}/getProduct`, usersName, customConfig)
      .then((res) => {
        setSelectedGift(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, {
          duration: 2000,
          position: "top-right",
        });
      });
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);

  if (loading) return <div className="">Loading</div>;
  else {
    return (
      <>
        <NavBar showLogin={false} />
        {isOpenModal && (
          <Modal
            setIsOpenModal={setIsOpenModal}
            giftName={Gift}
            selectedGift={selectedGift}
          />
        )}
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-8">
          <div className="flex justify-center items-center gap-6 lg:w-2/4 ">
            <img
              src={selectedGift["Image Link"]}
              alt=""
              className="w-10/12 h-[50%] aspect-square object-contain rounded-xl"
            />
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-light font-semibold">
                GiftHub Exclusive
              </span>
              <h1 className="text-3xl font-bold"> {Gift}</h1>
            </div>
            <p className="text-gray-700">
              Gifts are tokens of appreciation, love, and thoughtfulness. They
              express emotions, celebrate milestones, and create lasting
              memories. The act of giving a well-chosen gift goes beyond
              material possessions, carrying emotions, thoughtfulness, and the
              warmth of human connection.
            </p>
            <h6 className="text-2xl font-semibold">
              ₹ {selectedGift?.Budget || 1000}
            </h6>
            <div className="flex flex-row items-center gap-12">
              <button
                className="bg-background text-white font-semibold py-3 px-16 rounded-xl h-full"
                onClick={() => {
                  setIsOpenModal(true);
                }}
              >
                Send this Gift
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductPage;
