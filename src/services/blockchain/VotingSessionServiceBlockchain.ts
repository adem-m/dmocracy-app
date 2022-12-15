import {contract} from "../../App";

export const initVotingSession = async (description: string, proposals: string[]) => {
    await contract.functions.initVotingSession(description, proposals);
};

export const vote = async (sessionId: number, choices: any[]) => {
    await contract.functions.vote(sessionId, choices);
};