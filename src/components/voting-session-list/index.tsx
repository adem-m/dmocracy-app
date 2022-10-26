import { useState, useEffect } from "react";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import { ListVotingSessions } from "../../services/defintitions/VotingSessionService";
import VotingSessionItem from "../voting-session-item";
import styles from "./voting-session-list.module.scss";

interface PropType {
  getVotingSessions: ListVotingSessions
}

function VotingSessionList({ getVotingSessions }: PropType) {
  const [votingSessions, setVotingSessions] = useState<VotingSessionModel[]>([]);

  useEffect(() => {
    getVotingSessions(1, 1)
      .then(vs => setVotingSessions(votingSessions.concat(vs)))
      .catch(err => alert(err.message));
  }, []);
  
  return (      
    <ul className={styles.votingSessionList}>
      {votingSessions.map((vs, idx) => (<VotingSessionItem key={idx} votingSession={vs}/>))}
    </ul>
  );
}

export default VotingSessionList;