import React, { useEffect, useState } from "react";
import SentGifts from "./SentGifts";
import ReceivedGifts from "./ReceivedGifts";
import NavBar from "../NavBar";
import { StartButton } from "./HomePage";
import _ from "underscore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  if (loading) return <div className="">Loading</div>;
  else {
    return (
      <div className="bg-">
        <NavBar />
        <div className="w-full flex justify-center     ">
          <StartButton />
        </div>
        <SentGifts sentGifts={sentGifts}/>
        <ReceivedGifts setGiftStatus={setGiftStatus} receivedGifts={receivedGifts}/>
      </div>
    );
  }
};

export default Dashboard;
