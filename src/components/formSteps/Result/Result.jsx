import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import _ from "underscore";
import { UserContext } from "../../Context";
import GiftCard from "../../GiftCard";
import PrevNext from "../../PrevNext";
import Toast from "../../Toast";
// import dummyData from "./DummyData";
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
    if(relevancyData===null)
      {
        toast.info("Provide ratings first!", {
          duration: 2000,
          position: "top-right",
        });
        return;
      }
    
    let relevancyDataToSend = { ...userInputValues, ...relevancyData };
    const userRating = JSON.stringify(relevancyDataToSend);
    console.log("relevancy ", relevancyDataToSend);

    axios
      .post("http://127.0.0.1:5000/addEntry", userRating, customConfig)
      .then((res) => {
        console.log("relevancy rating", res);
        toast.success("Thanks for feedback!", {
          duration: 2000,
          position: "top-right",
        });
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

  if (loading)
    return (
      <>
        <div className="w-full h-full">
          <Loader></Loader>
        </div>
        <PrevNext />
      </>
    );
  else
    return (
      <div className="flex flex-col gap-4">
        <Toast />
        <div className="text-white heading-style">Recommendations</div>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          {/* {console.log("data  ", data)}
          {data && data.length
            ? data.map((item, ind) => {
                return (
                  <GiftCard
                    key={ind}
                    productData={item}
                    setrelevancyData={setrelevancyData}
                  />
                );
              })
            : null} */}

          {/* for testing without API */}
          {data && data.length
            ? data.map((item, ind) => {
                return (
                  <GiftCard
                    key={ind}
                    productData={item}
                    setrelevancyData={setrelevancyData}
                  />
                );
              })
            : null}
        </div>
        <PrevNext
          alreadyFilled={true}
          submitRelevancyRating={submitRelevancyRating}
        />
      </div>
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
