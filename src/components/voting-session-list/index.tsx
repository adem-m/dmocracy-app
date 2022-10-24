import { useState, useEffect } from "react";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import VotingSessionItem from "../voting-session-item";
import styles from "./voting-session-list.module.scss";

interface PropType {
  getVotingSessions: () => Promise<VotingSessionModel[]>
}

function VotingSessionList({ getVotingSessions }: PropType) {
  const [votingSessions, setVotingSessions] = useState<VotingSessionModel[]>([]);

  useEffect(() => {
    getVotingSessions()
      .then(vs => setVotingSessions(votingSessions.concat(vs)))
      .catch(err => alert(err.message));
  }, []);
  
  return (      
    <ul className={styles.votingSessionList}>
      {votingSessions.map(vs => (<VotingSessionItem votingSession={vs}/>))}
    </ul>
  );
}

export default VotingSessionList;