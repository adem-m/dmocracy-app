import { ProposalModel } from "../../models/ProposalModel";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

/**
 * if isVotingModeOn is true, 
 * component should display selectable ratings, 
 * else the score
 */
interface PropType {
  index: number;
  proposal: ProposalModel;
  isVotingModeOn: boolean;
  onScoreUpdated: (index: number, newScore: number) => void
}

function ProposalItem({ index, proposal, isVotingModeOn, onScoreUpdated }: PropType) {
  return (
    <li>
      <div>
        <p>{proposal.content}</p>
        { isVotingModeOn
          ? <Rating
              defaultValue={1}
              onChange={(_, newValue) => {
                if (newValue !== null) {
                  onScoreUpdated(index, newValue);
                }
              }}
              emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}/>
          : <p>{proposal.score}</p>
        }
      </div>
    </li>
  );
}

export default ProposalItem;