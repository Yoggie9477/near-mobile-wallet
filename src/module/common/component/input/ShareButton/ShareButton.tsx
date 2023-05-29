import { useTranslate } from "module/common/hook/useTranslate";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";
import { ShareIcon } from "module/common/icons/ShareIcon";
import { SharePayload, useShare } from "@peersyst/react-native-components";

export interface ShareButtonProps extends Omit<ButtonProps, "children" | "onPress">, SharePayload {
    label?: string;
}

function ShareButton({ label, shareContent, options, ...rest }: ShareButtonProps) {
    const translate = useTranslate();
    const { share } = useShare();

    async function handlePress() {
        await share({ shareContent, options });
    }

    return (
        <Button {...rest} onPress={handlePress} leftIcon={<ShareIcon style={{ fontSize: 24 }} />}>
            {label || translate("share")}
        </Button>
    );
}

export default ShareButton;
