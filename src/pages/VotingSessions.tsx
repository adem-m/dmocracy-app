import VotingSessionList from "../components/voting-session-list";
import { listVotingSessions } from "../services/mocks/VotingSessionServiceMock";

export function VotingSessions() {
  return (
    <>
      <h2>Active voting sessions</h2>
      <VotingSessionList getVotingSessions={listVotingSessions}/>
    </>
  );
}

export default VotingSessions;