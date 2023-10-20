import * as React from "react";
import {
    createTheme,
    GcxThemeProvider,
    styled,
} from "@vertigis/react-ui/styles";
import teal from "@vertigis/react-ui/colors/teal";
import blue from "@vertigis/react-ui/colors/blue";
import Button from "@vertigis/react-ui/Button";
import SaveIcon from "@vertigis/react-ui/icons/Save";
import PreviousIcon from "@vertigis/react-ui/icons/ChevronLeft";
import NextIcon from "@vertigis/react-ui/icons/ChevronRight";
import TrashIcon from "@vertigis/react-ui/icons/Trash";

const ButtonContainer = styled("div")(({ theme: { spacing } }) => ({
    "> *": {
        margin: `${spacing(1)} !important`,
    }
}));

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: teal,
    },
});

export function ButtonEmphasis() {
    return (
        <GcxThemeProvider theme={theme}>
            <ButtonContainer>
                <Button
                    className="button--low"
                    emphasis="low"
                    variant="text"
                    color="primary"
                >
                    Low Emphasis
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Medium Emphasis
                </Button>
                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                >
                    High Emphasis
                </Button>
            </ButtonContainer>
        </GcxThemeProvider>
    );
}
export function ButtonPairs() {
    return (
        <GcxThemeProvider theme={theme}>
            <ButtonContainer>
                <caption>Primary action is emphasized</caption>
                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                >
                    Save Feature
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Cancel
                </Button>
                <caption>Both buttons of equal importance</caption>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    OK
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Cancel
                </Button>
                <caption>Secondary action is less important</caption>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Save Feature
                </Button>
                <Button
                    className="button--low"
                    emphasis="medium"
                    variant="text"
                    color="primary"
                >
                    Cancel
                </Button>
            </ButtonContainer>
        </GcxThemeProvider>
    );
}

export function ButtonLabelsDo() {
    return (
        <GcxThemeProvider theme={theme}>
            <ButtonContainer>
                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                >
                    Save Feature
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Cancel
                </Button>
            </ButtonContainer>
        </GcxThemeProvider>
    );
}
export function ButtonLabelsDont() {
    return (
        <GcxThemeProvider theme={theme}>
            <ButtonContainer>
                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                >
                    SAVE FEATURE
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    CANCEL
                </Button>
            </ButtonContainer>
        </GcxThemeProvider>
    );
}

export function ButtonOptions() {
    return (
        <GcxThemeProvider theme={theme}>
            <ButtonContainer>
                <caption>Icons can add additional emphasis</caption>
                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon fontSize="small" />}
                >
                    Save Feature
                </Button>
                <Button
                    className="button--high gcx-button-icon-only"
                    emphasis="medium"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon fontSize="small" />}
                ></Button>
                <caption>
                    Icons can be place at the start or the end of a button
                </caption>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                    startIcon={<PreviousIcon fontSize="small" />}
                >
                    Previous
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                    endIcon={<NextIcon fontSize="small" />}
                >
                    Next
                </Button>
                <caption>
                    Use the "disabled" property to block the user from clicking
                </caption>

                <Button
                    className="button--high"
                    emphasis="high"
                    variant="contained"
                    color="primary"
                    disabled
                >
                    Save Feature
                </Button>
                <Button
                    className="button--med"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                >
                    Cancel
                </Button>
                <caption>Round style buttons</caption>
                <Button
                    className="button--med gcx-button-style-round gcx-button-icon-only"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                    startIcon={<TrashIcon fontSize="small" />}
                ></Button>
                <Button
                    className="button--med gcx-button-style-round"
                    emphasis="medium"
                    variant="outlined"
                    color="primary"
                    startIcon={<TrashIcon fontSize="small" />}
                >
                    Delete
                </Button>
            </ButtonContainer>
        </GcxThemeProvider>
    );
}
