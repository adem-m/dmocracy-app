import { useParams } from "react-router-dom";
import VotingSession from "../components/voting-session";
import { getVotingSessionWeb } from "../services/web/VotingSessionServiceWeb";

function VotingSessionPage() {
  const { votingSessionId } = useParams();
  
  if (votingSessionId === undefined) {
    return (<></>);
  }

  return (
    <>
      <h2>Voting Session n°{votingSessionId}</h2>
      <VotingSession votingSessionId={votingSessionId} getVotingSession={getVotingSessionWeb}/>
    </>
  );
}

export default VotingSessionPage;