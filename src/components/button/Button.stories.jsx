import { Button } from "./ButtonComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import ButtonStories from "@kickstartds/base/lib/button/button.stories";
import schema from "./button.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

const Template = (args) => <Button {...args} />;

export default {
  ...ButtonStories,
  title: "Components/Button",
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const NativeButton = Template.bind({});
NativeButton.args = pack({
  label: "Click me",
  variant: "primary",
});

export const LinkButton = Template.bind({});
LinkButton.args = pack({
  label: "Click me",
  variant: "secondary",
  target: "https://www.kickstartDS.com",
});

export const DisabledButton = Template.bind({});
DisabledButton.args = pack({
  label: "Disabled Button",
  variant: "primary",
  disabled: true,
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = pack({
  label: "Primary Button",
  variant: "primary",
});

export const SecondaryButton = Template.bind({});
SecondaryButton.args = pack({
  label: "Secondary Button",
  variant: "secondary",
});

export const TertiaryButton = Template.bind({});
TertiaryButton.args = pack({
  label: "Tertiary Button",
  variant: "tertiary",
});
