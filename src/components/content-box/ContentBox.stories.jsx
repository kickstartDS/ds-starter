import merge from "deepmerge";
import { ContentBox } from "./ContentBoxComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import ContentBoxStories from "@kickstartds/base/lib/content-box/content-box.stories";
import tokens from "./content-box-tokens.json";
import schema from "./content-box.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

const Template = (args) => <ContentBox {...args} />;

export default {
  ...ContentBoxStories,
  title: "DS/Content Box",
  args,
  argTypes,
  parameters: {
    cssprops: merge(ContentBoxStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
Default.args = pack({
  topic: "Lorem ipsum...",
  text: "... dolor sit",
});
