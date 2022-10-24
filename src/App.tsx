import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
