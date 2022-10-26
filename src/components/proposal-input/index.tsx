import TextField from "@mui/material/TextField";
import { ChangeEvent as ReactChangeEvent, MouseEvent as ReactMouseEvent } from "react";
import styles from "./proposal-input.module.scss";

interface PropType {
  index: number;
  value: string;
  proposalUpdatedListener: (
    e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    index: number
  ) => void;
  proposalRemovedListener: (
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>, 
    index: number
  ) => void;
}

function ProposalInput({ index, value, proposalUpdatedListener, proposalRemovedListener }: PropType) {
  return (
    <div className={styles.proposalContainer}>
      <TextField 
        required
        label={`Proposal ${index + 1}`} 
        variant="standard" 
        value={value}
        onChange={e => proposalUpdatedListener(e, index)}
      />
      <button onClick={e => proposalRemovedListener(e, index)}>Remove</button>
    </div>
  );
}

export default ProposalInput;