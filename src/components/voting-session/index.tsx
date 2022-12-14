import { useEffect, useState } from "react";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import { GetVotingSession } from "../../services/definitions/VotingSessionService";
import ProposalItem from "../proposal-item";
import styles from "./voting-session.module.scss";

interface PropType {
  votingSessionId: string;
  getVotingSession: GetVotingSession;
}

function VotingSession({ votingSessionId, getVotingSession }: PropType) {
  const [ratings, setRatings] = useState<number[]>([]);
  const [votingSession, setVotingSession] = useState<VotingSessionModel | null>(null);

  useEffect(() => {
    getVotingSession(votingSessionId)
      .then(vs => setVotingSession(vs))
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (votingSession === null) { return; }
    setRatings(Array(votingSession.proposals.length).fill(1));
  }, [votingSession])

  function onScoreUpdated(index: number, newScore: number) {
    if (votingSession === null) { return; }
    if (index < 0 || votingSession.proposals.length <= index) { return; }
    if (newScore < 1 || 5 < newScore) { return; }

    const newRatings = [...ratings];
    newRatings[index] = Math.floor(newScore);
    setRatings(newRatings);
  }

  if (votingSession === null) {
    return (<h2>Voting session not found !</h2>);
  }

  return (
    <div className={styles.votingSessionContainer}>
      <p>{votingSession.description}</p>
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
      {votingSession.isOpen
        ? <button onClick={_ => alert(ratings)}>Vote</button>
        : <></>
      }
    </div>
  );
}

export default VotingSession;