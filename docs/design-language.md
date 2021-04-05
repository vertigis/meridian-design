---
title: Design Language
---

import Icons from "../src/components/icons";

## Whitespace/Padding

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec commodo elit. Curabitur dui nulla, vulputate id rutrum sed, maximus consequat eros. Nullam pharetra urna quis sapien tincidunt, et iaculis mauris ornare. Vestibulum convallis et felis at lobortis. Nulla bibendum vel quam quis accumsan.

---

## Buttons

We have various buttons options of differing importance and loudness.

### Default

Standard buttons with the last three being deactivated.
![buttons](/img/buttons/default.png "Default Buttons")

### Outlined Variant

Outlined buttons with the last three being deactivated.
![buttons](/img/buttons/outlined.png "Outlined Buttons")

### Text Variant

![buttons](/img/buttons/text.png "Text Buttons")

### Icon Button

![buttons](/img/buttons/icon.png "Icon Button") ![buttons](/img/buttons/icon-hover.png "Icon Button Hover State")

### Toggle Buttons

![buttons](/img/buttons/toggle.png "Toggle Buttons")

### Grouped Buttons

![buttons](/img/buttons/grouped-default.png "Grouped Buttons") ![buttons](/img/buttons/grouped-outlined.png "Outlined Grouped Buttons")

---

## Icons

### Where can I find the Icons?

Our master repository of icons, consists of over 600 pre-created icons ready for use in our icon package. Instructions on how to install packages can be found in our **<a href="https://developers.geocortex.com/docs/web/sdk-reference-third-party-libraries/#installing-packages" target="_blank">Developer Center</a>**. We store all our icons in this online repository, in several formats (png, svg, pdf). The .svg format icons are comprised of compound paths, black #000000), and an artboard of 24px by 24px. They have been stripped of all unnecessary meta info and optimized using the SVGo optimization script included in the repo.

### How do I use icons in my app?

Instructions for using either built in icons, or your own, can be found in the **<a href="https://developers.geocortex.com/docs/web/sdk-adding-icons/#next-steps" target="_blank">Developer Center</a>**.

### How do I create a custom icon?

When creating our icons, simplicity is key. Since we are working with a canvas of only 24px x 24px, every design provided must be concise and communicate the idea clearly, and easily. Fine details are less important than trying to ensure that shapes stay recognizable. Information regarding this process is available in our **<a href="https://developers.geocortex.com/docs/web/sdk-components-styling" target="_blank">Developer Center information</a>**.

#### Style

The visual language of our icons should be consistent, creating a harmonious appearance across all of our products:

-   All icons must be made using a single color (black), with negative space being transparent.
-   When employing linework, trying to maintain at least 2 pixels in width, with an equal amount of white space allows the designs to remain clear when viewed at 100%. This guideline is flexible however, depending on what elements are used.
-   Modifiers must be placed in the bottom right of the icon, with a border of 2px of empty space outlining it.
-   Simplistic, clear, and simple designs are preferable to complicated patterns.
-   The visual loudness of the icon should convey its importance, but not overpower other messages surrounding it, including the written identifier.

### Available Icons

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->

<script>
  import icons from "../src/components/icons" import ReactDOM from "react-dom"
  ReactDom.render (icons, document.getElementById("IconsAttachPoint"));
</script>

<!--END_DOCUSAURUS_CODE_TABS-->

<Icons />

---

## Lists

Lists come into use in many aspects of our products: Feature Details, Search Results, Building information, and many more. No matter what needs to be displayed, if it falls into a list like quality, then a list should be used. Examples of different utilizations of the list element are below.

### Simple List

The most straight forward of implementations. This simple list view can include text, or text and icons. Examples of this menu's use include: Action Menus.

![list](/img/list/simple.png "Simple List")

### Menu List

![list](/img/list/menu.png "Menu List")

### List Controls

![list](/img/list/list-controls.png "List Controls")

### Pinned Subheader List

## ![list](/img/list/pinned-subheader.png "Pinned Subheader List")

## States

A few guidelines should be followed to ensure that the list element looks uniform, and fit within the application properly.

### Hover

A hover state cannot rely on a color change as the only indication that it is being hovered due to users that may be colorblind or have other visual impairments. In our applications we will typically add a border along with a color change to be WCAG compliant. Hover states always include a styling change, and the background color will get a gradient.

![list](/img/list/selected-item.png "Hover Item State")

### Focus

Focus indicators provide an easy way to identify currently active elements against the rest of the design. Focus states must be unique from the hover state to make them distinct when using a keyboard for navigation. Focus states have the triple border design, so that regardless of the background they are implemented on, they will always be visible and easy to identify.

![list](/img/list/list-focused.png "Focused Item State")

### Selected/Active

Selected and Active states for list elements should showcase a similar behavior to the hover state. They must show that they are currently active, and visually distinct from the rest of the list elements.

![list](/img/list/list-active.png "Active Item State")

---

## Tabs

### Normal Tabs

![tabs](/img/tabs/normal.png "Normal Tabs")

### Scrollable Tabs

![tabs](/img/tabs/scrollable.png "Scrollable Tabs")

### Icon Tabs

![tabs](/img/tabs/icon.png "Icon Tabs")

### Indicator Color Tabs

![tabs](/img/tabs/indicator.png "Indicator Tabs")

### Tab Adornments

![tabs](/img/tabs/adornments.png "Adornments Tabs")

---

## Menus

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec commodo elit. Curabitur dui nulla, vulputate id rutrum sed, maximus consequat eros. Nullam pharetra urna quis sapien tincidunt, et iaculis mauris ornare. Vestibulum convallis et felis at lobortis. Nulla bibendum vel quam quis accumsan.

![menus](/img/menus/menu.gif "Toggle Buttons")

---

## Dialogs

![dialog](/img/dialogs/dialog.png "Dialog")

## Panels & Panel Navigation

---
