import { useMutation } from "react-query";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import Queries from "../../../query/queries";
import { parseTokenAmount } from "near-peersyst-sdk";
import { useInvalidateServiceInstanceQueries } from "module/wallet/query/useInvalidateServiceInstanceQueries";
import { GET_ACTION_REFETCH_DELAY } from "./useGetActions";

export interface UseSendTokensParams {
    contractId: string;
    amount: string;
    decimals: string;
    receiverId: string;
    memo?: string;
}

const useSendFT = (senderIndex: number) => {
    const { serviceInstance } = useServiceInstance(senderIndex);
    const invalidateQueries = useInvalidateServiceInstanceQueries(senderIndex);

    return useMutation(
        async ({ contractId, amount, receiverId, memo, decimals }: UseSendTokensParams) => {
            const finalAmount = parseTokenAmount(amount, decimals);
            await serviceInstance.sendFungibleTokens(contractId, finalAmount, receiverId, memo);
        },
        {
            onSuccess: () => {
                invalidateQueries([Queries.GET_BALANCE, Queries.GET_FTS]);
                setTimeout(() => {
                    invalidateQueries([Queries.ACTIONS]);
                }, GET_ACTION_REFETCH_DELAY);
            },
        },
    );
};

export default useSendFT;
