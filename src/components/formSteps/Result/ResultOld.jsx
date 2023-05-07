import React, { useEffect, useState } from "react";
import PrevNext from "../../PrevNext";
import axios from "axios";
import { UserContext } from "../../Context";
const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const inputDetails = React.useContext(UserContext);

  useEffect(() => {
    const userInputValues = inputDetails.userInput;
    console.log(userInputValues);
    axios
      .post("http://127.0.0.1:5000/incomes", userInputValues)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading === true)
    return (
      <div className="">
        loading <PrevNext />
      </div>
    );
  else
    return (
      <div>
        <div className="">
          {data.map((item, ind) => {
            return <div className="">{item}</div>;
          })}
        </div>
        <PrevNext />
      </div>
    );
};

export default Result;
