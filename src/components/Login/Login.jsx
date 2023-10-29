import axios from "axios";
import { useState } from "react";
import { api_base_url } from "../../config/api";
import FormAction from "./FormAction";
import Input from "./Input";
import { loginFields } from "./formFields";
import { useNavigate } from "react-router-dom";
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
    authenticateUser(loginState);

  };
  const navigate = useNavigate();

  //Handle Login API Integration here
  const authenticateUser = (userData) => {
    axios
      .post(`${api_base_url}/user/login`, userData, {
        // withCredentials: true,
      })
      .then((res) => {
        console.log("response  ", res);

        localStorage.setItem("token", res.data.token);
        /* const recipientId = res.data.user._id;
        if (_.isEmpty(recipientId)) {
          throw new Error("Recipient id not found in api response");
        }
        else {
        } */
        navigate('../');
      })
      .catch((err) => {});
  };

  return (
    <form className="mx-auto sm:mt-16 p-4 lg:p-0" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {/* <FormExtra></FormExtra> */}
      <FormAction handleSubmit={handleSubmit} text="Login"></FormAction>
    </form>
  );
}
