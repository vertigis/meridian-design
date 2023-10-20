import * as icons from "@vertigis/react-ui/icons";
import Typography from "@vertigis/react-ui/Typography";
import * as React from "react";
import "./icons.css";

const icons_page = () => {
    const keys = Object.keys(icons);
    return (
        <div className="icon_wrapper">
            <div className="icon_container">
                {keys.map((key) => {
                    const Icon = icons[key];
                    return (
                        <div className="icon" key={key} title={key}>
                            <Icon fontSize="large"></Icon>
                            <Typography
                                className="icon_label"
                                noWrap
                                align="center"
                            >
                                {key}
                            </Typography>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default icons_page;
