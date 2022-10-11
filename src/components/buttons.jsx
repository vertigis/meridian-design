import React from "react";
import {
    createStyles,
    createTheme,
    GcxThemeProvider,
    makeStyles,
} from "@vertigis/react-ui/styles";
import teal from "@vertigis/react-ui/colors/teal";
import blue from "@vertigis/react-ui/colors/blue";
import Button from "@vertigis/react-ui/Button";
import ButtonGroup from "@vertigis/react-ui/ButtonGroup";
import Grid from "@vertigis/react-ui/Grid";
import HelpIcon from "@vertigis/react-ui/icons/Help";
import AlarmIcon from "@vertigis/react-ui/icons/Alarm";
import EditLogIcon from "@vertigis/react-ui/icons/EditLog";
import IconButton from "@vertigis/react-ui/IconButton";
import SaveIcon from "@vertigis/react-ui/icons/Save";
import PreviousIcon from "@vertigis/react-ui/icons/ChevronLeft";
import NextIcon from "@vertigis/react-ui/icons/ChevronRight";
import TrashIcon from "@vertigis/react-ui/icons/Trash";
import { ReactElement, useContext } from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        buttonContainer: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
    })
);

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: teal,
    },
});

export function ButtonEmphasis() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
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
            </div>
        </GcxThemeProvider>
    );
}
export function ButtonPairs() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
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
            </div>
        </GcxThemeProvider>
    );
}

export function ButtonLabelsDo() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
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
            </div>
        </GcxThemeProvider>
    );
}
export function ButtonLabelsDont() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
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
            </div>
        </GcxThemeProvider>
    );
}

export function ButtonOptions() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
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
            </div>
        </GcxThemeProvider>
    );
}
