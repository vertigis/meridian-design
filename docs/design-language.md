---
title: Design Language
---

import Icons from "../src/components/icons";
import {ListControls} from "../src/components/menus";
import {IconTabs, IndicatorColorTabs, NormalTabs, ScrollableTabs, VerticalTabs} from "../src/components/tabs";
import {ButtonEmphasis, ButtonPairs, ButtonLabelsDo, ButtonLabelsDont, ButtonOptions, ButtonStyles, DisabledStates, ButtonColors, ButtonSizes, GroupedButtons, IconButtons, OutlinedButtons, ToggleButtons} from "../src/components/buttons";

## Buttons

Applications built on VertiGIS Studio Web technology have many button variants and options available but VS Web does not use all of the available options. To simplify the choices, VS Web uses three basic types of buttons. They are based on the level of emphasis required for the task. There are '_Low_', '_Medium_', & '_High_' emphasis buttons.

<div class="buttons-box"><ButtonEmphasis />
</div>

### Usage

As a general guideline there should only be one _High_ emphasis button per view. Typically buttons are used at the end of forms used in pairs, such as “Submit” and “Cancel”. Usability best practices state that the user should always have the ability to safely exit a task so it is always recommended to have a 'Cancel' button available.

Depending on the purpose of the button you can use combinations of a High Emphasis and Medium Emphasis button, two Medium Emphasis buttons, or a Medium and Low Emphasis buttons.

<div class="buttons-box"><ButtonPairs />
</div>

#### Developer notes:

-   Low Emphasis buttons consist of MUI Text Variant buttons using the 'Primary' colour
-   Medium Emphasis buttons consist of MUI Outlined Variant buttons using the 'Primary' colour
-   High Emphasis buttons consist of MUI Contained Variant buttons using the 'Primary' colour

