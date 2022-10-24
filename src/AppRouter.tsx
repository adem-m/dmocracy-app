import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/Home"));
const VotingSessions = lazy(() => import("./pages/VotingSessions"));
const VotingSession = lazy(() => import("./pages/VotingSession"));

const Root = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #363636;
  background: linear-gradient(183deg, rgba(54,54,54,1) 3%, rgba(56,56,56,1) 100%);
`;

function AppRouter() {
  return (
    <Root>
      <Navbar/>
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
              key={"default"}
              path={"/*"}
              element={<Navigate replace to="/"/>}/>
          </Routes>
        </Suspense>
    </Root>
  );
}

export default AppRouter;