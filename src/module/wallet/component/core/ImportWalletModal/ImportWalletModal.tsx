import { createModal, ExposedBackdropProps, TabPanel, Tabs } from "react-native-components";
import { translate } from "locale";
import SetWalletNameScreen from "module/wallet/screen/SetWalletNameScreen";
import { useState } from "react";
import AddWalletModal from "module/wallet/component/core/AddWalletModal/AddWalletModal";
import EnterWalletMnemonicScreen from "module/wallet/screen/EnterWalletMnemonicScreen";

const ImportWalletModal = createModal((props: ExposedBackdropProps) => {
    const [index, setIndex] = useState(0);

    return (
        <AddWalletModal title={translate("import_wallet")} onBack={index ? () => setIndex((i) => i - 1) : undefined} {...props}>
            {(handleWalletCreation) => (
                <Tabs index={index} onIndexChange={setIndex}>
                    <TabPanel index={0}>
                        <SetWalletNameScreen onSubmit={() => setIndex(1)} submitText={translate("next")} />
                    </TabPanel>
                    <TabPanel index={1}>
                        <EnterWalletMnemonicScreen onSubmit={handleWalletCreation} submitText={translate("import_wallet")} />
                    </TabPanel>
                </Tabs>
            )}
        </AddWalletModal>
    );
});

export default ImportWalletModal;
