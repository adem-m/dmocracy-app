import {contract} from "../../App";

export const initVotingSession = async (description: string, proposals: string[]) => {
    await contract.functions.initVotingSession(description, proposals);
};

export const vote = async (sessionId: string, choices: number[]) => {
    await contract.functions.vote(sessionId, choices);
};