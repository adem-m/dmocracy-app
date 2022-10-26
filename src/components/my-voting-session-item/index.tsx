import { useNavigate } from "react-router-dom";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import styles from "./my-voting-session-item.module.scss";

interface PropType {
  votingSession: VotingSessionItemModel
}

function MyVotingSessionItem({ votingSession }: PropType ) {
  const navigate = useNavigate();

  return (
    <li className={styles.itemContainer}>
      <div
        className={styles.item}
        onClick={_ => navigate(`/voting-sessions/${votingSession.id}`)}
      >
        <p>Description: {votingSession.description}</p>
      </div>
      {votingSession.isOpen || <button>Close</button>}
    </li>
  );
}

export default MyVotingSessionItem;