import VotingSessionList from "../components/voting-session-list";
import { listVotingSessionsWeb } from "../services/web/VotingSessionServiceWeb";

export function VotingSessionsPage() {
  return (
    <>
      <h2>Voting sessions</h2>
      <VotingSessionList getVotingSessions={listVotingSessionsWeb}/>
    </>
  );
}

export default VotingSessionsPage;