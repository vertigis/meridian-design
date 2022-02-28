---
title: Design Language
---

import Icons from "../src/components/icons";
import {ListControls} from "../src/components/menus";
import {IconTabs, IndicatorColorTabs, NormalTabs, ScrollableTabs, VerticalTabs} from "../src/components/tabs";
import {DefaultButtons, GroupedButtons, IconButtons, OutlinedButtons, TextVariantButtons, ToggleButtons} from "../src/components/buttons";

## Buttons

We have various buttons options of differing importance and loudness.

### Default

<DefaultButtons />

### Outlined Variant

<OutlinedButtons />

### Text Variant

<TextVariantButtons />

### Icon Button

<IconButtons />

### Grouped Buttons

<GroupedButtons />

---

## Form Design

A properly designed form allows people to quickly enter values in a logical order and in a manner that makes sense to them. This requires fields to be flexible when interpreting the user's input.

### Labels

-   Are easily interpreted.
-   Located on top of or to the left of most fields.

    -   Labels on the top is better for internationalization and long strings.
        <img src="/img/forms/forms-labels.png" alt="Example of form label on top of the input" title="Labels on top of the input" width="355" height="80" class="img-example" />

-   Usually appear to the right of check boxes and radio buttons.
    <img src="/img/forms/forms-labels-radio.png" alt="Example of radio button labels to the right of the radio button" title="Radio button labels to the right of the radio button" width="200" height="130" class="img-example" />

-   Ensure there is not too much space between the label and it's associated field so that it is clear which field goes with the label.

### Fields

-   The length of text fields should suggest the amount of data that should be entered.
-   Ensure that there is not too much space between fields so that nothing gets accidentally overlooked.
    <img src="/img/forms/forms-spacing.png" alt="Example of correct and incorrect label and field spacing" title="Keep the proximity of label close to their fields" width="355" height="322" class="img-example" />

### Links/Buttons

-   Primary actions should be clear and obvious.
    <img src="/img/forms/forms-primary-actions.png" alt="Example of primary action button next to a standard button" title="Primary actions are clear" width="235" height="70" class="img-example" />
-   Secondary actions are for more discrete actions.
-   Multi-step and complex forms should have all other navigation removed.
    -   Back links should be included for easy corrections in multi-step forms.
-   Include a _Cancel_ link to provide a safety net for users to escape the form.

### Error Messages

-   Provide clear and constructive error messages.
    <img src="/img/forms/forms-error-message.png" alt="Examples of correct and incorrect error messages" title="Eg: 'Please enter a street address' vs 'Required'" width="355" height="242" class="img-example" />

### Do's and Don'ts

-   Don't require unnecessary input.
-   Allow people to undo actions where appropriate.
-   Require confirmation for (important) irreversible actions.

### Keyboard Use

-   Do not force users to frequently switch between the keyboard and mouse.
-   Correct tab order is set up.
-   If possible, avoid drop-down lists where typing is quicker.
    -   Auto-complete or auto-suggest is very beneficial.

### Be Helpful

-   Be flexible when interpreting the values that users enter.
    -   Eg: when entering a phone number, accept both no-spaces and dashes.
-   Help users check the information they've entered before submitting.
    -   [WCAG 3.3.4](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) requires error prevention for legal and financial data so that it is reversible, checked for errors, and confirmed.
