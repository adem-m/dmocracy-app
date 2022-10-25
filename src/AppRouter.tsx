import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const VotingSessions = lazy(() => import("./pages/VotingSessions"));
const VotingSession = lazy(() => import("./pages/VotingSession"));

function AppRouter() {
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
          key={"default"}
          path={"/*"}
          element={<Navigate replace to="/"/>}/>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;