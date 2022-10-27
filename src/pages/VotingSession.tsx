import { useParams } from "react-router-dom";
import VotingSession from "../components/voting-session";
import { getVotingSessionMock } from "../services/mocks/VotingSessionServiceMock";

function VotingSessionPage() {
  const { votingSessionId } = useParams();
  
  if (votingSessionId === undefined) {
    return (<></>);
  }

  return (
    <>
      <h2>Voting Session n°{votingSessionId}</h2>
      <VotingSession votingSessionId={votingSessionId} getVotingSession={getVotingSessionMock}/>
    </>
  );
}

export default VotingSessionPage;