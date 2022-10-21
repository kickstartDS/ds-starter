import merge from "deepmerge";
import { Button } from "./ButtonComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import ButtonStories from "@kickstartds/base/lib/button/button.stories";
import tokens from "./button-tokens.json";
import schema from "./button.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

const Template = (args) => <Button {...args} />;

export default {
  ...ButtonStories,
  title: "DS/Button",
  args,
  argTypes,
  parameters: {
    cssprops: merge(ButtonStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const IconArrow = Template.bind({});
IconArrow.args = pack({
  label: "More info",
  href: "#",
  icon: "chevron-right",
});

export const IconDelete = Template.bind({});
IconDelete.args = pack({
  label: "Delete",
  href: "#",
  icon: "close",
});

export const WithoutIcon = Template.bind({});
WithoutIcon.args = pack({
  label: "Select",
  href: "#",
  icon: false,
});
