import Paper from "@mui/material/Paper";
import {ethers, providers} from "ethers";
import { BrowserRouter } from "react-router-dom";
import {createClient, WagmiConfig} from "wagmi";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/navbar";
import votingSystemAbi from "./abis/voting-system.abi";

const web3Client = createClient({
  autoConnect: true,
  provider: new providers.WebSocketProvider(import.meta.env.VITE_NETWORK)
});

// @ts-ignore
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();
export const contract = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, votingSystemAbi, signer)

function App() {
  return (
    <WagmiConfig client={web3Client}>
      <BrowserRouter>
        <Navbar/>
          <Paper className="paper" elevation={3}>
              <AppRouter/>
          </Paper>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
