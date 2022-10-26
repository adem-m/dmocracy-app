import { useNavigate } from "react-router-dom";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import styles from "./voting-session-item.module.scss";

interface PropType {
  votingSession: VotingSessionItemModel
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