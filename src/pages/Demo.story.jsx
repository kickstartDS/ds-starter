import { TextMedia } from "@kickstartds/base/lib/text-media";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Section } from "@kickstartds/base/lib/section";

export default {
  title: "Demo",
};

const Page = () => (
  <>
    <Section
      width="narrow"
      align="center"
      spaceBefore="none"
      headline="Backend integration with kickstartDS"
    >
      <TextMedia
        text={`
Component properties encode decisions, **rooted in reality**, pre-solving everyday problems for you Component properties encode decisions,.

Directly engage with components through **Storybooks** rich interface.
      `}
      />
    </Section>


    <Section
      width="wide"
      spaceBefore="default"
      ks-inverted="true"
      gutter="large"
      headline="Why kickstartDS works so well with sanity"
      variant="head"
    >
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
      <ContentBox
        image="img/design-system_performant.svg"
        topic="Best in class performance"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_A11Y_accessibility.svg"
        topic="Accessible by default"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
    </Section>

    <Section
      headline="How you can easily create a page with kickstartDS"
      width="max"
      gutter="large"
      ks-inverted="true"
      variant="body"
    >
      <ContentBox
        image="img/design-system_performant.svg"
        topic="Best in class performance"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_A11Y_accessibility.svg"
        topic="Accessible by default"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support."
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Demo = Template.bind({});