Visit **[the Developer Center](https://developers.vertigisstudio.com/docs/mobile/tutorial-configure-button-click/)** for more details for implementing buttons

### Action Button Order and Alignment

The primary action (eg: Save, Apply, etc.) must be the first button in the hierarchy of buttons. In the context of a form, it should be the first thing a keyboard user will tab too after filling in all of the form inputs. The secondary action (eg: Cancel or Back) button follows after the primary action in the tab order.

As a general guideline, forms with labels and inputs stacked on top of each other (as in most VertiGIS Studio applications) it's better to align your buttons with the start of the content. That means left-aligned in most languages and right-aligned in RTL languages. The close proximity of the buttons to the form inputs and labels allows the eye to simply follow the natural flow down the page to find the submit action. This is especially true when using large screens where your form input and action buttons potentially end up on opposite sides of the screen.

<table class="tbl-example">
    <tr>
        <td id="btn-alignment-1">
            <img src="/img/forms/button-alignment-general.png" alt="Example of form action buttons aligned to the start of the content" title="Buttons aligned with the labels and the start of the content" width="180" height="270" className="img-example" />
            <span class="img-caption">
                Buttons aligned with the labels and the start of the content
            </span>
        </td>
        <td id="btn-alignment-2">
            <img src="/img/forms/button-alignment-dialog.png" alt="Example of form action buttons aligned to the end of the content in a dialog" title="Buttons aligned to the end of the dialog" width="310" height="200" className="img-example" />
            <span class="img-caption">
                Buttons aligned to the end of the dialog
            </span>
        </td>
    </tr>
</table>

If the form is in a dialog then the common practice is to place your action buttons at the end of your content (right-aligned for most languages and left-aligned in RTL languages). The smaller contained space of a dialog creates a natural ending place for your eye to flow to at the end of the content area.

Small screens and mobile devices can also use center-aligned or full width action buttons to help draw attention to the primary action and to reduce the distance you have to reach with your thumb or finger to tap on a button.

When deciding if your form button alignment should be to the left or right, it's important to consider the specific context and user needs when designing a form. Conducting user testing and gathering feedback can help ensure that the button alignment aligns with user expectations and improves usability. If you're still unsure, then the default fallback position should be to align the buttons with the start of your content (left-aligned).

### Button Labels

Always attempt to use concise, descriptive, and actionable labels with three or fewer words for buttons. Verbs are ideally suited for buttons to prompt the user to perform the desired action. Button labels must use ['Title Case'](https://en.wikipedia.org/wiki/Title_case) where each main word has the first letter capitalized.

<div class="button-examples box-cols">
    <fieldset class="box-item example eg-do">
        <legend>Do</legend>
        <ButtonLabelsDo />
    </fieldset>
    <fieldset class="box-item example eg-dont">
        <legend>Don't</legend>
        <ButtonLabelsDont />
    </fieldset>
</div>

### Sizing and Spacing

Sizing of buttons are set to "small", "medium", or "large" by using the "size" prop on the button. The width of a button will automatically adjust to the length of the content (icon and/or label).

Padding within the button should not be altered or over-ridden in CSS as the padding is pre-set in the Design System so that buttons can participate in the system wide density settings. Margin around buttons should be controlled by the parent component. The parent component is responsible for the spacing around child components (like buttons), positioning, flow, and sometimes the size. Please refer to **[the Developer Center](https://developers.vertigisstudio.com/docs/web/configuration-layout-reference#presentation-attributes)** for more information on presentation attributes.

### Additional Options

Icons can be added to buttons for added emphasis or to help convey the purpose of the button. For added visual style flexibility, you can choose to use the "round" style to create circle or pill shaped buttons. You can also choose to have a button with only an icon and no text.

<div class="buttons-box"><ButtonOptions /></div>

---

## Form Design

A properly designed form allows people to quickly enter values in a logical order and in a manner that makes sense to them. This requires fields to be flexible when interpreting the user's input.

### Labels

-   Are easily interpreted.
-   Located on top of or to the left of most fields.

    -   Labels on the top is better for internationalization and long strings.
        <img src="/img/forms/forms-labels.png" alt="Example of form label on top of the input" title="Labels on top of the input" width="355" height="80" className="img-example" />

-   Usually appear to the right of check boxes and radio buttons.
    <img src="/img/forms/forms-labels-radio.png" alt="Example of radio button labels to the right of the radio button" title="Radio button labels to the right of the radio button" width="200" height="130" className="img-example" />

-   Ensure there is not too much space between the label and it's associated field so that it is clear which field goes with the label.

### Fields

-   The length of text fields should suggest the amount of data that should be entered.
-   Ensure that there is not too much space between fields so that nothing gets accidentally overlooked.
    <img src="/img/forms/forms-spacing.png" alt="Example of correct and incorrect label and field spacing" title="Keep the proximity of label close to their fields" width="355" height="322" className="img-example" />

### Links/Buttons

-   Primary actions should be clear and obvious.
    <img src="/img/forms/forms-primary-actions.png" alt="Example of primary action button next to a standard button" title="Primary actions are clear" width="235" height="70" className="img-example" />
-   Secondary actions are for more discrete actions.
-   Multi-step and complex forms should have all other navigation removed.
    -   Back links should be included for easy corrections in multi-step forms.
-   Include a _Cancel_ link to provide a safety net for users to escape the form.

### Error Messages

-   Provide clear and constructive error messages.
    <img src="/img/forms/forms-error-message.png" alt="Examples of correct and incorrect error messages" title="Eg: 'Please enter a street address' vs 'Required'" width="355" height="242" className="img-example" />

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

Our master repository of icons, consists of over 600 pre-created icons ready for use in our icon package. Instructions on how to install packages can be found in **<a href="https://developers.vertigisstudio.com/docs/web/sdk-reference-third-party-libraries/#installing-packages" target="_blank">the Developer Center.</a>** We store all our icons in this online repository, in several formats (png, svg, pdf). The .svg format icons are comprised of compound paths, black #000000), and an artboard of 24px by 24px. They have been stripped of all unnecessary meta info and optimized using the SVGo optimization script included in the repo.

### How do I use icons in my app?

Instructions for using either built in icons, or your own, can be found in **<a href="https://developers.vertigisstudio.com/docs/web/sdk-adding-icons/#next-steps" target="_blank">the Developer Center.</a>**

### How do I create a custom icon?

When creating our icons, simplicity is key. Since we are working with a canvas of only 24px x 24px, every design provided must be concise and communicate the idea clearly, and easily. Fine details are less important than trying to ensure that shapes stay recognizable. Information regarding this process is available in **<a href="https://developers.vertigisstudio.com/docs/web/sdk-components-styling" target="_blank">the Developer Center.</a>**

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

<img src="/img/menus/menu.gif" alt="Animation to show a nested list" title="Menu - Title Only" width="139" height="181" className="img-example" />
<img src="/img/menus/menu-full.png" alt="Example of a nested menu" title="Menu - Title - Icon - Description" width="500" height="189" className="img-example" />

Menus are used to group additional commands for components that are not worth displaying in a more prominent visual manner, or that simply don’t belong anywhere else in the interface. Menu items consist of a single line of text to indicate what function will be triggered when the item is clicked. The hover state for menu items is built in an identical fashion to those used in list items (See above). A colored bar is added to the left side, and the background receives a gray gradient to white.

### Pinned Subheader List

<img src="/img/list/pinned-subheader.png" alt="Pinned Subheader List" title="Pinned Subheader List" width="364" height="249" className="img-example" />

### States

A few guidelines should be followed to ensure that the list element looks uniform, and fit within the application properly.

#### Hover

<img src="/img/list/selected-item.png" alt="Menu hover state" title="Menu hover state" width="364" height="249" className="img-example" />

When a hover state is triggered, it cannot just rely on a colour change. There also must be a state change that shows the differentiation. For example, in our programs, there is a background colour change, as well as the addition of a side border colour. Hover states always include a styling change, and the background colour will get a gradient.

## Loading

Multiple options are available to denote a loading state, "3 dot loader" and "Skeleton". When to use either will depend on the content being loaded.

### 3 Dot Loader

<img src="/img/loaders/3dot-loader.gif" alt="3 dot loader animation" title="3 dot loader animation" className="img-example" />

The 3 dot animated loader was the original loading animation user throughout our apps. In many cases this has been replaced by Skeleton although there are some instances where it is preferable:

-   When there isn't a layout for Skeleton to emulate.
-   Large areas.

### Skeleton

adaasd

#### Focus

<img src="/img/list/list-focused.png" alt="Keyboard focused state" title="Keyboard focused state" width="364" height="242" className="img-example" />

Focus indicators provide an easy way to identify currently active elements, against the rest of the design elements. Focus states must be unique from the hover state to make them distinct when using a keyboard for navigation. Focus states have a triple border design, so that regardless of the background they are implemented on, they will always be visible and easy to identify.

#### Selected/Active

<img src="/img/list/list-active.png" alt="Example of the selected/active state" title="Selected/active state" width="364" height="242" className="img-example" />

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

Using Panels in our application affords the user a good deal of information all contained in an easy to view place. Most information can be placed within a panel. Panels are designed with a minimum width of 365px so that they work on smart phone screens as well as larger tablet and desktop displays. The user can resize the panels with the provided drag handles. For full information regarding panels, refer to **<a href="https://developers.vertigisstudio.com/docs/web/configuration-layout-getting-started/#panels" target="_blank">the Developer Center.</a>**

### Panel Navigation

Panels come with an assortment of configurable navigation controls:

![Panel maximize icon](/img/panels/panel-maximize.jpg "Maximize Button") Maximize: This button will extend the content of the panel to fill the entire view width.

![Panel minimize icon](/img/panels/panel-minimize.jpg "Minimize Button") Minimize: The minimize button will collapse the panel down fully. It is expandable again by click the ‘Restore to Original Size’ button that replaces minimize.

![Panel back icon](/img/panels/panel-back.jpg "Back Button") Back Button: Navigates you to the previous panels content.

![Panel close icon](/img/panels/panel-close.jpg "Close Button") Close Button: Closes the panel entirely.

### Examples

<img src="/img/panels/panel-welcome.jpg" alt="Welcome Dialog Panel" title="Welcome Dialog Panel" width="415" height="493" className="img-example" /> <img src="/img/panels/panel-feature.jpg" alt="Features Panel" title="Features Panel" width="415" height="493" className="img-example" />

## Dialogs

### Modal Dialogs

Occasionally, there will be a need to display information, warn the user, or present controls in a manner that needs to utilize a more focused interface. Modal dialogs provide a flexible layout strategy to allow the user to put any content they want before the user and draws their focus to it, setting the rest of the app into a non-interactive state until it is dismissed. This allows important information to be displayed, and preserves the background information.

### Examples

<img src="/img/modals/measurement-units.jpg" alt="Units under the measurement toolbar" title="Units under the measure toolbar" width="800" height="456" className="img-example"/>

<img src="/img/modals/polygon-styles.jpg" alt="Polygon Styles under the draw menu" title="Polygon Styles under the draw menu" width="800" height="456" className="img-example" />

<img src="/img/modals/share-my-map.jpg" alt="Share my Map" title="Share my Map" width="800" height="456" className="img-example"/>
<img src="/img/modals/save-project.jpg" alt="Save Project" title="Save Project" width="800" height="456" className="img-example" />

Additional information regarding modal alerts can be found in **<a href="https://developers.vertigisstudio.com/docs/web/tutorial-import-map-model/#create-a-custom-component-with-a-model" target="_blank">the Developer Center.</a>**

### Alerts

Dialogs are a good method of presenting alerts to the user, since they allow information that is relevant to a state change, or problem, without navigating away, or impacting the information within the app. This can include, but are not limited to:

-   Destructive actions that would otherwise destroy information that has been altered.

Alerts must always preface the problem, and offer the user the ability to dismiss, edit, or disregard the problem in question.

<img src="/img/panels/panel-welcome.jpg" alt="Example of an app 'Welcome Panel'" title="App 'Welcome Panel'" width="415" height="493" className="img-example" />
<img src="/img/panels/panel-feature.jpg" alt="Example of the 'Result/Feature Details' panel" title="'Result/Feature Details' panel" width="415" height="493" className="img-example" />

---

### Notifications

Notification appear in a non-invasive manner. They can be configured to either dismiss automatically, require the user to dismiss, or not be dismissable at all.

There are four types of notifications available to use:

<img src="/img/notifications/notification-success.jpg" alt="Toast Notification for Success" title="Toast Notification for Success" width="640" height="316" className="img-example"/>

<img src="/img/notifications/notification-info.jpg" alt="Toast Notification for Information" title="Toast Notification for Information" width="640" height="316" className="img-example"/>

<img src="/img/notifications/notification-warning.jpg" alt="Toast Notification for Warning" title="Toast Notification for Warning" width="640" height="316" className="img-example"/>

<img src="/img/notifications/notification-error.jpg" alt="Toast Notification for Error" title="Toast Notification for Error" width="640" height="316" className="img-example"/>

Care should be taken when choosing to use a notification as too many notifications can annoy users by being overused.

For full information regarding panels, refer to **<a href="https://developers.vertigisstudio.com/docs/web/tutorial-run-workflow-app-config/#prerequisites" target="_blank">the Developer Center.</a>**
