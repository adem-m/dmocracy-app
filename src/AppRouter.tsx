import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const VotingSessions = lazy(() => import("./pages/VotingSessions"));

function AppRouter() {
  return (
    <>
      <Routes>
        <Route 
          key={"home"} 
          path={"/"} 
          element={<Home/>}/>

        <Route 
          key={"votingSessions"} 
          path={"voting-sessions"} 
          element={<VotingSessions/>}/>

        <Route
          key={"default"}
          path="/*"
          element={<Navigate replace to="/"/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;