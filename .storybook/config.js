import { configure, addParameters } from "@storybook/react";
// import { themes } from "@storybook/theming";
import SapphireTheme from "./spTheme";

// Option defaults.
addParameters({
    options: {
        theme: SapphireTheme
    }
});

function loadStories() {
    require("../stories/button.js");
    // You can require as many stories as you need.
}
configure(loadStories, module);
