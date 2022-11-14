import { MouseEvent as ReactMouseEvent, useState, useEffect, useRef } from "react";
import { VotingSessionItemModel } from "../../models/VotingSessionItemModel";
import { ListVotingSessionsByChairman } from "../../services/definitions/VotingSessionService";
import LoadMoreBtn from "../load-more-btn";
import MyVotingSessionItem from "../my-voting-session-item";
import styles from "./my-voting-session-list.module.scss";

interface PropType {
  wallet: string;
  getVotingSessions: ListVotingSessionsByChairman;
}

function MyVotingSessionList({ wallet, getVotingSessions }: PropType) {
  const [canLoad, setCanLoad] = useState(true);
  const [votingSessions, setVotingSessions] = useState<VotingSessionItemModel[]>([]);
  let ite = useRef(getVotingSessions(wallet, 20, 0));

  // useEffect(() => {
  //   console.log("First")
  //   iterList(votingSessions);
  // }, []);

  useEffect(() => {
    setCanLoad(true);
    setVotingSessions(_ => []);
    ite.current = getVotingSessions(wallet, 20, 0);
    iterList([]);
  }, [wallet])

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
      <ul className={styles.myVotingSessionList}>
        {votingSessions.map((vs, idx) => (
          <MyVotingSessionItem key={idx} votingSession={vs}/>
        ))}
      </ul>
      {canLoad
        ? (<LoadMoreBtn onClick={handleClick}/>)
        : <></>
      }
    </>      

  );
}

export default MyVotingSessionList;