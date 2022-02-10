import { render } from "test-utils";
import { fireEvent } from "@testing-library/react-native";
import Chip from "module/common/component/display/Chip/Chip";
import { theme } from "module/common/style/theme";

describe("Chip tests", () => {
    test("Renders correctly", () => {
        const screen = render(<Chip label="Peersyst" />);
        const chip = screen.getByText("Peersyst");
        expect(chip).toBeDefined();
        /* Test light default variant */
        expect(chip.props.style[0].color).toEqual(theme.palette.darkFont);
    });
    test("Renders dark variant correctly", () => {
        const screen = render(<Chip label="Peersyst" variant="dark" />);
        const chip = screen.getByText("Peersyst");
        /* Test dark variant */
        expect(chip.props.style[0].color).toEqual(theme.palette.white);
    });
    test("Renders full correctly", () => {
        const screen = render(<Chip label="Peersyst" fullWidth />);
        const chipRoot = screen.getByTestId("chipRoot");
        /**
         * Style array:
         * 0 - Style prop
         * 1 - ChipRoot styles
         * 2 - FullWidth style
         */
        expect(chipRoot.props.style[1].alignSelf).not.toEqual("flex-start");
    });
    test("onPress is called", () => {
        const onPress = jest.fn();
        const screen = render(<Chip onPress={onPress} label="Press me" />);
        const chip = screen.getByText("Press me");
        fireEvent.press(chip);
        expect(onPress).toHaveBeenCalled();
    });
});
