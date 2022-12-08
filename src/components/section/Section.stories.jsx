import merge from "deepmerge";
import {
  pack,
  unpack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import TeaserCardStory, {
  CardWithImage,
} from "../teaser-card/TeaserCard.stories";
import schema from "./section.schema.dereffed.json";

const Section = sectionStories.component;
CardWithImage.displayName = "Teaser Card";
const Template = (args) => {
  return (
    <Section {...args}>
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
    </Section>
  )
};

const { defaultArgs: args, argTypes } = getArgsShared(schema);

export default {
  ...sectionStories,
  title: "Layout/Section",
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const TeaserCards = Template.bind({});
TeaserCards.args = pack({
  mode: "tile",
});

export const WithCtas = Template.bind({});
WithCtas.args = pack({
  mode: "tile",
  ctas: [{
      label: 'Button 01',
      target: 'https://www.kickstartDS.com',
    }, {
      label: 'Button 02',
      target: 'https://www.kickstartDS.com',
    }, {
      label: 'Button 03',
      target: 'https://www.kickstartDS.com',
    }
  ]
});
