import {
  AdaCoin,
  AlgoCoin,
  AptCoin,
  ArbethERC20Token,
  AvaxERC20Token,
  BeraERC20Token,
  BscCoin,
  CeloCoin,
  EosCoin,
  Erc1155Coin,
  Erc20Coin,
  Erc721Coin,
  HederaToken,
  OpethERC20Token,
  PolygonERC20Token,
  Sip10Token,
  SolCoin,
  StellarCoin,
  SuiCoin,
  TronErc20Coin,
  XrpCoin,
  ZkethERC20Token,
} from './account';
import { CoinFamily, CoinKind } from './base';
import { coins } from './coins';
import { Networks, NetworkType } from './networks';
import { OfcCoin } from './ofc';

export interface BaseTokenConfig {
  coin: string;
  decimalPlaces: number;
  name: string;
  type: string;
}

export interface BaseNetworkConfig extends BaseTokenConfig {
  network: string;
}

export interface BaseContractAddressConfig extends BaseNetworkConfig {
  tokenContractAddress: string;
}

export type AvaxcTokenConfig = BaseContractAddressConfig;
export type CeloTokenConfig = BaseContractAddressConfig;
export type EthLikeTokenConfig = BaseContractAddressConfig;
export type EosTokenConfig = BaseContractAddressConfig & {
  contractName: string;
  contractAddress: string;
};
export type Erc20TokenConfig = BaseContractAddressConfig;
export type TrxTokenConfig = BaseContractAddressConfig;
export type StellarTokenConfig = BaseNetworkConfig;

export type SolTokenConfig = BaseNetworkConfig & {
  tokenAddress: string;
  contractAddress: string;
};

export type AdaTokenConfig = BaseNetworkConfig & {
  policyId: string;
  assetName: string;
};

export type AlgoTokenConfig = BaseNetworkConfig & {
  alias?: string;
};

export type OfcTokenConfig = BaseTokenConfig & {
  backingCoin: string;
  isFiat: boolean;
};

export type HbarTokenConfig = BaseNetworkConfig & {
  nodeAccountId: string;
  tokenId: string;
  contractAddress: string;
};

export type XrpTokenConfig = BaseNetworkConfig & {
  issuerAddress: string;
  currencyCode: string;
  domain?: string;
  contractAddress: string;
};

export type SuiTokenConfig = BaseNetworkConfig & {
  packageId: string;
  module: string;
  symbol: string;
  contractAddress: string;
};

export type AptTokenConfig = BaseNetworkConfig & {
  assetId: string;
};

export type Sip10TokenConfig = BaseNetworkConfig & {
  assetId: string;
};

export interface Tokens {
  bitcoin: {
    eth: {
      tokens: Erc20TokenConfig[];
    };
    xlm: {
      tokens: StellarTokenConfig[];
    };
    algo: {
      tokens: AlgoTokenConfig[];
    };
    ofc: {
      tokens: OfcTokenConfig[];
    };
    celo: {
      tokens: CeloTokenConfig[];
    };
    eos: {
      tokens: EosTokenConfig[];
    };
    avaxc: {
      tokens: AvaxcTokenConfig[];
    };
    polygon: {
      tokens: EthLikeTokenConfig[];
    };
    bsc: {
      tokens: EthLikeTokenConfig[];
    };
    arbeth: {
      tokens: EthLikeTokenConfig[];
    };
    opeth: {
      tokens: EthLikeTokenConfig[];
    };
    sol: {
      tokens: SolTokenConfig[];
    };
    hbar: {
      tokens: HbarTokenConfig[];
    };
    ada: {
      tokens: AdaTokenConfig[];
    };
    trx: {
      tokens: TrxTokenConfig[];
    };
    xrp: {
      tokens: XrpTokenConfig[];
    };
    zketh: {
      tokens: EthLikeTokenConfig[];
    };
    sui: {
      tokens: SuiTokenConfig[];
    };
    bera: {
      tokens: EthLikeTokenConfig[];
    };
    apt: {
      tokens: AptTokenConfig[];
    };
    stx: {
      tokens: Sip10TokenConfig[];
    };
  };
  testnet: {
    eth: {
      tokens: Erc20TokenConfig[];
    };
    xlm: {
      tokens: StellarTokenConfig[];
    };
    algo: {
      tokens: AlgoTokenConfig[];
    };
    ofc: {
      tokens: OfcTokenConfig[];
    };
    celo: {
      tokens: CeloTokenConfig[];
    };
    bsc: {
      tokens: EthLikeTokenConfig[];
    };
    eos: {
      tokens: EosTokenConfig[];
    };
    avaxc: {
      tokens: AvaxcTokenConfig[];
    };
    polygon: {
      tokens: EthLikeTokenConfig[];
    };
    arbeth: {
      tokens: EthLikeTokenConfig[];
    };
    opeth: {
      tokens: EthLikeTokenConfig[];
    };
    sol: {
      tokens: SolTokenConfig[];
    };
    hbar: {
      tokens: HbarTokenConfig[];
    };
    ada: {
      tokens: AdaTokenConfig[];
    };
    trx: {
      tokens: TrxTokenConfig[];
    };
    xrp: {
      tokens: XrpTokenConfig[];
    };
    zketh: {
      tokens: EthLikeTokenConfig[];
    };
    sui: {
      tokens: SuiTokenConfig[];
    };
    bera: {
      tokens: EthLikeTokenConfig[];
    };
    apt: {
      tokens: AptTokenConfig[];
    };
    stx: {
      tokens: Sip10TokenConfig[];
    };
  };
}

