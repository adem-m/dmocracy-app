import MyVotingSessionList from "../components/my-voting-session-list";
import { listVotingSessionsByChairmanMock } from "../services/mocks/VotingSessionServiceMock";

interface PropType {
  wallet?: string
}

function MyVotingSessionsPage({ wallet = "" }: PropType) {
  return (
    <>
      <h1 onClick={_ => alert(wallet)}>My Voting Sessions</h1>
      <MyVotingSessionList getVotingSessions={listVotingSessionsByChairmanMock} wallet={wallet}/>
    </>
  );
}

export default MyVotingSessionsPage;