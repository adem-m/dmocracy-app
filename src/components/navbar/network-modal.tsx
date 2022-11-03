import { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";
import styles from "./network-modal.module.scss";

const CHAIN_ID = Number.parseInt(import.meta.env.VITE_CHAIN_ID);

interface NetworkModalProps {
  canBeDisplayed: boolean
}

function NetworkModal({ canBeDisplayed }: NetworkModalProps) {
  const { chain } = useNetwork();
  const [isDisplayed, setIsDisplayed] = useState(canBeDisplayed)
  const { isLoading, pendingChainId, switchNetwork } = useSwitchNetwork({ 
    chainId: CHAIN_ID, 
    throwForSwitchChainNotSupported: true 
  });

  useEffect(() => { 
    setIsDisplayed(_ => canBeDisplayed && chain?.id !== undefined && chain.id !== CHAIN_ID)
  }, [chain])

  useEffect(() => {
    if (isLoading || pendingChainId !== CHAIN_ID) {
      return;
    }
    setIsDisplayed(_ => false);
  }, [isLoading, pendingChainId])

  function handleSwitchNetwork(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    switchNetwork?.();
  }

  if (!isDisplayed) {
    return (<></>);
  }

  return (
    <div className={styles.networkModalContainer}>
      {isLoading && pendingChainId === CHAIN_ID
        ? <p>Switching Network...</p>
        : (
        <div className={styles.networkModal}>
          <h3>Connected to the wrong network !</h3>
          <button onClick={handleSwitchNetwork}>Switch to correct network</button>
        </div>
        )
      }
    </div>
  );
}

export default NetworkModal;