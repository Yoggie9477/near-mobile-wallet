import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { FullTransaction } from "near-peersyst-sdk";
import transactionTypeToBalanceAction from "./utils/transactionTypeToBalanceAction";

export interface ActionAmountProps extends Omit<BalanceProps, "action" | "balance"> {
    type: FullTransaction["type"];
    amount: BalanceProps["balance"];
}

const ActionAmount = ({ type, amount, ...rest }: ActionAmountProps): JSX.Element => {
    const action = transactionTypeToBalanceAction(type);
    const isPrimary = action === "add";
    return <Balance action={action} balance={amount} color={(p) => p[isPrimary ? "primary" : "text"]} {...rest} />;
};

export default ActionAmount;
