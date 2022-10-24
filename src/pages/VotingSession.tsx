import { useLocation } from "react-router-dom";
import VotingSession from "../components/voting-session";
import { VotingSessionModel } from "../models/VotingSessionModel";

function VotingSessionPage() {
  const { state } = useLocation();
  const votingSession = (state as VotingSessionModel)

  return (
    <>
      <h2>Voting Session n°{votingSession.id}</h2>
      <VotingSession votingSession={votingSession}/>
    </>
  );
}

export default VotingSessionPage;