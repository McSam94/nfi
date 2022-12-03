import { FC } from "react";
import { Web3Button } from "@web3modal/react";

const Header: FC = () => {
  return (
    <div className="flex items-center px-4 py-8 justify-between shadow-lg">
      <div className="text-2xl text-black font-bold tracking-wide">NFI</div>
      <Web3Button />
    </div>
  );
};

export default Header;
