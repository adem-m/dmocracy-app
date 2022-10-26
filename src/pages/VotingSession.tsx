import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import VotingSession from "../components/voting-session";
import { VotingSessionModel } from "../models/VotingSessionModel";
import { GetVotingSession } from "../services/definitions/VotingSessionService";

interface PropType {
  getVotingSession: GetVotingSession
}

function VotingSessionPage({ getVotingSession }: PropType) {
  const { votingSessionId } = useParams();
  const [votingSession, setVotingSession] = useState<VotingSessionModel | null>(null);

  useEffect(() => {
    if (typeof votingSessionId !== "string") { return; }
    getVotingSession(votingSessionId)
      .then(vs => setVotingSession(vs))
      .catch(console.error)
  }, [])

  if (votingSession === null) {
    return (<></>);
  }

  return (
    <>
      <h2>Voting Session n°{votingSession.id}</h2>
      <VotingSession votingSession={votingSession}/>
    </>
  );
}

export default VotingSessionPage;