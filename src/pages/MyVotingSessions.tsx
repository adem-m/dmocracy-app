import { useAccount } from "wagmi";
import MyVotingSessionList from "../components/my-voting-session-list";
import { listVotingSessionsByChairmanMock } from "../services/mocks/VotingSessionServiceMock";

function MyVotingSessionsPage() {
  const { address } = useAccount();

  return (
    <>
      <h1 onClick={_ => alert(address!)}>My Voting Sessions</h1>
      <MyVotingSessionList getVotingSessions={listVotingSessionsByChairmanMock} wallet={address!}/>
    </>
  );
}

export default MyVotingSessionsPage;