import { useAccount } from "wagmi";
import MyVotingSessionList from "../components/my-voting-session-list";
import { listVotingSessionsByChairmanWeb } from "../services/web/VotingSessionServiceWeb";

function MyVotingSessionsPage() {
  const { address } = useAccount();

  return (
    <>
      <h1>My Voting Sessions</h1>
      <MyVotingSessionList getVotingSessions={listVotingSessionsByChairmanWeb} wallet={address!}/>
    </>
  );
}

export default MyVotingSessionsPage;