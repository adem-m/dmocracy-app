import TextField from "@mui/material/TextField";
import { ChangeEvent as ReactChangeEvent, FormEvent as ReactFormEvent, MouseEvent as ReactMouseEvent, useState } from "react";
import { useAccount } from "wagmi";
import ProposalInput from "../proposal-input";
import styles from "./voting-session-form.module.scss";

function VotingSessionForm() {
  const [description, setDescription] = useState("");
  const [proposals, setProposals] = useState<string[]>(["", ""]);
  const { isConnected } = useAccount();

  function addProposalListener(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (proposals.length >= 10) { return; }
    setProposals([...proposals, ""]);
  }

  function updatedDescriptionListener(e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setDescription(e.currentTarget.value);
  }

  function updateProposalListener(
    e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) {
    e.preventDefault();
    if (index < 0 || proposals.length <= index) { return; }

    const newProposals = [...proposals];
    newProposals[index] = e.currentTarget.value;
    setProposals(newProposals);
  }

  function removeProposalListener(
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) {
    e.preventDefault();
    if (proposals.length <= 2) { return; }
    if (index < 0 || proposals.length <= index) { return; }

    setProposals(proposals.filter((_, idx) => idx !== index));
  }

  async function createVotingSession(e: ReactFormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConnected) {
      alert("You are not connected.");
      return;
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={createVotingSession}>
        <TextField 
          required 
          label="Description" 
          value={description} 
          onChange={updatedDescriptionListener}
          variant="filled" 
          multiline maxRows={5}
        />
        <div>
          {proposals.map((p, idx) => 
            (<ProposalInput
              key={idx} 
              index={idx} 
              value={p}
              proposalUpdatedListener={updateProposalListener} 
              proposalRemovedListener={removeProposalListener}         
            />)
          )}
        </div>
        <button 
          className={styles.plusProposalBtn} 
          disabled={proposals.length >= 10}
          onClick={addProposalListener}
        >
          + Proposal
        </button>
        <hr/>
        <button className={styles.sendBtn}>Send</button>
      </form>
    </div>
  );
}

export default VotingSessionForm;