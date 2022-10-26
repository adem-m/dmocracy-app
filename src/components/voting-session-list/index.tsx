import { useState, useEffect } from "react";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import { ListVotingSessions } from "../../services/definitions/VotingSessionService";
import VotingSessionItem from "../voting-session-item";
import styles from "./voting-session-list.module.scss";

interface PropType {
  getVotingSessions: ListVotingSessions
}

function VotingSessionList({ getVotingSessions }: PropType) {
  const [votingSessions, setVotingSessions] = useState<VotingSessionItemModel[]>([]);
  const ite = getVotingSessions(20, 0);

  async function iterList() {
    ite.next()
      .then(vs => {
        if (vs.value === undefined) { return; }
        setVotingSessions(votingSessions.concat(vs.value))
      })
      .catch(err => alert(err.message));
  } 

  useEffect(() => {
    iterList();
  }, []);
  
  return (      
    <ul className={styles.votingSessionList}>
      {votingSessions.map((vs, idx) => (<VotingSessionItem key={idx} votingSession={vs}/>))}
    </ul>
  );
}

export default VotingSessionList;