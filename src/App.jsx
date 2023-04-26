import InputComponent from "./components/InputComponent";
import SubmitButton from "./components/SubmitButton";
import "./index.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="w-full border-2">
      <div className="border max-w-xl mx-auto p-4">
        <form className="w-full" onSubmit={handleSubmit(handleFormSubmit)}>
          <InputComponent
            labelName={"Age: "}
            labelId={"age"}
            type={"number"}
            register={register}
            validations={{ required: true }}
            registerKey={"age"}
            placeholder={"23"}
          ></InputComponent>
          <InputComponent
            labelName={"Gender: "}
            labelId={"gender"}
            type={"text"}
            register={register}
            validations={{ required: true }}
            registerKey={"gender"}
            placeholder={"Male/Female"}
          ></InputComponent>
          <SubmitButton text={`Submit`}></SubmitButton>
        </form>
      </div>
    </div>
  );
}

export default App;
