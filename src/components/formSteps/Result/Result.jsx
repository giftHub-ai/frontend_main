import React, { useEffect, useState } from "react";
import PrevNext from "../../PrevNext";
import axios from "axios";
import { UserContext } from "../../Context";
import _ from "underscore";
import toast from "react-hot-toast";
import Toast from "../../Toast";

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const inputDetails = React.useContext(UserContext);

  useEffect(() => {
    const userInputValues = inputDetails.userInput;
    const usersName = JSON.stringify(userInputValues);
    let customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(typeof userInputValues);
    if (_.isEmpty(data)) {
      axios
        .post("http://127.0.0.1:5000/incomes", usersName, customConfig)
        .then((res) => {
          setData(res.data);
          console.log("res54ponse  ", res);
          setLoading(false);})
        .catch((err) => {
          toast.error("Server Error!", {
            duration: 2000,
            position: "top-right",
          });
        });
    }
    else{
      console.log("run");
      // setData(data || null);
    }}
  , []);

 const result = Object.keys(data).map((key) => {
    return (
      <div key={key}>
        <p>
          {key}: {data[key]}
        </p>
      </div>
    );
  }); 

  if (loading === true)
    return (
      <>
        <div className="">loading</div>
        <PrevNext />
      </>
    );
  else
    return (
      <div>
        <Toast />
        <div className="">
          {data.Gift1}
          {data.Gift2}
          {data.Gift3}
          {/* {result} */}

          {/* {    console.log("data  ",data)}
          {data.map((item, ind) => {
            return <div className="">{item}</div>;
          })} */}
        </div>
        <PrevNext />
      </div>
    );
};

export default Result;
