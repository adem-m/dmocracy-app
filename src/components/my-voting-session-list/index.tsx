import { useState, useEffect, useRef } from "react";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import { ListVotingSessionsByChairman } from "../../services/definitions/VotingSessionService";
import MyVotingSessionItem from "../my-voting-session-item";
import styles from "./my-voting-session-list.module.scss";

interface PropType {
  wallet: string;
  getVotingSessions: ListVotingSessionsByChairman;
}

function MyVotingSessionList({ wallet, getVotingSessions }: PropType) {
  const [votingSessions, setVotingSessions] = useState<VotingSessionItemModel[]>([]);
  let ite = useRef(getVotingSessions(wallet, 20, 0));

  useEffect(() => {
    iterList(votingSessions);
  }, []);

  useEffect(() => {
    ite.current = getVotingSessions(wallet, 20, 0);
    iterList([]);
  }, [wallet])

  async function iterList(prevData: VotingSessionItemModel[]) {
    ite.current.next()
      .then(vs => {
        if (vs.value === undefined) { return; }
        setVotingSessions(prevData.concat(vs.value))
      })
      .catch(err => alert(err.message));
  } 
  
  return (      
    <ul className={styles.myVotingSessionList}>
      {votingSessions.map((vs, idx) => (
        <MyVotingSessionItem key={idx} votingSession={vs}/>
      ))}
    </ul>
  );
}

export default MyVotingSessionList;