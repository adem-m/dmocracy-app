import {contract} from "../../App";

export const initVotingSession = async (description: string, proposals: string[]) => {
    await contract.functions.initVotingSession(description, proposals);
};

export const vote = async (sessionId: string, choices: number[]) => {
    const gasLimit = await contract.estimateGas.vote(sessionId, choices);
    await contract.functions.vote(sessionId, choices, {gasLimit});
};