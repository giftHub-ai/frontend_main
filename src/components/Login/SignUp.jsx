import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api_base_url } from "../../config/api";
import FormAction from "./FormAction";
import Input from "./Input";
import { signupFields } from "./formFields";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(signupState);
  };

  const handleSuccess = (res) => {
    localStorage.setItem("token", res.data.token);
    const path = location.state?.from ? location.state.from : "/";
    navigate(path);
  };

  //handle Signup API Integration here
  const createAccount = (regUserData) => {
    axios
      .post(`${api_base_url}/user/register`, regUserData, {
        withCredentials: true,
      })
      .then((res) => handleSuccess(res))
      .catch((err) => console.log(err));
    // .post("https://gifthub-ai.onrender.com/user/register", regUserData)
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}