import axios from "axios";
import { useState } from "react";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { loginFields } from "./formFields";

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
    // console.log(loginState);
    authenticateUser(loginState);
  };

  //Handle Login API Integration here
  const authenticateUser = (userData) => {
    axios
      .post("http://localhost:3000/user/login", userData)
      .then((res) => {
        console.log("response  ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="mx-auto sm:mt-16" onSubmit={handleSubmit}>
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

      <FormExtra></FormExtra>
      <FormAction handleSubmit={handleSubmit} text="Login"></FormAction>
    </form>
  );
}
