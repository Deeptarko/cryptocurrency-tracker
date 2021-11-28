import "./App.css";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import MainRightBody from "./components/MainRIghtBody/MainRightBody";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="mainComponent">
        <LeftNavbar />
        <MainRightBody />
      </div>
    </BrowserRouter>
  );
}

export default App;
