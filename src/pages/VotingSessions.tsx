import VotingSessionList from "../components/voting-session-list";
import { listVotingSessions } from "../services/mocks/VotingSessionServiceMock";

export function VotingSessionsPage() {
  return (
    <>
      <h2>Active voting sessions</h2>
      <VotingSessionList getVotingSessions={listVotingSessions}/>
    </>
  );
}

export default VotingSessionsPage;