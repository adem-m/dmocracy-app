import { providers } from "ethers";
import { BrowserRouter } from "react-router-dom";
import { createClient, WagmiConfig } from "wagmi";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/navbar";

const web3Client = createClient({
  autoConnect: true,
  provider: new providers.WebSocketProvider(import.meta.env.VITE_NETWORK)
});

function App() {
  return (
    <WagmiConfig client={web3Client}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
