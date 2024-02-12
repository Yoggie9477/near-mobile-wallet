import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function DatabaseIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "DatabaseIcon" }}
        >
            <Path d="M5 6C5 6.02553 5.01022 6.16958 5.29209 6.41948C5.57279 6.66834 6.03602 6.93815 6.69427 7.18499C8.0034 7.67591 9.87903 8 12 8C14.121 8 15.9966 7.67591 17.3057 7.18499C17.964 6.93815 18.4272 6.66834 18.7079 6.41948C18.9898 6.16958 19 6.02553 19 6C19 5.97447 18.9898 5.83042 18.7079 5.58052C18.4272 5.33166 17.964 5.06185 17.3057 4.81501C15.9966 4.32409 14.121 4 12 4C9.87903 4 8.0034 4.32409 6.69427 4.81501C6.03602 5.06185 5.57279 5.33166 5.29209 5.58052C5.01022 5.83042 5 5.97447 5 6ZM3 6C3 5.19711 3.43749 4.55194 3.96527 4.08401C4.49422 3.61504 5.20256 3.2384 5.99202 2.94235C7.57833 2.34749 9.70269 2 12 2C14.2973 2 16.4217 2.34749 18.008 2.94235C18.7974 3.2384 19.5058 3.61504 20.0347 4.08401C20.5625 4.55194 21 5.19711 21 6V10V14V18C21 18.8029 20.5625 19.4481 20.0347 19.916C19.5058 20.385 18.7974 20.7616 18.008 21.0576C16.4217 21.6525 14.2973 22 12 22C9.70269 22 7.57833 21.6525 5.99202 21.0576C5.20256 20.7616 4.49422 20.385 3.96527 19.916C3.43749 19.4481 3 18.8029 3 18V14V10V6ZM5 10C5 10.0255 5.01022 10.1696 5.29209 10.4195C5.57279 10.6683 6.03602 10.9381 6.69427 11.185C8.0034 11.6759 9.87903 12 12 12C14.121 12 15.9966 11.6759 17.3057 11.185C17.964 10.9381 18.4272 10.6683 18.7079 10.4195C18.9898 10.1696 19 10.0255 19 10V8.61619C18.6909 8.77981 18.3574 8.92662 18.008 9.05765C16.4217 9.65251 14.2973 10 12 10C9.70269 10 7.57833 9.65251 5.99202 9.05765C5.64262 8.92662 5.3091 8.77981 5 8.61619V10ZM5 12.6162V14C5 14.0255 5.01022 14.1696 5.29209 14.4195C5.57279 14.6683 6.03602 14.9381 6.69427 15.185C8.0034 15.6759 9.87903 16 12 16C14.121 16 15.9966 15.6759 17.3057 15.185C17.964 14.9381 18.4272 14.6683 18.7079 14.4195C18.9898 14.1696 19 14.0255 19 14V12.6162C18.6909 12.7798 18.3574 12.9266 18.008 13.0576C16.4217 13.6525 14.2973 14 12 14C9.70269 14 7.57833 13.6525 5.99202 13.0576C5.64262 12.9266 5.3091 12.7798 5 12.6162ZM5 16.6162V18C5 18.0255 5.01022 18.1696 5.29209 18.4195C5.57279 18.6683 6.03602 18.9381 6.69427 19.185C8.0034 19.6759 9.87903 20 12 20C14.121 20 15.9966 19.6759 17.3057 19.185C17.964 18.9381 18.4272 18.6683 18.7079 18.4195C18.9898 18.1696 19 18.0255 19 18V16.6162C18.6909 16.7798 18.3574 16.9266 18.008 17.0576C16.4217 17.6525 14.2973 18 12 18C9.70269 18 7.57833 17.6525 5.99202 17.0576C5.64262 16.9266 5.3091 16.7798 5 16.6162Z" />
        </SvgIcon>
    );
}
