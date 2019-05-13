import React from "react";
import { storiesOf } from "@storybook/react";
import Toast from "../views/components/Toast";

storiesOf("Toast", module).add(
    "success",
    () => <Toast classname="toast_success">You have 14 pending orders</Toast>,
    {
        info: {
            text: "test",
            inline: true // Displays info inline vs click button to view
        }
    }
);
