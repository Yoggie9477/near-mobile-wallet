import { HelpCircleIcon, SettingsIcon } from "icons";
import LinearLogo from "../../display/LinearBgLogo/LinearBgLogo";
import { HeaderNetworkChip, HeaderRoot, HeaderSettingsButton } from "./Header.styles";
import { Row } from "@peersyst/react-native-components";
import useNavigation from "module/common/hook/useNavigation";
import { MainScreens } from "../MainNavigatorGroup/MainScreens";
import useWalletGradient from "module/wallet/hook/useWalletGradient";
import NotificationIcon from "../../display/NotificationIcon/NotificationIcon";

const Header = (): JSX.Element => {
    const navigation = useNavigation();
    const [startColor, endColor] = useWalletGradient();

    return (
        <HeaderRoot>
            <Row alignItems="center" justifyContent="center" flex={1}>
                <HeaderNetworkChip />
                <LinearLogo startColor={startColor} endColor={endColor} />
                <HeaderSettingsButton right={40} onPress={() => navigation.navigate(MainScreens.FAQS)}>
                    <HelpCircleIcon />
                </HeaderSettingsButton>
                <HeaderSettingsButton onPress={() => navigation.navigate(MainScreens.SETTINGS)}>
                    <NotificationIcon icon={<SettingsIcon />} />
                </HeaderSettingsButton>
            </Row>
        </HeaderRoot>
    );
};

export default Header;
