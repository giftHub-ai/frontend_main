import HomePage from "./HomePage";
import { UserProvider } from "./components/Context";
import "./index.css";
import MultiStepForm from "./components/form/MultiStepForm";
import { useState } from "react";
function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  if (formDisplay === false)
    return (
      <HomePage className="w-full" setFormDisplay={setFormDisplay}></HomePage>
    );
  else
    return (
      <div className="w-screen min-h-screen overflow-y-scroll flex items-center justify-center font-sans border bg-[url('/images/banner1.webp')]">
        <UserProvider>
          <MultiStepForm></MultiStepForm>
        </UserProvider>
        {/* <img
        src={maleGift}
        className="hidden lg:block absolute right-0 top-24"
      ></img>*/}
        {/* <img src={girlGift} className="absolute left-0 top-16 "></img>  */}
      </div>
    );
}

export default App;
