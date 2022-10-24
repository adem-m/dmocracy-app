import { useNavigate } from "react-router-dom";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import styles from "./voting-session-item.module.scss";

interface PropType {
  votingSession: VotingSessionModel
}

function VotingSessionItem({ votingSession }: PropType) {
  const navigate = useNavigate();

  return (
    <li 
      className={styles.item}
      onClick={_ => navigate(`/voting-sessions/${votingSession.id}`, { state: votingSession })}>
      <div>
        <p>Chairman: {votingSession.chairman}</p>
        <p>Description: {votingSession.description}</p>
      </div>
    </li>
  );
}

export default VotingSessionItem;