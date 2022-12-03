import DisplayCol from "@components/DisplayCol";
import { useAccount, useNetwork } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  return (
    <div className="flex flex-col space-y-10 justify-center items-center w-full h-full">
      {chain?.name ? <DisplayCol label="Network" value={chain.name} /> : null}
      {address ? <DisplayCol label="Address" value={address} /> : null}
      {!chain?.name && !address ? (
        <div className="text-xl text-black/50 font-bold">
          Wallet not connected!
        </div>
      ) : null}
    </div>
  );
}
