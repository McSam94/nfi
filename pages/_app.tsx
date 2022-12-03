import type { AppProps } from "next/app";
import WalletProvider from "@contexts/wallet";
import Layout from "@components/Layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletProvider>
  );
}
