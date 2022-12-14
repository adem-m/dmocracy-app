import { MouseEvent as ReactMouseEvent, useState, useEffect, useRef } from "react";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import { ListVotingSessions } from "../../services/definitions/VotingSessionService";
import LoadMoreBtn from "../load-more-btn";
import VotingSessionItem from "../voting-session-item";
import styles from "./voting-session-list.module.scss";

interface PropType {
  getVotingSessions: ListVotingSessions
}

function VotingSessionList({ getVotingSessions }: PropType) {
  const [canLoad, setCanLoad] = useState(true);
  const [votingSessions, setVotingSessions] = useState<VotingSessionItemModel[]>([]);
  const ite = useRef(getVotingSessions(20, 0));

  useEffect(() => {
    iterList([]);
  }, [])

  async function iterList(prevData: VotingSessionItemModel[]) {
    if (!canLoad) { return; }

    ite.current.next()
      .then(vs => {
        if (vs.value !== undefined) { 
          setVotingSessions(prevData.concat(vs.value))
        }
        if (vs.done) {
          setCanLoad(false);
        }
      })
      .catch(err => alert(err.message));
  }

  function handleClick(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    iterList(votingSessions);
  }
  
  return (      
    <>
      <ul className={styles.votingSessionList}>
        {votingSessions.map((vs, idx) => (<VotingSessionItem key={idx} votingSession={vs}/>))}
      </ul>
      {canLoad
        ? (<LoadMoreBtn onClick={handleClick}/>)
        : <></>
      }
    </>

  );
}

export default VotingSessionList;