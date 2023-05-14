import React, { useEffect, useState } from "react";
import PrevNext from "../../PrevNext";
import axios from "axios";
import { UserContext } from "../../Context";
import _ from "underscore";
import toast from "react-hot-toast";
import Toast from "../../Toast";
import GiftCard from "../../GiftCard";
import DummyData from "./DummyData";
import Button from "../../Button";

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [relevancyData, setrelevancyData] = useState(null);
  const inputDetails = React.useContext(UserContext);
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
    let relevancyDataToSend = { ...userInputValues, ...relevancyData };
    const userRating = JSON.stringify(relevancyDataToSend);
    console.log("relevancy   ", relevancyDataToSend);
    axios
      .post("http://127.0.0.1:5000/addEntry", userRating, customConfig)
      .then((res) => {
        console.log("relevancy rating", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          duration: 2000,
          position: "top-right",
        });
      });
  };

  if (loading === true)
    return (
      <>
        <div className="">loading</div>
        <PrevNext />
      </>
    );
  else
    return (
      <div className="w-full  flex flex-col justify-evenly h-full ">
        <Toast />
        <h1 className="text-center md:text-[3rem] text-[2rem] ">
          Recommendation
        </h1>
        <div className="flex flex-col md:flex-row  sm:justify-between  items-center max-sm:my-4">
          {console.log("data  ", data)}
          {data.map((item, ind) => {
            return (
              <GiftCard
                key={ind}
                productData={item}
                setrelevancyData={setrelevancyData}
              />
            );
          })}
        </div>
        <PrevNext
          alreadyFilled={true}
          submitRelevancyRating={submitRelevancyRating}
        />
      </div>
    );
};

export default Result;
