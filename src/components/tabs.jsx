import * as React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {
    createTheme,
    GcxThemeProvider,
} from "@vertigis/react-ui/styles";
import teal from "@vertigis/react-ui/colors/teal";
import blue from "@vertigis/react-ui/colors/blue";
import Tab from "@vertigis/react-ui/Tab";
import Tabs from "@vertigis/react-ui/Tabs";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: teal,
    },
});

export function NormalTabs() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, value) => setTabValue(value);

    return (
        <GcxThemeProvider theme={theme}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                style={{ width: "50%" }}
            >
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
            </Tabs>
        </GcxThemeProvider>
    );
}

export function ScrollableTabs() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, value) => setTabValue(value);

    return (
        <GcxThemeProvider theme={theme}>
            <Tabs
                variant="scrollable"
                value={tabValue}
                onChange={handleTabChange}
                style={{ width: "50%" }}
            >
                <Tab label="Tab 1" title="Regular tab" />
                <Tab label="Tab 2" title="Regular tab" />
                <Tab label="Tab 3 disabled" title="Regular tab" disabled />
                <Tab label="Tab 4" title="Regular tab" />
                <Tab label="Tab 5" title="Regular tab" />
                <Tab label="Tab 6" title="Regular tab" />
                <Tab label="Tab 7" title="Regular tab" />
                <Tab label="Tab 8" title="Regular tab" />
                <Tab label="Tab 9" title="Regular tab" />
                <Tab label="Tab 10" title="Regular tab" />
                <Tab label="Tab 11" title="Regular tab" />
                <Tab label="Tab 12" title="Regular tab" />
                <Tab label="Tab 13" title="Regular tab" />
            </Tabs>
        </GcxThemeProvider>
    );
}

export function IconTabs() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, value) => setTabValue(value);

    return (
        <GcxThemeProvider theme={theme}>
            <Tabs
                variant="fullWidth"
                value={tabValue}
                onChange={handleTabChange}
            >
                <Tab icon={<PhoneIcon />} label="RECENT" />
                <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} label="NEARBY" />
            </Tabs>
        </GcxThemeProvider>
    );
}

export function IndicatorColorTabs() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, value) => setTabValue(value);

    return (
        <GcxThemeProvider theme={theme}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
            >
                <Tab label="Tab 1" title="Regular tab" />
                <Tab label="Tab 2" title="Regular tab" />
                <Tab label="Tab 3" title="Regular tab" />
            </Tabs>
        </GcxThemeProvider>
    );
}

export function VerticalTabs() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, value) => setTabValue(value);

    return (
        <GcxThemeProvider theme={theme}>
            <Tabs
                orientation="vertical"
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
            >
                <Tab label="Tab 1" title="Regular tab" />
                <Tab label="Tab 2" title="Regular tab" />
                <Tab label="Tab 3" title="Regular tab" />
                <Tab
                    label="Tab 4 with a really really long title"
                    title="Regular tab"
                />
            </Tabs>
        </GcxThemeProvider>
    );
}
