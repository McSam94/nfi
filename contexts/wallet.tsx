import * as React from "react";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { SUPPORTED_CHAINS } from "@constants/index";

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { provider } = configureChains(SUPPORTED_CHAINS, [
    walletConnectProvider({ projectId }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      appName: "NFI",
      chains: SUPPORTED_CHAINS,
    }),
    logger: {
      warn:
        process.env.NODE_ENV === "development"
          ? (message) => console.warn(message)
          : null,
    },
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, SUPPORTED_CHAINS);

  return (
    <>
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WalletProvider;
