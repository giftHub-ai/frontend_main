import MultiStepForm from "./components/form/MultiStepForm";
import { UserProvider } from "./components/Context";
import "./index.css";
function App() {

  

  return (
    <div className="font-sans bg-[#FF5F9E]">
      <UserProvider>
        <MultiStepForm></MultiStepForm>
      </UserProvider>
      <img
        src="./images/boygift.svg"
        className="absolute right-0 top-24  "
      ></img>
      {/* <img
        src="./images/girlgift.svg"
        className="absolute left-0 top-16 "
      ></img> */}
    </div>
  );
}

export default App;
