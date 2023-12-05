import React, { useEffect, useState } from "react";
import SentGifts from "./SentGifts";
import ReceivedGifts from "./ReceivedGifts";
import NavBar from "../NavBar";
import { StartButton } from "./HomePage";
import _ from "underscore";
import { Link, useNavigate } from "react-router-dom";
import { api_base_url } from "../../config/api";
import axios from "axios";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [sentGifts, setSentGifts] = useState([]);
  const [receivedGifts, setRecievedGifts] = useState([]);
  const [id,setId] = useState(null);
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (_.isEmpty(localStorage.getItem("token"))) {
      navigate("../");
    }

    axios.get(`${api_base_url}/gift/mygift`, config).then((res) => {
      console.log(res.data.gifts);
      setSentGifts(res.data.gifts);
    });
    // const d = await data.json();

   axios.get(`${api_base_url}/gift/getgift`, config).then((res) => {
    console.log(res.data.gifts);
    setRecievedGifts(res.data.gifts)
  });
    setLoading(false);
  }, []);

  const setGiftStatusAccepted = async (giftStatus,id) => {
    console.log(id);
    axios.post(
      `${api_base_url}/gift/status/${id}`,
      { status: giftStatus },
      config
    ).then((res)=>console.log(res));

    // console.log("set gift status   ", data);
  };
  const setGiftStatusRejected = async (giftStatus,id) => {
    console.log(id);
    axios.post(
      `${api_base_url}/gift/status/${id}`,
      { status: giftStatus },
      config
    ).then((res)=>console.log(res));

    // console.log("set gift status   ", data);
  };
  if (loading) return <div className="">Loading</div>;
  else {
    return (
      <div className="">
        <NavBar />
        <Link to='/' className="w-full flex justify-center" >
          <StartButton />
        </Link>
        <SentGifts sentGifts={sentGifts} />
        <ReceivedGifts
          setGiftStatusAccepted={setGiftStatusAccepted}
          setGiftStatusRejected={setGiftStatusRejected}
          receivedGifts={receivedGifts}
        />
      </div>
    );
  }
};

export default Dashboard;
