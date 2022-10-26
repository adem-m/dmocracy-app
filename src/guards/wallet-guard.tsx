import { FunctionComponent } from "react";
import { useAccount } from "wagmi";

interface PropType<T> {
  Component: FunctionComponent<T>;
  props: T;
}

function WalletGuard<T>({ Component, props }: PropType<T>) {
  const { address, isConnected } = useAccount();
  if (!isConnected || address === undefined) {
    return (<h2>Please connect your wallet !</h2>);
  }
  return (<Component {...props} wallet={address}/>);
}

export default WalletGuard;