import { UserProvider } from "./components/Context";
import MultiStepForm from "./components/form/MultiStepForm";
import "./index.css";
function App() {
  return (
    <div className="w-screen overflow-y-scroll flex items-center justify-center font-sans border">
      <UserProvider>
        <MultiStepForm></MultiStepForm>
      </UserProvider>
      {/* <img
        src={maleGift}
        className="hidden lg:block absolute right-0 top-24"
      ></img>
      <img src={girlGift} className="absolute left-0 top-16 "></img> */}
    </div>
  );
}

export default App;
