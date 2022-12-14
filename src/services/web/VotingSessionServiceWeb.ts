import {GetVotingSession, ListVotingSessions, ListVotingSessionsByChairman} from "../definitions/VotingSessionService";

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

        yield res.data.map((value: any[], index: any) => {
            return {
                description: value[0],
                chairman: null,
                sessionId: index
            }
        });
        nextUrl = res.next;

    } while (nextUrl);
}

export const listVotingSessionsByChairmanWeb: ListVotingSessionsByChairman = async function* (chairman, limit, offset) {
    let nextUrl: string | null = `${API_URL}voting-sessions/chairman/${chairman}?limit=${limit}&offset=${offset}`;
    do {
        const res: any = await fetch(nextUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.statusText);
            });

        yield res.data;
        nextUrl = res.next;

    } while (nextUrl);
}