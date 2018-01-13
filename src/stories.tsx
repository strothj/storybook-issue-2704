import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Issue 2704", module);

stories.add("test", () => (
  <div>Toggle: {boolean("Toggle", false) ? "on" : "off"}</div>
));
