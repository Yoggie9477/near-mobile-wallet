import { Col, Form, useSetTab } from "@peersyst/react-native-components";
import Button from "module/common/component/input/Button/Button";
import stakeRecoilState from "module/staking/state/StakeState";
import { SendScreens } from "module/transaction/component/core/SendModal/SendModal";
import { useRecoilState } from "recoil";
import { useTranslate } from "module/common/hook/useTranslate";
import NEARAmountInput from "module/transaction/component/input/AssetAmountInput/NEARAmountInput/NEARAmountInput";
import useSelectedWallet from "module/wallet/hook/useSelectedWallet";
import useGetBalance from "module/wallet/query/useGetBalance";
import { useFormatBalance } from "module/wallet/component/display/Balance/hook/useFormatBalance";
import { useState } from "react";
import { config } from "config";

export interface SendForm {
    amount: string;
}

const SetAmountStakeScreen = () => {
    const translate = useTranslate();
    const [amount, setAmount] = useState("");
    const [, setStakeState] = useRecoilState(stakeRecoilState);
    const { index } = useSelectedWallet();
    const { data: { available } = { available: "0" } } = useGetBalance(index);
    const setTab = useSetTab();

    const handleSubmit = ({ amount }: SendForm) => {
        setStakeState((oldState) => ({ ...oldState, amount: amount }));
        setTab(SendScreens.AMOUNT_AND_MESSAGE);
    };

    const maxBalance = useFormatBalance(Number(available) - Number(config.estimatedFee), {
        numberFormatOptions: { maximumFractionDigits: 2 },
    });

    const changeToMaxBalance = () => {
        setStakeState((oldState) => ({ ...oldState, amount: maxBalance }));
        setAmount(String(maxBalance));
    };

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ height: "100%" }}>
                <Col flex={1}>
                    <Col flex={1}>
                        <NEARAmountInput
                            label={translate("enter_amount_want_to_stake")!}
                            hint={translate("available_balance", { amount: maxBalance, amount_price: 1 })!}
                            index={index}
                            name="amount"
                            suffix={
                                <Button variant="text" onPress={() => changeToMaxBalance()}>
                                    {translate("max")!}
                                </Button>
                            }
                            value={amount}
                            onChange={setAmount}
                            required
                        />
                    </Col>
                    <Col gap={8}>
                        <Button type="submit" fullWidth>
                            {translate("next")}
                        </Button>
                    </Col>
                </Col>
            </Form>
        </>
    );
};

export default SetAmountStakeScreen;