// Get the list of ERC-20 tokens from statics and format it properly
const formattedErc20Tokens = coins.reduce((acc: Erc20TokenConfig[], coin) => {
  if (coin instanceof Erc20Coin) {
    let baseCoin: string;
    switch (coin.network) {
      case Networks.main.ethereum:
        baseCoin = 'eth';
        break;
      case Networks.test.kovan:
        baseCoin = 'teth';
        break;
      case Networks.test.goerli:
        baseCoin = 'gteth';
        break;
      case Networks.test.holesky:
        baseCoin = 'hteth';
        break;
      default:
        throw new Error(`Erc20 token ${coin.name} has an unsupported network`);
    }

    acc.push({
      type: coin.name,
      coin: baseCoin,
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

export const ethGasConfigs = {
  minimumGasPrice: 1000000000, // minimum gas price a user can provide (1 Gwei)
  defaultGasPrice: 20000000000, // default gas price if estimation fails (20 Gwei)
  maximumGasPrice: 2500000000000, // minimum gas price a user can provide (2500 Gwei)
  defaultGasLimit: 500000, // Default gas limit we set for contract send
  defaultGasLimitTokenSend: 1000000, // Default gas limit we set for token send
  minimumGasLimit: 30000, // minimum gas limit a user can set for a send
  maximumGasLimit: 20000000, // Customers cannot set gas limits beyond this amount
  newEthLikeCoinsMinGasLimit: 400000, // minimum gas limit a user can set for a send for eth like coins like arbitrum, optimism, etc
  opethGasL1Fees: 1000000000000000, // Buffer for opeth L1 gas fees
};
// Get the list of Stellar tokens from statics and format it properly
const formattedStellarTokens = coins.reduce((acc: StellarTokenConfig[], coin) => {
  if (coin instanceof StellarCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'xlm' : 'txlm',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

// Get the list of OFC tokens from statics and format it properly
const formattedOfcCoins = coins.reduce((acc: OfcTokenConfig[], coin) => {
  if (coin instanceof OfcCoin) {
    acc.push({
      type: coin.name,
      coin: 'ofc',
      backingCoin: coin.asset,
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
      isFiat: coin.kind === CoinKind.FIAT,
    });
  }
  return acc;
}, []);

const formattedCeloTokens = coins.reduce((acc: CeloTokenConfig[], coin) => {
  if (coin instanceof CeloCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'celo' : 'tcelo',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedBscTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (coin instanceof BscCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'bsc' : 'tbsc',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedEosTokens = coins.reduce((acc: EosTokenConfig[], coin) => {
  if (coin instanceof EosCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'eos' : 'teos',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractName.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
      contractName: coin.contractName,
      contractAddress: coin.contractAddress,
    });
  }
  return acc;
}, []);

const formattedAvaxCTokens = coins.reduce((acc: AvaxcTokenConfig[], coin) => {
  if (coin instanceof AvaxERC20Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'avaxc' : 'tavaxc',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedPolygonTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (
    coin instanceof PolygonERC20Token ||
    ((coin instanceof Erc721Coin || coin instanceof Erc1155Coin) && coin.family === CoinFamily.POLYGON)
  ) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'polygon' : 'tpolygon',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedArbethTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (coin instanceof ArbethERC20Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'arbeth' : 'tarbeth',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedOpethTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (coin instanceof OpethERC20Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'opeth' : 'topeth',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedZkethTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (coin instanceof ZkethERC20Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'zketh' : 'tzketh',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedBeraTokens = coins.reduce((acc: EthLikeTokenConfig[], coin) => {
  if (coin instanceof BeraERC20Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'bera' : 'tbera',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedSolTokens = coins.reduce((acc: SolTokenConfig[], coin) => {
  if (coin instanceof SolCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'sol' : 'tsol',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenAddress: coin.tokenAddress,
      decimalPlaces: coin.decimalPlaces,
      contractAddress: coin.contractAddress,
    });
  }
  return acc;
}, []);

export const formattedAlgoTokens = coins.reduce((acc: AlgoTokenConfig[], coin) => {
  if (coin instanceof AlgoCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'algo' : 'talgo',
      alias: coin.alias,
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedHbarTokens = coins.reduce((acc: HbarTokenConfig[], coin) => {
  if (coin instanceof HederaToken) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'hbar' : 'thbar',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
      nodeAccountId: coin.nodeAccountId,
      tokenId: coin.tokenId,
      contractAddress: coin.contractAddress,
    });
  }
  return acc;
}, []);

const formattedAdaTokens = coins.reduce((acc: AdaTokenConfig[], coin) => {
  if (coin instanceof AdaCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'ada' : 'tada',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      policyId: coin.policyId,
      assetName: coin.assetName,
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedTrxTokens = coins.reduce((acc: TrxTokenConfig[], coin) => {
  if (coin instanceof TronErc20Coin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'trx' : 'ttrx',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      tokenContractAddress: coin.contractAddress.toString().toLowerCase(),
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedXrpTokens = coins.reduce((acc: XrpTokenConfig[], coin) => {
  if (coin instanceof XrpCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'xrp' : 'txrp',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
      issuerAddress: coin.issuerAddress,
      currencyCode: coin.currencyCode,
      domain: coin.domain,
      contractAddress: coin.contractAddress,
    });
  }
  return acc;
}, []);

const formattedSuiTokens = coins.reduce((acc: SuiTokenConfig[], coin) => {
  if (coin instanceof SuiCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'sui' : 'tsui',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      decimalPlaces: coin.decimalPlaces,
      packageId: coin.packageId,
      module: coin.module,
      symbol: coin.symbol,
      contractAddress: coin.contractAddress,
    });
  }
  return acc;
}, []);

const formattedAptTokens = coins.reduce((acc: AptTokenConfig[], coin) => {
  if (coin instanceof AptCoin) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'apt' : 'tapt',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      assetId: coin.assetId,
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

const formattedSip10Tokens = coins.reduce((acc: Sip10TokenConfig[], coin) => {
  if (coin instanceof Sip10Token) {
    acc.push({
      type: coin.name,
      coin: coin.network.type === NetworkType.MAINNET ? 'stx' : 'tstx',
      network: coin.network.type === NetworkType.MAINNET ? 'Mainnet' : 'Testnet',
      name: coin.fullName,
      assetId: coin.assetId,
      decimalPlaces: coin.decimalPlaces,
    });
  }
  return acc;
}, []);

export const tokens: Tokens = {
  // network name for production environments
  bitcoin: {
    eth: {
      tokens: formattedErc20Tokens.filter((token) => token.network === 'Mainnet'),
    },
    xlm: {
      tokens: formattedStellarTokens.filter((token) => token.network === 'Mainnet'),
    },
    algo: {
      tokens: formattedAlgoTokens.filter((token) => token.network === 'Mainnet'),
    },
    ofc: {
      tokens: formattedOfcCoins.filter((token) => coins.get(token.type).network.type === NetworkType.MAINNET),
    },
    celo: {
      tokens: formattedCeloTokens.filter((token) => token.network === 'Mainnet'),
    },
    bsc: {
      tokens: formattedBscTokens.filter((token) => token.network === 'Mainnet'),
    },
    eos: {
      tokens: formattedEosTokens.filter((token) => token.network === 'Mainnet'),
    },
    avaxc: {
      tokens: formattedAvaxCTokens.filter((token) => token.network === 'Mainnet'),
    },
    polygon: {
      tokens: formattedPolygonTokens.filter((token) => token.network === 'Mainnet'),
    },
    arbeth: {
      tokens: formattedArbethTokens.filter((token) => token.network === 'Mainnet'),
    },
    opeth: {
      tokens: formattedOpethTokens.filter((token) => token.network === 'Mainnet'),
    },
    zketh: {
      tokens: formattedZkethTokens.filter((token) => token.network === 'Mainnet'),
    },
    sol: {
      tokens: formattedSolTokens.filter((token) => token.network === 'Mainnet'),
    },
    hbar: {
      tokens: formattedHbarTokens.filter((token) => token.network === 'Mainnet'),
    },
    ada: {
      tokens: formattedAdaTokens.filter((token) => token.network === 'Mainnet'),
    },
    trx: {
      tokens: formattedTrxTokens.filter((token) => token.network === 'Mainnet'),
    },
    xrp: {
      tokens: formattedXrpTokens.filter((token) => token.network === 'Mainnet'),
    },
    sui: {
      tokens: formattedSuiTokens.filter((token) => token.network === 'Mainnet'),
    },
    bera: {
      tokens: formattedBeraTokens.filter((token) => token.network === 'Mainnet'),
    },
    apt: {
      tokens: formattedAptTokens.filter((token) => token.network === 'Mainnet'),
    },
    stx: {
      tokens: formattedSip10Tokens.filter((token) => token.network === 'Mainnet'),
    },
  },
  // network name for test environments
  testnet: {
    eth: {
      tokens: formattedErc20Tokens.filter((token) => token.network === 'Testnet'),
    },
    xlm: {
      tokens: formattedStellarTokens.filter((token) => token.network === 'Testnet'),
    },
    algo: {
      tokens: formattedAlgoTokens.filter((token) => token.network === 'Testnet'),
    },
    ofc: {
      tokens: formattedOfcCoins.filter((token) => coins.get(token.type).network.type === NetworkType.TESTNET),
    },
    celo: {
      tokens: formattedCeloTokens.filter((token) => token.network === 'Testnet'),
    },
    bsc: {
      tokens: formattedBscTokens.filter((token) => token.network === 'Testnet'),
    },
    eos: {
      tokens: formattedEosTokens.filter((token) => token.network === 'Testnet'),
    },
    avaxc: {
      tokens: formattedAvaxCTokens.filter((token) => token.network === 'Testnet'),
    },
    polygon: {
      tokens: formattedPolygonTokens.filter((token) => token.network === 'Testnet'),
    },
    arbeth: {
      tokens: formattedArbethTokens.filter((token) => token.network === 'Testnet'),
    },
    opeth: {
      tokens: formattedOpethTokens.filter((token) => token.network === 'Testnet'),
    },
    zketh: {
      tokens: formattedZkethTokens.filter((token) => token.network === 'Testnet'),
    },
    sol: {
      tokens: formattedSolTokens.filter((token) => token.network === 'Testnet'),
    },
    hbar: {
      tokens: formattedHbarTokens.filter((token) => token.network === 'Testnet'),
    },
    ada: {
      tokens: formattedAdaTokens.filter((token) => token.network === 'Testnet'),
    },
    trx: {
      tokens: formattedTrxTokens.filter((token) => token.network === 'Testnet'),
    },
    xrp: {
      tokens: formattedXrpTokens.filter((token) => token.network === 'Testnet'),
    },
    sui: {
      tokens: formattedSuiTokens.filter((token) => token.network === 'Testnet'),
    },
    bera: {
      tokens: formattedBeraTokens.filter((token) => token.network === 'Testnet'),
    },
    apt: {
      tokens: formattedAptTokens.filter((token) => token.network === 'Testnet'),
    },
    stx: {
      tokens: formattedSip10Tokens.filter((token) => token.network === 'Testnet'),
    },
  },
};

/**
 * Verify mainnet or testnet tokens
 * @param tokens
 */
const verifyTokens = function (tokens: BaseTokenConfig[]) {
  const verifiedTokens: Record<string, boolean> = {};
  tokens.forEach((token) => {
    if (verifiedTokens[token.type]) {
      throw new Error('token : ' + token.type + ' duplicated.');
    }
    verifiedTokens[token.type] = true;

    if (
      (token as BaseContractAddressConfig).tokenContractAddress &&
      (token as BaseContractAddressConfig).tokenContractAddress !==
        (token as BaseContractAddressConfig).tokenContractAddress.toLocaleLowerCase()
    ) {
      throw new Error(
        'token contract: ' + token.type + ' is not all lower case: ' + (token as BaseContractAddressConfig)
      );
    }
  });

  return verifiedTokens;
};

const mainnetErc20Tokens = verifyTokens(tokens.bitcoin.eth.tokens);
const mainnetStellarTokens = verifyTokens(tokens.bitcoin.xlm.tokens);
export const mainnetTokens = { ...mainnetErc20Tokens, ...mainnetStellarTokens };

const testnetErc20Tokens = verifyTokens(tokens.testnet.eth.tokens);
const testnetStellarTokens = verifyTokens(tokens.testnet.xlm.tokens);
export const testnetTokens = { ...testnetErc20Tokens, ...testnetStellarTokens };
