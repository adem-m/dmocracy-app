import { VotingSessionModel } from "./VotingSessionModel";

export interface VotingSessionItemModel 
  extends Omit<VotingSessionModel, "proposals"> {}