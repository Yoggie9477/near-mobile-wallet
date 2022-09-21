import { ReactNode } from "react";
import { PaletteMode } from "@peersyst/react-native-components";

export interface BasePageProps {
    appearance?: PaletteMode;
    header?: boolean;
    children?: ReactNode;
    showIcons?: boolean;
}

export interface BasePageContentProps {
    header: boolean;
}
