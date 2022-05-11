import { QueryResult } from "query-utils";
import { FullTransaction } from "module/common/service/CkbSdkService.types";
import useSelectedWalletIndex from "module/wallet/hook/useSelectedWalletIndex";
import { useQuery } from "react-query";
import useWallet from "module/wallet/hook/useWallet";
import walletState, { serviceInstancesMap } from "module/wallet/state/WalletState";
import { TransactionStatus } from "module/sdk";
import { useSetRecoilState } from "recoil";
import { WalletStorage } from "module/wallet/WalletStorage";
import { useRef } from "react";

const useUncommittedTransactions = (index?: number): QueryResult<FullTransaction[]> => {
    const selectedWallet = useSelectedWalletIndex();
    const usedIndex = index ?? selectedWallet;
    const { uncommittedTransactionHashes } = useWallet(usedIndex);
    const setWalletState = useSetRecoilState(walletState);
    const rejectedHashes: string[] = useRef([]).current;

    return useQuery(
        ["uncommittedTransactions", index],
        async () => {
            if (!uncommittedTransactionHashes) return [];

            const serviceInstance = serviceInstancesMap.get(usedIndex)!;

            const uncommittedTransactions: FullTransaction[] = [];
            for (const hash of uncommittedTransactionHashes) {
                const tx = await serviceInstance.getTransaction(hash);
                if (tx.status !== TransactionStatus.COMMITTED) {
                    uncommittedTransactions.push(await serviceInstance.getTransaction(hash));
                    // If rejected keep it in the list but remove it from storage in order to show it just in the current session
                    if (tx.status === TransactionStatus.REJECTED && !rejectedHashes.find((h) => h === hash)) {
                        await WalletStorage.removeUncommittedTransactionHash(usedIndex, hash);
                        rejectedHashes.push(hash);
                    }
                    // If committed remove it and sync in order to refresh data and refetch useGetTransactiions
                } else {
                    setWalletState((state) => ({
                        ...state,
                        wallets: state.wallets.map((w) =>
                            w.index === usedIndex
                                ? { ...w, uncommittedTransactionHashes: w.uncommittedTransactionHashes!.filter((uTxH) => uTxH !== hash) }
                                : w,
                        ),
                    }));
                    await WalletStorage.removeUncommittedTransactionHash(usedIndex, hash);
                    await serviceInstance.synchronize();
                }
            }
            return uncommittedTransactions;
        },
        {
            refetchInterval: 15000,
        },
    );
};

export default useUncommittedTransactions;
