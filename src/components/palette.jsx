import blue from "@vertigis/react-ui/colors/blue";
import burntOrange from "@vertigis/react-ui/colors/burntOrange";
import darkBurntOrange from "@vertigis/react-ui/colors/darkBurntOrange";
import darkRed from "@vertigis/react-ui/colors/darkRed";
import green from "@vertigis/react-ui/colors/green";
import grey from "@vertigis/react-ui/colors/grey";
import orange from "@vertigis/react-ui/colors/orange";
import purple from "@vertigis/react-ui/colors/purple";
import red from "@vertigis/react-ui/colors/red";
import teal from "@vertigis/react-ui/colors/teal";
import woodlandGreen from "@vertigis/react-ui/colors/woodlandGreen";
import * as React from "react";
import "./palette.css";

// Rendered straight from @vertigis/react-ui so the swatches can never drift
// from the values the products actually ship.
const families = [
    ["blue", blue],
    ["grey", grey],
    ["green", green],
    ["woodlandGreen", woodlandGreen],
    ["orange", orange],
    ["purple", purple],
    ["red", red],
    ["darkRed", darkRed],
    ["teal", teal],
    ["burntOrange", burntOrange],
    ["darkBurntOrange", darkBurntOrange],
];

// Relative luminance and contrast ratio, both per the WCAG definition.
function luminance(hex) {
    const c = hex.replace("#", "");
    const channel = (i) => {
        const v = parseInt(c.slice(i, i + 2), 16) / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
}

function contrast(a, b) {
    const [lighter, darker] = [luminance(a), luminance(b)].sort(
        (x, y) => y - x,
    );
    return (lighter + 0.05) / (darker + 0.05);
}

// Rather than switching on a fixed lightness threshold, take whichever label
// colour actually scores higher against the swatch. Every shade in the palette
// clears 4.5:1 this way, so the labels stay legible on all of them.
function prefersWhiteLabel(hex) {
    return contrast("#ffffff", hex) > contrast("#000000", hex);
}

function Swatch({ shade, hex }) {
    return (
        <div
            className={
                "colour-palette__swatch" +
                (prefersWhiteLabel(hex) ? " is-dark" : "")
            }
            style={{ background: hex }}
        >
            {shade} ({hex})
        </div>
    );
}

export function ColourPalette() {
    return (
        <div className="colour-palette">
            {families.map(([name, shades]) => {
                const entries = Object.entries(shades);
                return (
                    <div className="colour-palette__family" key={name}>
                        <div className="colour-palette__name">{name}</div>
                        <div className="colour-palette__ramp">
                            {entries
                                .filter(([shade]) => !shade.startsWith("A"))
                                .map(([shade, hex]) => (
                                    <Swatch
                                        key={shade}
                                        shade={shade}
                                        hex={hex}
                                    />
                                ))}
                        </div>
                        <div className="colour-palette__ramp">
                            {entries
                                .filter(([shade]) => shade.startsWith("A"))
                                .map(([shade, hex]) => (
                                    <Swatch
                                        key={shade}
                                        shade={shade}
                                        hex={hex}
                                    />
                                ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
