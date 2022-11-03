import VotingSessionList from "../components/voting-session-list";
import { listVotingSessionsMock } from "../services/mocks/VotingSessionServiceMock";
import { listVotingSessionsWeb } from "../services/web/VotingSessionServiceWeb";

export function VotingSessionsPage() {
  return (
    <>
      <h2>Active voting sessions</h2>
      <VotingSessionList getVotingSessions={listVotingSessionsWeb}/>
    </>
  );
}

export default VotingSessionsPage;