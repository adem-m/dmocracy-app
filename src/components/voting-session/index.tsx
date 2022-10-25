import { useState } from "react";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import ProposalItem from "../proposal-item";
import styles from "./voting-session.module.scss";

interface PropType {
  votingSession: VotingSessionModel
}

function VotingSession({ votingSession }: PropType) {
  const [isOpen, setIsOpen] = useState(votingSession.isOpen);
  const [ratings, setRatings] = useState(Array(votingSession.proposals.length).fill(1));

  function onScoreUpdated(index: number, newScore: number) {
    if (index < 0 || votingSession.proposals.length <= index) { return; }
    if (newScore < 1 || 5 < newScore) { return; }

    const newRatings = [...ratings];
    newRatings[index] = Math.floor(newScore);
    setRatings(newRatings);
  }

  function onScoreUpdated2(index: number, newScore: number) {
    if (index < 0 || votingSession.proposals.length <= index) { return; }
    if (newScore < 1 || 5 < newScore) { return; }

    const newRatings = [...ratings];
    newRatings[index] = Math.floor(newScore);
    setRatings(newRatings);
  }


  return (
    <div className={styles.votingSessionContainer}>
      <p onClick={_ => setIsOpen(!isOpen)}>Chairman: {votingSession.chairman}</p>
      <p>{votingSession.description}</p>
      <ul>
        {votingSession.proposals.map((p, idx) => (
          <ProposalItem 
            key={idx} 
            index={idx} 
            proposal={p} 
            isVotingModeOn={isOpen} 
            onScoreUpdated={onScoreUpdated2}/>
          )
        )}
      </ul>
      {isOpen
        ? <button onClick={_ => alert(ratings)}>Vote</button>
        : <></>
      }
    </div>
  );
}

export default VotingSession;