import InputComponent from "./components/InputComponent";
import MultiStepForm from "./components/MultiStepForm";
import SubmitButton from "./components/Button";
import "./index.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex justify-between items-center h-screen">
      <div className=" max-w-xl mx-auto p-4">
        <MultiStepForm/>
      </div>
    </div>
  );
}

export default App;
