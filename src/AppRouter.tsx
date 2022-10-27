import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAccount } from "wagmi";
import { getVotingSessionMock } from "./services/mocks/VotingSessionServiceMock";

const Home = lazy(() => import("./pages/Home"));
const VotingSessions = lazy(() => import("./pages/VotingSessions"));
const VotingSession = lazy(() => import("./pages/VotingSession"));
const NewVotingSession = lazy(() => import("./pages/NewVotingSession"));
const MyVotingSessions = lazy(() => import("./pages/MyVotingSessions"));

function AppRouter() {
  const { address, isConnected } = useAccount();

  return (
    <Suspense>
      <Routes>
        <Route 
          key={"home"} 
          path={"/"} 
          element={<Home/>}/>

        <Route 
          key={"votingSessions"} 
          path={"/voting-sessions"} 
          element={<VotingSessions/>}/>

        <Route
          key={"votingSession"}
          path={"/voting-sessions/:votingSessionId"}
          element={<VotingSession/>}
          />

        <Route
          key={"newVotingSession"}
          path={"/new-voting-session"}
          element={<NewVotingSession/>}
        />

        {(!isConnected || address === undefined)
          ? <></>  
          : (<Route
              key={"myVotingSessions"}
              path={"/my-voting-sessions"}
              element={<MyVotingSessions/>}
            />
          )
        }

        <Route
          key={"default"}
          path={"/*"}
          element={<Navigate replace to="/"/>}/>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;