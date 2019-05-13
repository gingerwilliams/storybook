import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
// import { Button } from '@storybook/react/demo';
import Button from "../src/components/Button";

storiesOf("Button", module)
    .addDecorator(withInfo)
    .add("with text", () => <Button>Hello Button</Button>, {
        info: {
            text: "test",
            inline: true // Displays info inline vs click button to view
        }
    })
    .add(
        "with emoji",
        () => (
            <Button>
                <span role="img" aria-label="so cool">
                    😀 😎 👍 💯
                </span>
            </Button>
        ),
        {
            info: {
                text:
                    "Component should be inlined between description and PropType table",
                inline: true // Displays info inline vs click button to view
            }
        }
    );
