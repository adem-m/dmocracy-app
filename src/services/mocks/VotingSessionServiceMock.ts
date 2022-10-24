import { ProposalModel } from "../../models/ProposalModel";
import { VotingSessionModel } from "../../models/VotingSessionModel";

const proposals: ProposalModel[] = [{
  content: "Proposal 1",
  score: "0"
}, {
  content: "Proposal 2",
  score: "0"
}, {
  content: "Proposal3",
  score: "0"
}];

export async function listVotingSessions(): Promise<VotingSessionModel[]> {
  return [{
    id: "1",
    chairman: "Chairman 1",
    description: "Voting Session n°1",
    proposals
  }, {
    id: "2",
    chairman: "Chairman 2",
    description: "Voting Session n°2",
    proposals
  },{
    id: "3",
    chairman: "Chairman 3",
    description: "Voting Session n°3",
    proposals
  },]
}