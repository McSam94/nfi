import { Chain, chain } from "wagmi";

export const rinkeby: Chain = {
  id: 4,
  name: "Rinkeby",
  network: "rinkeby",
  nativeCurrency: { name: "Rinkeby Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: "https://eth-rinkeby.alchemyapi.io/v2",
    default:
      "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    infura: "https://rinkeby.infura.io/v3",
    public:
      "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://rinkeby.etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://rinkeby.etherscan.io",
    },
  },
  ens: {
    address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  },
  multicall: {
    address: "0xca11bde05977b3631167028862be2a173976ca11",
    blockCreated: 10299530,
  },
  testnet: true,
};

const ropsten: Chain = {
  id: 3,
  name: "Ropsten",
  network: "ropsten",
  nativeCurrency: { name: "Ropsten Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: "https://eth-ropsten.alchemyapi.io/v2",
    default:
      "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    infura: "https://ropsten.infura.io/v3",
    public:
      "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://ropsten.etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://ropsten.etherscan.io",
    },
  },
  ens: {
    address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  },
  multicall: {
    address: "0xca11bde05977b3631167028862be2a173976ca11",
    blockCreated: 12063863,
  },
  testnet: true,
};

export const SUPPORTED_CHAINS = [chain.mainnet, rinkeby, ropsten];
