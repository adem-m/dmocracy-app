import VotingSessionForm from "../components/voting-session-form";
import {useAccount} from "wagmi";

function NewVotingSession() {
    const {isConnected} = useAccount();

    return (
        <>
            <h2>New Voting Session</h2>
            {
                isConnected && <VotingSessionForm/>
            }
            {
                !isConnected && <h3>Please connect your wallet to create a voting session</h3>
            }
        </>
    );
}

export default NewVotingSession;