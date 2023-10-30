import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "underscore";
import NavBar from "../NavBar";
import { StartButton } from "./HomePage";
import ReceivedGifts from "./ReceivedGifts";
import SentGifts from "./SentGifts";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [sentGifts, setSentGifts] = useState();
  const [receivedGifts, setRecievedGifts] = useState();
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (_.isEmpty(localStorage.getItem("token"))) {
      navigate("../");
    }

    async function getGifts() {
      const data = await axios.get(
        "http://localhost:5000/gift/getgift",
        config
      );
      // const d = await data.json();
      console.log(data.data.gifts);
      setSentGifts(data.data.gifts);
    }
    async function myGifts() {
      const data = await axios.get("http://localhost:5000/gift/mygift", config);
      console.log(data.data.gifts);
      setRecievedGifts(data.data.gifts);
    }
    getGifts();
    myGifts();
    setLoading(false);
  }, []);

  const setGiftStatus = async (giftStatus) => {
    const data = await axios.post(
      "http://localhost:5000/gift/giftStatus",
      { status: giftStatus },
      config
    );

    console.log("set gift status   ", data);
  };

  if (loading) {
    return <div className="">Loading</div>;
  } else {
    return (
      <div className="bg-">
        <NavBar />
        <div className="w-full flex justify-center     ">
          <StartButton />
        </div>

        <SentReceiveGifts
          {...{ sentGifts, setGiftStatus, receivedGifts }}
        ></SentReceiveGifts>
      </div>
    );
  }
};

export default Dashboard;

const tabs = {
  SENT: "Sent Gifts",
  RECEIVED: "Received Gifts",
};

const SentReceiveGifts = ({ sentGifts, setGiftStatus, receivedGifts }) => {
  const [tabName, setTabName] = useState(tabs.SENT);
  const handleClick = (currTab) => setTabName(currTab);
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex flex-row items-center justify-center">
        <div
          className={`px-4 py-2 ${
            tabName === tabs.SENT
              ? `bg-interestHover `
              : `bg-gray-300 text-white`
          } rounded-tl-md hover:cursor-pointer font-semibold text-xl`}
          onClick={() => handleClick(tabs.SENT)}
        >
          {tabs.SENT}
        </div>
        <div
          className={`px-4 py-2 ${
            tabName === tabs.RECEIVED
              ? `bg-interestHover `
              : `bg-gray-300 text-white`
          } rounded-tr-md hover:cursor-pointer font-semibold text-xl`}
          onClick={() => handleClick(tabs.RECEIVED)}
        >
          {tabs.RECEIVED}
        </div>
      </div>
      <div className="rounded-md p-2 bg-interestHover mx-4">
        {tabName == tabs.SENT && <SentGifts sentGifts={sentGifts} />}
        {tabName == tabs.RECEIVED && (
          <ReceivedGifts
            setGiftStatus={setGiftStatus}
            receivedGifts={receivedGifts}
          />
        )}
      </div>
    </div>
  );
};
