import { TextMedia } from "@kickstartds/base/lib/text-media";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Section } from "@kickstartds/base/lib/section";

import { Quote } from "@kickstartds/content/lib/quote";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { Visual } from "@kickstartds/content/lib/visual";

export default {
  title: "Demo",
};

const Page = () => (

  <>
    <Section
      mode="list"
      width="full"
      spaceBefore="none"
      spaceAfter="small"
      gutter="none"
    >
      <Visual
        backgroundColor="transparent"
        skipButton={true}
        box={{
          background: 'solid',
          enabled: true,
          headline: {
            content: 'Why are we obsessed with coffee makers?',
            level: 'h1',
            pageHeader: false,
            spaceAfter: 'small',
            styleAs: 'h1',
          },
          horizontal: 'left',
          indent: false,
          inverted: true,
          link: {
            enabled: true,
            deko: false,
            fillAnimation: false,
            highlighted: false,
            href: 'https://javadrip.coffee/shop/coffee-makers',
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: 'Buy Coffee Machine',
            newTab: false,
            size: 'large',
            variant: 'solid'
          },
          text: 'At JavaDrip we believe that the perfect cup of coffee requires the perfect brewing method, and we offer a variety of high quality products to meet your brewing needs. Have a look at our products and let us know if you have any questions.',
          vertical: 'bottom'
        }}
        height="fullScreen"
        inbox
        media={{
          mode: 'video',
          video: {
            srcDesktop: 'https://static.vecteezy.com/system/resources/previews/002/184/262/mp4/coffee-in-a-roasting-machine-free-video.mp4',
            srcMobile: 'https://static.vecteezy.com/system/resources/previews/002/184/262/mp4/coffee-in-a-roasting-machine-free-video.mp4',
            srcTablet: 'https://static.vecteezy.com/system/resources/previews/002/184/262/mp4/coffee-in-a-roasting-machine-free-video.mp4'
          }
        }}
        overlay
      />
    </Section>

    <Section
      mode="list"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
      gutter="none"
      pattern="graphics"
    >
      <Storytelling
        full
        box={{
          headline: {
            content: "Lorem Ipsum dolor",
            level: "h1",
            styleAs: "h1",
            subheadline: "kickstart DS is the foundation for your design system with reusable components and tools",
          },
          link: {
            label: "lorem ipsum",
          },
        }}
        image={{
          source: "img/beans_article_thumb.avif",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>

    <Section
      width="narrow"
      align="center"
      spaceBefore="none"
      headline={{
        content: "Backend integration with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
      }}
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
      headline={{
        content: "Why kickstartDS works so well with sanity",
        align: "center",
      }}
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
      headline={{
        content: "How you can easily create a page with kickstartDS",
        align: "center",
      }}
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

    <Section
      gutter="default"
      mode="list"
      headline={{
        align: "center",
        content: "What our customers say",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      pattern="3"
      spaceAfter="none"
      variant="head"
      width="narrow"
    >
      <Quote
        byline="CEO"
        image="/img/blog/web_profile_images.png"
        source="Daniel Ley, Co-Founder + UX Strategist with heart & soul"
        text={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.`}
      />
    </Section>
    <Section
      width="full"
      mode="list"
      spaceBefore="default"
      spaceAfter="small"
      gutter="large"
      headline={{
        content: "Get to know us",
        align: "center",
      }}
    >
      <Storytelling
        backgroundColor="var(--ks-background-color-accent)"
        image={{
          order: {
            desktopImageLast: true,
            mobileImageLast: true,
          },
          source: "img/contact.svg",
        }}
        box={{
          headline: {
            content: "Find out if kickstartDS suits your project",
            level: "h2",
          },
          text: "Get in contact with our team",
          link: {
            label: "Talk to us now",
            variant: "solid",
            size: "default",
            iconAfter: false,

          },
        }}
      />
    </Section>
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Storytelling
        backgroundColor="var(--ks-background-color-default)"
        backgroundImage="img/recipes/graphics--bg.svg"
        ks-inverted="true"
        box={{
          hAlign: "left",
          headline: {
            level: "h2",
            styleAs: "h1",
            content: "Dont know where to start?",
            subheadline:
              "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
          },
          text: "",
          link: {
            label: "Get in touch",
            href: "#",
            variant: "solid",
          },
        }}
      />
    </Section>
    <Section
      width="wide"
      headline={{
        align: "center",
        content:
          "Leverage rich integrations with modern web technology, refocus on what really matters!",
        subheadline:
          "Out-of-the-box kickstartDS let's you connect your interfaces to:",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
    >
      <LogoTiles
        logos={[
          {
            alt: "Shopify",
            src: "/logos/logo_contentful.svg",
          },
          {
            alt: "Contentful",
            src: "/logos/logo_gatsby.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_netlify.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_nextjs.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_react.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_wordpress.svg",
          },
          {
            alt: "Shopify",
            src: "/logos/logo_contentful.svg",
          },
          {
            alt: "Contentful",
            src: "/logos/logo_gatsby.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_netlify.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_nextjs.svg",
          },
        ]}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Demo = Template.bind({});
