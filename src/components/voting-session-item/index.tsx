import { useNavigate } from "react-router-dom";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import styles from "./voting-session-item.module.scss";

interface PropType {
  votingSession: VotingSessionItemModel
}

function VotingSessionItem({ votingSession }: PropType) {
  const navigate = useNavigate();
  // @ts-ignore
    const {sessionId} = votingSession;

  return (
    <li 
      className={styles.item}
      onClick={_ => navigate(`/voting-sessions/${sessionId}`)}>
      <div>
        <p>{votingSession.description}</p>
      </div>
    </li>
  );
}

export default VotingSessionItem;