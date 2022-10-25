import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;
