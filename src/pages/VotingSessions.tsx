import VotingSessionList from "../components/voting-session-list";
import { listVotingSessionsMock } from "../services/mocks/VotingSessionServiceMock";

export function VotingSessionsPage() {
  return (
    <>
      <h2>Active voting sessions</h2>
      <VotingSessionList getVotingSessions={listVotingSessionsMock}/>
    </>
  );
}

export default VotingSessionsPage;