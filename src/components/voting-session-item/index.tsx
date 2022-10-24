import { useNavigate } from "react-router-dom";
import { VotingSessionModel } from "../../models/VotingSessionModel";
import styles from "./voting-session-item.module.scss";

function VotingSessionItem(props: {votingSession: VotingSessionModel}) {
  const navigate = useNavigate();

  return (
    <li className={styles.item} key={props.votingSession.id} onClick={_ => navigate(`/voting-sessions/${props.votingSession.id}`)}>
      <div>
        <p>Chairman: {props.votingSession.chairman}</p>
        <p>Description: {props.votingSession.description}</p>
      </div>
    </li>
  );
}

export default VotingSessionItem;