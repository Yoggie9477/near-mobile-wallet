import { useControlled } from "@peersyst/react-hooks";
import { NumericInputProps } from "module/common/component/input/NumericInput/NumericInput";
import BaseAssetAmountInput from "../BaseAssetAmountInput/BaseAssetAmountInput";
import { Token } from "near-peersyst-sdk";
import { useFTAmountInputValidator } from "./hook/useFTAmountInputValidator";

export interface TokenAmountInputProps extends Omit<NumericInputProps, "validators" | "suffix"> {
    ft: Token;
}

const TokenAmountInput = ({ ft, disabled, defaultValue = "", value, onChange, error: errorProp, ...rest }: TokenAmountInputProps) => {
    const [amount, setAmount] = useControlled(defaultValue, value, onChange);
    const {
        metadata: { symbol },
    } = ft;
    const { error } = useFTAmountInputValidator({ amount, ft });
    return <BaseAssetAmountInput error={errorProp || error} value={amount} onChange={setAmount} units={symbol} {...rest} />;
};

export default TokenAmountInput;
