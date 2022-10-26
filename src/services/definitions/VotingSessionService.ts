import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import { VotingSessionModel } from "../../models/VotingSessionModel";

export type GetVotingSession = (id: string) => Promise<VotingSessionModel>;
export type ListVotingSessions = (limit: number, offset: number) => AsyncGenerator<VotingSessionItemModel[]>;