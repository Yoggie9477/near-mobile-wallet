import "@peersyst/react-native-components";
import { Validator } from "@peersyst/react-native-components";
import { TFunction } from "react-i18next";

export type EnvConfig = "test" | "development" | "production" | "staging";

export interface RefetchIntervals {
    //In ms
    nfts: number;
    tokens: number;
    balance: number;
    transactions: number;
    fiatPrice: number;
    stakingBalance: number;
    news: number;
    validators: number;
}

declare module "@peersyst/react-native-components" {
    export interface ConfigTypes {
        TranslateFn: TFunction<"error">;
    }

    export interface Config {
        minimumTransactionAmount: number;
        indexerTestnetUrl: string;
        indexerMainnetUrl: string;
        mainnetExplorerLink: string;
        testnetExplorerLink: string;
        faucetUrl: string;
        maxNumberOfDecimals: number;
        enableChangeNetwork: boolean;
        tokenName: string;
        miniTokenUnit: string;
        mainnetNodeUrl: string;
        testnetNodeUrl: string;
        coingeckoTokenApiId: string;
        coingeckoUSDTApiId: string;
        minBalanceToCreateAccount: string;
        estimatedFee: string; //In NEAR
        enableIndexer: boolean;
        newsRSSUrl: string;
        defaultTwitterAccount: string;
        approveTxWaitTime: number; //In seconds
        testnetTokenPriceUrl: string;
        mainnetTokenPriceUrl: string;
        refetchIntervals: RefetchIntervals;
        indexerEstimatedDelay: number;
        nearMobileUrl: string;
    }

    export interface CreateConfig {
        minimumTransactionAmount: number;
        indexerTestnetUrl: string;
        indexerMainnetUrl: string;
        mainnetExplorerLink: string;
        testnetExplorerLink: string;
        faucetUrl: string;
        maxNumberOfDecimals: number;
        enableChangeNetwork: boolean;
        tokenName: string;
        miniTokenUnit: string;
        mainnetNodeUrl: string;
        testnetNodeUrl: string;
        coingeckoTokenApiId: string;
        coingeckoUSDTApiId: string;
        minBalanceToCreateAccount: string;
        estimatedFee: string;
        enableIndexer: boolean;
        newsRSSUrl: string;
        defaultTwitterAccount: string;
        approveTxWaitTime: number; //In seconds
        testnetTokenPriceUrl: string;
        mainnetTokenPriceUrl: string;
        refetchIntervals: RefetchIntervals;
        indexerEstimatedDelay: number;
        nearMobileUrl: string;
    }

    export interface ExtraValidators {
        address: Validator;
        privateKey: Validator;
    }

    export interface BlockchainLinksTypesOverrides {
        address: false;
        tx: false;
        mainnetAddress: true;
        mainnetTx: true;
        testnetAddress: true;
        testnetTx: true;
    }
    export interface BlockchainLinks {
        address: undefined;
        tx: undefined;
        mainnetAddress: string;
        mainnetTx: string;
        testnetAddress: string;
        testnetTx: string;
    }
}
