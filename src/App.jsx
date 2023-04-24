import InputComponent from "./components/InputComponent";
import "./index.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="w-full h-full border-2 flex justify-center items-center ">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="border w-full h-full flex flex-col justify-between items-start">
          <InputComponent
            labelName={"Age: "}
            labelId={"age"}
            type={"number"}
            register={register}
            validations={{ required: true }}
            registerKey={"age"}
            placeholder={"23"}
          ></InputComponent>
          <button
            className="px-5 py-2 my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
