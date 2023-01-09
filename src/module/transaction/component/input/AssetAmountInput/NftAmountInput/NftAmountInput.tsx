import TextField from "module/common/component/input/TextField/TextField";
import { TextFieldProps } from "module/common/component/input/TextField/TextField.types";
import { useTranslate } from "module/common/hook/useTranslate";

export type NftAmountInputProps = Omit<TextFieldProps, "keyboardType" | "onChange" | "value">;

const NftAmountInput = (props: NftAmountInputProps) => {
    const translate = useTranslate();
    return <TextField hint={translate("send_only_one_nft")} {...props} value="1" readonly />;
};

export default NftAmountInput;
