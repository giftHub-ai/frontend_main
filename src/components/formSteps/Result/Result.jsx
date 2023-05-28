import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import _ from "underscore";
import { UserContext } from "../../Context";
import GiftCard from "../../GiftCard";
import PrevNext from "../../PrevNext";
import Toast from "../../Toast";
import GiftHamper from "../../../assets/gift_hamper.jpeg";
import Modal from "./Modal";
import dummyData from "./DummyData";
const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [relevancyData, setrelevancyData] = useState(null);
  const inputDetails = React.useContext(UserContext);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currModalData, setCurrModalData] = useState({});


  let customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const userInputValues = inputDetails.userInput;
  useEffect(() => {
    const usersName = JSON.stringify(userInputValues);
    console.log(usersName);

    console.log(typeof userInputValues);
    if (_.isEmpty(data)) {
      axios
        .post("http://127.0.0.1:5000/getGift", usersName, customConfig)
        .then((res) => {
          setData(res.data);
          console.log("response  ", res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message, {
            duration: 2000,
            position: "top-right",
          });
        });
    } else {
      console.log("run");
    }
  }, []);

  const submitRelevancyRating = () => {
    if (relevancyData === null) {
      toast.info("Product Data not found!", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }

    let relevancyDataToSend = { ...userInputValues, ...relevancyData };
    const userRating = JSON.stringify(relevancyDataToSend);
    console.log("relevancy rating ", relevancyDataToSend);

    axios
      .post("http://127.0.0.1:5000/addEntry", userRating, customConfig)
      .then((res) => {
        console.log("relevancy rating", res);
        toast.success("Thanks for feedback!", {
          duration: 2000,
          position: "top-right"
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          duration: 2000,
          position: "top-right",
        });
      });
  };

  



  if (!loading)
    return (
      <>
        <div className="w-full h-full">
          <Loader></Loader>
        </div>
        {/* <PrevNext /> */}
      </>
    );
  else
    return (
      <>
        <div className="flex flex-col gap-4 border">
          <Toast />
          {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} currModalData={currModalData} setCurrModalData={setCurrModalData}/>}
          <div className="text-white heading-style">Recommendations</div>
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            {/* for testing without API */}
            {dummyData && dummyData.length
              ? dummyData.map((item, ind) => {
                  return (
                    <GiftCard
                      key={ind}
                      productData={item}
                      setrelevancyData={setrelevancyData}
                      setIsOpenModal={setIsOpenModal}
                      setCurrModalData={setCurrModalData}
                    />
                  );
                })
              : null}
          </div>
          <PrevNext
            alreadyFilled={true}
            submitRelevancyRating={submitRelevancyRating}
          />
          <div className="w-full p-8   rounded-lg shadow-lg bg-white flex  ">
            <div className="">
              <img src={GiftHamper} className="rounded-lg" alt="" />
            </div>
            <div className="text-light font-semibold p-8">
              <h1 className="text-2xl mb-8">
                Check this, its something special for you!
              </h1>
              We at WhatTheFruit! believe that a gift should be an experience,
              not just an item. <br></br>
              <br></br>
              WhatTheFruit! has come up with a Luxuriously curated Fruit Gift
              Hamper to surprise your loved ones. With a touch of luxury and
              full of health✨ Fresh handpicked fruits, carefully packed and
              sent to your loved ones on a special occasion.
              <br></br>
              <br></br>
              Go to <b> whatthefruit.in </b>to explore more.
            </div>
          </div>
        </div>
      </>
    );
};

export default Result;

const Loader = () => (
  <div className="w-full">
    <div className="py-4 text-white text-xl font-semibold text-center">
      Your Gifts are loading..
    </div>
    <div className="mx-auto w-72 h-72 square bg-giftLoadIcon bg-cover bg-top bg-no-repeat rounded-full bg-white"></div>
  </div>
);
