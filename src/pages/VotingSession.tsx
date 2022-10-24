import { useParams } from "react-router-dom"

function VotingSession() {
  const { votingSessionId } = useParams();

  return (<h1>Voting Session n°{votingSessionId}</h1>);
}

export default VotingSession;