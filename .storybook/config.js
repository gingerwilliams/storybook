import { configure, addParameters, addDecorator } from "@storybook/react";

// import { themes } from "@storybook/theming";
import SapphireTheme from "./spTheme";

// this enables HMR for the SCSS source files
import "../src/index.scss";

// wrap every view in 4x padding
addDecorator(story => <div style={{ padding: "24px" }}>{story()}</div>);

// Option defaults.
addParameters({
    options: {
        theme: SapphireTheme
    }
});

function loadStories() {
    require("../stories/button.js");
    require("../stories/toast.js");
    // You can require as many stories as you need.
}
configure(loadStories, module);
