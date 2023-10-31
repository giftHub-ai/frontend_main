import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import _ from "underscore";
import NavBar from "../NavBar";
import { StartButton } from "./HomePage";
import ReceivedGifts from "./ReceivedGifts";
import SentGifts from "./SentGifts";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [sentGifts, setSentGifts] = useState([]);
  const [receivedGifts, setRecievedGifts] = useState([]);
  const [id, setId] = useState(null);
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (_.isEmpty(localStorage.getItem("token"))) {
      navigate("../");
    }

    axios.get("http://localhost:5000/gift/getgift", config).then((res) => {
      console.log("received gifts: ", res.data.gifts);
      setRecievedGifts(res.data.gifts);
    });
    // const d = await data.json();

    axios.get("http://localhost:5000/gift/mygift", config).then((res) => {
      console.log("sent gifts: ", res.data.gifts);
      setSentGifts(res.data.gifts);
    });

    setLoading(false);
  }, []);

  if (loading) {
    return <div className="">Loading</div>;
  } else {
    return (
      <div className="bg-">
        <NavBar />
        <Link to="/" className="w-full flex justify-center">
          <StartButton />
        </Link>
        <SentGifts sentGifts={sentGifts} />
        <ReceivedGifts receivedGifts={receivedGifts} />
      </div>
    );
  }
};

export default Dashboard;
