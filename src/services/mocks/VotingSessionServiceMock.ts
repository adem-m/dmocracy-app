import { ProposalModel } from "../../models/ProposalModel";
import { GetVotingSession, ListVotingSessions, ListVotingSessionsByChairman } from "../definitions/VotingSessionService";

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

const votingSessions = [{
  id: "1",
  chairman: "Chairman 1",
  description: "Voting Session n°1",
  proposals,
  isOpen: true
}, {
  id: "2",
  chairman: "Chairman 2",
  description: "Voting Session n°2",
  proposals,
  isOpen: false
}, {
  id: "3",
  chairman: "Chairman 3",
  description: "Voting Session n°3",
  proposals,
  isOpen: true
}];

export const getVotingSessionMock: GetVotingSession = async (id: string) => {
  return votingSessions.find(vs => vs.id === id) ?? votingSessions[0];
}

export const listVotingSessionsMock: ListVotingSessions = async function* (limit, offset) {
  while(offset < 3) {
    const res = votingSessions;
    yield res;
    offset += 1;
  }
}

export const listVotingSessionsByChairmanMock: ListVotingSessionsByChairman = 
  async function*(chairman, limit, offset) {
    while(offset < 3) {
      const res = votingSessions;
      yield res;
      offset += 1;
    }
  }