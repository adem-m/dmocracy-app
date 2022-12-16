import {GetVotingSession, ListVotingSessions} from "../definitions/VotingSessionService";

const API_URL = import.meta.env.VITE_API_URL;

export const getVotingSessionWeb: GetVotingSession = async id => {
    return fetch(`${API_URL}voting-sessions/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        });
}

export const listVotingSessionsWeb: ListVotingSessions = async function* (limit, offset) {
    let nextUrl: string | null = `${API_URL}voting-sessions?limit=${limit}&offset=${offset}`;
    do {
        const res: any = await fetch(nextUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.statusText);
            });

        yield res.data[0].map((value: any[], index: any) => {
            return {
                description: value[0],
                chairman: null,
                sessionId: index,
                isOpen: value[1]
            }
        });
        nextUrl = res.next;

    } while (nextUrl);
}

export const getWinningProposal = async (id: string): Promise<string> => {
    const url = `${API_URL}voting-sessions/${id}/winner`;
    const res = await fetch(url)
    if (res.ok) {
        return (await res.json())[0][0];
    }
    throw new Error(res.statusText);
};