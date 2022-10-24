import { ProposalModel } from "./ProposalModel";

export interface VotingSessionModel {
  id: string;
  chairman: string;
  description: string;
  proposals: ProposalModel[];
}