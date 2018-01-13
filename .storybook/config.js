import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from  "@storybook/addon-knobs";

addDecorator(withKnobs);

configure(() => {
  require("../src/stories");
}, module);
