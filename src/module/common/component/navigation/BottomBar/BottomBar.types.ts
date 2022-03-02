import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ReactElement, ReactNode } from "react";
import { IconProps, TypographyProps } from "react-native-components";
import { MainStackParamsList } from "stack-navigator";

export interface BottomBarLinkProps {
    link: keyof MainStackParamsList;
    isActive: boolean;
    children?: ReactNode;
}

export interface BottomBarItemProps extends Pick<BottomTabBarProps, "state"> {
    Icon: ReactElement;
    label: string;
}

export interface LinkIconProps extends IconProps {
    isActive?: boolean;
}

export interface LinkTextProps extends TypographyProps {
    isActive?: boolean;
}

export interface LogoLinkProps {
    isActive?: boolean;
}
