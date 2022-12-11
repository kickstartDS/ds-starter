import { TeaserCard } from "./TeaserCardComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import TeaserBoxStories from "@kickstartds/base/lib/teaser-box/teaser-box.stories";
import schema from "./teaser-card.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

const Template = (args) => <TeaserCard {...args} />;

export default {
  ...TeaserBoxStories,
  title: "Components/Teaser Card",
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const CardWithImage = Template.bind({});
CardWithImage.args = pack({
  headline: "TeaserCard headline",
  text: "TeaserCard text content that can be quite a bit longer, and use **Markdown**",
  target: "#",
  image: "https://images.unsplash.com/photo-1665125143199-a6b44a9e1b21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzUxNDQyOA&ixlib=rb-1.2.1&q=80&w=1080",
  inverted: false
});

