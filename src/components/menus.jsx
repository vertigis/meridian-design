import React from "react";
import MenuList from "@vertigis/react-ui/MenuList";
import IconButton from "@vertigis/react-ui/IconButton";
import Checkbox from "@vertigis/react-ui/Checkbox";
import List from "@vertigis/react-ui/List";
import ListItem from "@vertigis/react-ui/ListItem";
import CommentIcon from "@material-ui/icons/Comment";
import MenuItem from "@vertigis/react-ui/MenuItem";
import teal from "@vertigis/react-ui/colors/teal";
import blue from "@vertigis/react-ui/colors/blue";
import ListItemText from "@vertigis/react-ui/ListItemText";
import ListItemSecondaryAction from "@vertigis/react-ui/ListItemSecondaryAction";
import {
    createStyles,
    createTheme,
    GcxThemeProvider,
    makeStyles,
} from "@vertigis/react-ui/styles";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: teal,
    },
});

const useStyles = makeStyles((theme) => ({
    demoContainer: {
        maxWidth: "400px",
    },
}));

export function ListControls() {
    const [primaryCheckboxChecked, setPrimaryCheckboxChecked] = React.useState([
        1,
    ]);
    const handlePrimaryCheckboxToggle = (value) => () => {
        const currentIndex = primaryCheckboxChecked.indexOf(value);
        const newChecked = [...primaryCheckboxChecked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setPrimaryCheckboxChecked(newChecked);
    };
    const classes = useStyles();
    return (
        <GcxThemeProvider theme={theme}>
            <div className={classes.demoContainer}>
                <List>
                    {[0, 1, 2, 3].map((value) => (
                        <ListItem
                            key={value}
                            role={undefined}
                            dense
                            button
                            onClick={handlePrimaryCheckboxToggle(value)}
                        >
                            <Checkbox
                                checked={
                                    primaryCheckboxChecked.indexOf(value) !== -1
                                }
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Comments">
                                    <CommentIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        </GcxThemeProvider>
    );
}
