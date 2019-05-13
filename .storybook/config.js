import { configure, addParameters, addDecorator } from "@storybook/react";
import { name, homepage, version } from "../package.json";
// import { themes } from "@storybook/theming";
import SapphireTheme from "./spTheme";

// this enables HMR for the SCSS source files
import "../src/index.scss";

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
