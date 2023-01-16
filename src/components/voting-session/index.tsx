import {useEffect, useState} from "react";
import {VotingSessionModel} from "../../models/VotingSessionModel";
import {GetVotingSession} from "../../services/definitions/VotingSessionService";
import ProposalItem from "../proposal-item";
import styles from "./voting-session.module.scss";
import {vote} from "../../services/blockchain/VotingSessionServiceBlockchain";
import {useAccount} from "wagmi";
import {getWinningProposal} from "../../services/web/VotingSessionServiceWeb";

interface PropType {
    votingSessionId: string;
    getVotingSession: GetVotingSession;
}

function VotingSession({votingSessionId, getVotingSession}: PropType) {
    const [ratings, setRatings] = useState<number[]>([]);
    const [votingSession, setVotingSession] = useState<VotingSessionModel | null>(null);
    const [winningProposal, setWinningProposal] = useState<string | null>(null);
    const {isConnected} = useAccount();

    useEffect(() => {
        getVotingSession(votingSessionId)
            .then(vs => {
                vs.isOpen = Boolean(vs.description[1]);
                setVotingSession(vs)
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (votingSession === null) {
            return;
        }
        if (!votingSession.isOpen) {
            fetchWinningProposal().then();
        }
    }, [votingSession])

    function onScoreUpdated(index: number, newScore: number) {
        if (votingSession === null) {
            return;
        }
        if (index < 0 || votingSession.proposals.length <= index) {
            return;
        }
        if (newScore < 1 || 5 < newScore) {
            return;
        }

        const newRatings = [...ratings];
        newRatings[index] = Math.floor(newScore - 1);
        setRatings(newRatings);
    }

    if (votingSession === null) {
        return (<h2>Voting session not found !</h2>);
    }

    async function handleOnClick() {
        if (ratings.length !== votingSession?.proposals.length)
            return;
        try {
            await vote(votingSessionId, ratings);
            alert("You successfully voted");
        } catch (e) {
            alert("You have already voted");
        }
    }

    async function fetchWinningProposal() {
        const wp = await getWinningProposal(votingSessionId);
        setWinningProposal(wp);
    }

    return (
        <div className={styles.votingSessionContainer}>
            <p>{votingSession.description[0]}</p>
            {
                votingSession.isOpen &&
                <>
                    <ul>
                        {votingSession.proposals.map((p, idx) => (
                                <ProposalItem
                                    key={idx}
                                    index={idx}
                                    proposal={p}
                                    isVotingModeOn={votingSession.isOpen}
                                    onScoreUpdated={onScoreUpdated}/>
                            )
                        )}
                    </ul>
                    {
                        votingSession.isOpen && isConnected &&
                        <button onClick={handleOnClick}>Vote</button>
                    }
                </>
            }
            {
                !votingSession.isOpen &&
                <>
                    <h3>Proposals</h3>
                    {
                        votingSession.proposals.map((proposal, i) => <div key={i}>{proposal.content}</div>)
                    }
                    <h2>Winning proposal</h2>
                    <h4>{winningProposal}</h4>
                </>
            }

        </div>
    );
}

export default VotingSession;