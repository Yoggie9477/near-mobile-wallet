import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function SuccessIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "SuccessIcon" }}
        >
            <Path d="M12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM17.5972 8.10311C18.0926 8.54341 18.1372 9.3019 17.6969 9.79724L11.2969 16.9972C11.0692 17.2534 10.7428 17.4 10.4 17.4C10.0572 17.4 9.73083 17.2534 9.50311 16.9972L6.30311 13.3972C5.86281 12.9019 5.90742 12.1434 6.40276 11.7031C6.8981 11.2628 7.65659 11.3074 8.09689 11.8028L10.4 14.3938L15.9031 8.20276C16.3434 7.70742 17.1019 7.66281 17.5972 8.10311Z" />
        </SvgIcon>
    );
}
