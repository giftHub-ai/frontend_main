import HomePage from "./HomePage";
import { UserProvider } from "./components/Context";
import "./index.css";
import MultiStepForm from "./components/form/MultiStepForm";
import { useState } from "react";

function App() {
  const [formDisplay, setFormDisplay] = useState(false);

  return (
    <HomePage className="w-full" setFormDisplay={setFormDisplay}></HomePage>
  );
}

export default App;
