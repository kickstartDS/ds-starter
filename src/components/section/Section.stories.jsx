import merge from "deepmerge";
import { Section } from "./SectionComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import SectionStories from "@kickstartds/base/lib/section/section.stories";
import tokens from "./section-tokens.json";
import schema from "./section.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

const Template = (args) => <Section {...args} />;

export default {
  ...SectionStories,
  title: "DS/Section",
  args,
  argTypes,
  parameters: {
    cssprops: merge(SectionStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
Default.args = pack({
  mode: "list",
});
