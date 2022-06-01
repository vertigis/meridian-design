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

export function ButtonStyles() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <Button focusRipple={false}>Default</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
            </div>
        </GcxThemeProvider>
    );
}
export function DisabledStates() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <Button disabled>Disabled</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="text" disabled>
                    Disabled
                </Button>
            </div>
        </GcxThemeProvider>
    );
}

export function ButtonColors() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <Button focusRipple={false}>Default</Button>
                <Button color="primary">Primary Accent</Button>
                <Button color="secondary">Secondary Accent</Button>
                <br />
                <Button variant="outlined">Outlined</Button>
                <Button variant="outlined" color="primary">
                    Outlined Primary Accent
                </Button>
                <Button variant="outlined" color="secondary">
                    Outlined Secondary Accent
                </Button>
                <br></br>
                <Button variant="text">Default Text</Button>
                <Button variant="text" color="primary">
                    Primary Accent Text
                </Button>
                <Button variant="text" color="secondary">
                    Secondary Accent Text
                </Button>
            </div>
        </GcxThemeProvider>
    );
}

export function ButtonSizes() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <Button size="large">Large</Button>
                <Button focusRipple={false}>Default</Button>
                <Button size="small">Small</Button>
                <br></br>
                <Button variant="outlined" size="large">
                    Large
                </Button>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" size="small">
                    Small
                </Button>
                <br></br>

                <Button variant="text" size="large">
                    Large
                </Button>
                <Button variant="text">Default</Button>
                <Button variant="text" size="small">
                    Small
                </Button>
            </div>
        </GcxThemeProvider>
    );
}

export function IconButtons() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <IconButton>
                    <HelpIcon />
                </IconButton>
                <IconButton>
                    <AlarmIcon />
                </IconButton>
                <IconButton>
                    <EditLogIcon />
                </IconButton>
            </div>
        </GcxThemeProvider>
    );
}

export function GroupedButtons() {
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.buttonContainer}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <ButtonGroup
                                    size="small"
                                    aria-label="small outlined button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    color="primary"
                                    aria-label="outlined primary button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    color="secondary"
                                    size="large"
                                    aria-label="large outlined secondary button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <ButtonGroup
                                    variant="outlined"
                                    size="small"
                                    aria-label="small contained button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    variant="outlined"
                                    color="primary"
                                    aria-label="full-width contained primary button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    aria-label="large contained secondary button group"
                                >
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <ButtonGroup
                            fullWidth
                            aria-label="full width outlined button group"
                        >
                            <Button>Full</Button>
                            <Button>width</Button>
                            <Button>Button Group</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        </GcxThemeProvider>
    );
}
