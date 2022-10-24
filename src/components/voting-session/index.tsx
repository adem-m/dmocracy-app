import { useState } from "react";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import ProposalItem from "../proposal-item";

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


  return (
    <div>
      <p onClick={_ => setIsOpen(!isOpen)}>Chairman: {votingSession.chairman}</p>
      <p>{votingSession.description}</p>
      <ul>
        {votingSession.proposals.map((p, idx) => (
          <ProposalItem 
            key={idx} 
            index={idx} 
            proposal={p} 
            isVotingModeOn={isOpen} 
            onScoreUpdated={onScoreUpdated}/>
          )
        )}
        {isOpen
          ? <button onClick={_ => alert(ratings)}>Vote</button>
          : <></>
        }
      </ul>
    </div>
  );
}

export default VotingSession;