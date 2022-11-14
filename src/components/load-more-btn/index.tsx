import { MouseEvent as ReactMouseEvent } from "react";
import styles from "./load-more-btn.module.scss";

interface Props {
  onClick: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function LoadMoreBtn({ onClick }: Props) {
  return (<button className={styles.loadMoreBtn} onClick={onClick}>Load More</button>);
}

export default LoadMoreBtn;