-   If possible, provide confirmation or error information where the user's attention is currently via immediate inline feedback.
-   If possible, try to avoid multiple columns for form layouts. This increases the likelihood that something in the right column will be missed.
    -   Usability testing <sup>[\[1\]](https://baymard.com/blog/avoid-multi-column-forms) [\[2\]](https://cxl.com/research-study/form-field-usability/)</sup> has shown that multi-column forms do not perform as well as single column layouts.
-   Remove any unnecessary distractions and links that competes with and takes the users attention away from the form they are filling out.

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
  ReactDom.render(icons, document.getElementById("IconsAttachPoint"));
</script>

<!--END_DOCUSAURUS_CODE_TABS-->

<Icons />

---

## Lists and Menus

Lists come into use in many aspects of our products: Feature Details, Search Results, Building information, and many more. No matter what needs to be displayed, if it falls into a list like quality, then a list should be used. Examples of different utilizations of the list element are below.

### Simple List

<ListControls/>

The most straight forward of implementations. This simple list view can include text, or text and icons. The selected item's highlight will consist of the primary theme colour, as well as a gradient grey. If tabbed to, you can use your up + down arrow keys to navigate the list.

### Nested List

<img src="/img/menus/menu.gif" alt="Animation to show a nested list" title="Menu - Title Only" width="139" height="181" class="img-example" />
<img src="/img/menus/menu-full.png" alt="Example of a nested menu" title="Menu - Title - Icon - Description" width="500" height="198" class="img-example" />

Menus are used to group additional commands for components that are not worth displaying in a more prominent visual manner, or that simply don’t belong anywhere else in the interface. Menu items consist of a single line of text to indicate what function will be triggered when the item is clicked. The hover state for menu items is built in an identical fashion to those used in list items (See above). A colored bar is added to the left side, and the background receives a gray gradient to white.

### Pinned Subheader List

<img src="/img/list/pinned-subheader.png" alt="Pinned Subheader List" title="Pinned Subheader List" width="384" height="269" class="img-example" />

### States

A few guidelines should be followed to ensure that the list element looks uniform, and fit within the application properly.

#### Hover

<img src="/img/list/selected-item.png" alt="Menu hover state" title="Menu hover state" width="384" height="269" class="img-example" />

When a hover state is triggered, it cannot just rely on a colour change. There also must be a state change that shows the differentiation. For example, in our programs, there is a background colour change, as well as the addition of a side border colour. Hover states always include a styling change, and the background colour will get a gradient.

#### Focus

<img src="/img/list/list-focused.png" alt="Keyboard focused state" title="Keyboard focused state" width="384" height="262" class="img-example" />

Focus indicators provide an easy way to identify currently active elements, against the rest of the design elements. Focus states must be unique from the hover state to make them distinct when using a keyboard for navigation. Focus states have a triple border design, so that regardless of the background they are implemented on, they will always be visible and easy to identify.

#### Selected/Active

<img src="/img/list/list-active.png" alt="Example of the selected/active state" title="Selected/active state" width="384" height="262" class="img-example" />

Selected and Active states for list elements should showcase similar behavior to the hover state. They must show that they are currently active, and visually distinct from the rest of the list elements.

---

## Tabs

### Normal Tabs

<NormalTabs/>

### Scrollable Tabs

<ScrollableTabs/>

### Icon Tabs

<IconTabs/>

### Indicator Color Tabs

<IndicatorColorTabs/>

### Vertical Tab

<VerticalTabs/>

---

## Panels & Panel Navigation

### Panels

Using Panels in our application affords the user a good deal of information all contained in an easy to view place. Most information can be placed within a panel. Panels are designed with a minimum width of 365px so that they work on smart phone screens as well as larger tablet and desktop displays. The user can resize the panels with the provided drag handles. For full information regarding panels, refer to our **<a href="https://developers.geocortex.com/docs/web/configuration-layout-getting-started/#panels" target="_blank">Developer Center information</a>**.

### Panel Navigation

Panels come with an assortment of configurable navigation controls:

![Panel maximize icon](/img/panels/panel-maximize.jpg "Maximize Button") Maximize: This button will extend the content of the panel to fill the entire view width.

![Panel minimize icon](/img/panels/panel-minimize.jpg "Minimize Button") Minimize: The minimize button will collapse the panel down fully. It is expandable again by click the ‘Restore to Original Size’ button that replaces minimize.

![Panel back icon](/img/panels/panel-back.jpg "Back Button") Back Button: Navigates you to the previous panels content.

![Panel close icon](/img/panels/panel-close.jpg "Close Button") Close Button: Closes the panel entirely.

### Examples


![panels](/img/panels/panel-welcome.jpg "Welcome Dialog Panel") ![panels](/img/panels/panel-feature.jpg "Features Panel")

## Dialogs

### Modal Dialogs

Occasionally, there will be a need to display information, warn the user, or present controls in a manner that needs to utilize a more focused interface. Modal dialogs provide a flexible layout strategy to allow the user to put any content they want before the user and draws their focus to it, setting the rest of the app into a non-interactive state until it is dismissed. This allows important information to be displayed, and preserves the background information.

### Examples

![modals](/img/modals/measurement-units.jpg "Units under the measurement toolbar")<br/> _Units under the measurement toolbar_

![modals](/img/modals/polygon-styles.jpg "Polygon Styles under the draw menu")<br/>_Polygon Styles under the draw toolbar_

![modals](/img/modals/share-my-map.jpg "Share my Map")<br/>_Share my Map_

![modals](/img/modals/save-project.jpg "Save Project")
![modals](/img/modals/load-project.jpg "Load Project")<br/>_Save & Load Project_

Additional Information regarding modal alerts can be found in the **<a href="https://developers.geocortex.com/docs/web/tutorial-import-map-model/#create-a-custom-component-with-a-model" target="_blank">Developer Center Information</a>**.

### Alerts

Dialogs are a good method of presenting alerts to the user, since they allow information that is relevant to a state change, or problem, without navigating away, or impacting the information within the app. This can include, but are not limited to:

-   Destructive actions that would otherwise destroy information that has been altered.

![dialogs](/img/dialogs/dialog.png "Dialog")

Alerts must always preface the problem, and offer the user the ability to dismiss, edit, or disregard the problem in question.

=======
<img src="/img/panels/panel-welcome.jpg" alt="Example of an app 'Welcome Panel'" title="App 'Welcome Panel'" width="435" height="513" class="img-example" />
<img src="/img/panels/panel-feature.jpg" alt="Example of the 'Result/Feature Details' panel" title="'Result/Feature Details' panel" width="435" height="513" class="img-example" />

---

### Notifications

Problems that might appear with some actions, including saving, adding information or connection issues, need to display information to the user. These are typically not critical issues, and simply need to appear for the knowledge of the user. Notifications will often appear in a non-invasive manner using toast messages, and fall into one of four categories: "Success, Info, Error, Warning" Each category comes with it's own iconography, and colour scheme. They will dismiss automatically after a certain time period (Success or Information), or by the a user interaction (Warning or Error).

<img src="/img/notifications/notification-success.jpg" alt="Toast Notification for Success" title="Toast Notification for Success" class="img-example" width="350px" height="110px"/>

<img src="/img/notifications/notification-info.jpg" alt="Toast Notification for Information" title="Toast Notification for Information" class="img-example" width="350px" height="110px"/>

<img src="/img/notifications/notification-warning.jpg" alt="Toast Notification for Warning" title="Toast Notification for Warning" class="img-example" width="350px" height="110px"/>

<img src="/img/notifications/notification-error.jpg" alt="Toast Notification for Error" title="Toast Notification for Error" class="img-example" width="350px" height="110px" />
