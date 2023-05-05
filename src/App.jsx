import HomePage from "./HomePage";
import "./index.css";
function App() {
  return (
    <div className="w-screen min-h-screen overflow-y-scroll font-sans">
      {/* <div className="w-screen min-h-screen overflow-y-scroll flex items-center justify-center font-sans border"> */}
      {/* <UserProvider>
        <MultiStepForm></MultiStepForm>
      </UserProvider> */}
      <HomePage className="w-full"></HomePage>
      {/* <img
        src={maleGift}
        className="hidden lg:block absolute right-0 top-24"
      ></img>
      <img src={girlGift} className="absolute left-0 top-16 "></img> */}
    </div>
  );
}

export default App;
