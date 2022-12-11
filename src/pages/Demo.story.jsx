import { TextMedia } from "@kickstartds/base/lib/text-media";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Section } from "@kickstartds/base/lib/section";

import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";

export default {
  title: "Pages/Demo",
};

const Page = () => (
  <>
    <Section
      width="wide"
      align="left"
      spaceBefore="default"
      spaceAfter="small"
      headline="Welcome to your **Design System**"
    >
      <TextMedia
        mediaAlignment="beside-left"
        media={[
          {
            "lightboxImage": {
              "image": "img/screenshot-ds.png",
              "thumb": "img/screenshot-ds.png",
              "width": 1904,
              "height": 903,
              "zoomIcon": true,
            }
          }
        ]}
        text={`
This **kickstartDS Starter** is the most efficient way of kickstarting a **Design System**. You're looking at a ready-to-use **Design System**, only waiting for you to put your stamp on it! Next to some additional features and configuration, the content of this **Starter** is strongly aligned with our main guide ["Create your Design System"](https://www.kickstartds.com/docs/guides/create/). This means you can use that guide as a detailed reference for the way stuff here works, and learn about the reasoning behind the decisions taken.
      `}
      />
    </Section>

    <Section
      width="default"
      spaceAfter="default"
      spaceBefore="default"
      gutter="default"
      ks-inverted="true"
      headline="Next steps"
      mode="list"
    >
      <ContentBox
        topic="Customizing Design Token"
        text={`
[**Branding Token**](https://www.kickstartds.com/docs/foundations/token/branding-token) are set in "src/token/branding-token.json", while your **Design Token** set lives at "src/token/dictionary". Initialization of token happens through "yarn init-tokens", while compiling your [**Design Token**](https://www.kickstartds.com/docs/foundations/token/design-token/) set to **Component Token** (among other formats) is done by running "yarn build-tokens".

[**Component Token**](https://www.kickstartds.com/docs/foundations/token/component-token) are the third type of token involved, but those only come into play later. They are not involved with the general styling / theming of your **Design System**, but rather map your **Design Token** to components in a layered way.

To learn more about this process, follow the section ["2. Design Application"](https://www.kickstartds.com/docs/guides/create/design) of our ["Create your Design System"](https://www.kickstartds.com/docs/guides/create) guide.
        `}
      />
      <ContentBox
        topic="Adding components"
        text={`
As described in the intro in this starters "README", the components already included serve as a great example on how to leverage **kickstartDS**. But obviously you will want to add your own components, suited to exactly your needs!

You can have a look at all the component examples in [our guides here](https://www.kickstartds.com/docs/guides/examples/components/), or learn about the involved processes in more detail in the ["Components"](https://www.kickstartds.com/docs/guides/components/) subsection.

Futher, all the aspects making up a component are described as part of the ["Component"](https://www.kickstartds.com/docs/foundations/components/) subsection under ["Foundations"](https://www.kickstartds.com/docs/foundations/).
`}
      />

      <ContentBox
        topic="Dig into our docs"
        text={`
A good start can be reading through the included "README". We have added a lot of links to docs sections specific to this starter there. Creating a **Design System** can be both highly custom and opinionated. This is why we think explaining our reasoning in detail (like for using **Style Dictionary**), is super important. And for areas where there is no clear cut decision to take, we always try to add recommondations instead.

You can find our docs here: [https://www.kickstartds.com/docs/](https://www.kickstartds.com/docs/)

We also have a fully featured guide creating much of the code you use with this starter: ["Create your Design System"](https://www.kickstartds.com/docs/guides/create/).
        `}
      />
    </Section>

    <Section
      width="wide"
      spaceAfter="small"
      spaceBefore="small"
      ks-inverted="false"
      gutter="small"
      headline="Features"
    >
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#design-token-integration"
        headline="Design Token integration"
        inverted={true}
        text={`
One important part of a **Design System** is having a well structured and semantic token system in place. With **kickstartDS** this means using [**Branding Token**](https://www.kickstartds.com/docs/foundations/token/branding-token), [**Design Token**](https://www.kickstartds.com/docs/foundations/token/design-token/), and [**Component Token**](https://www.kickstartds.com/docs/foundations/token/component-token).

Learn about customizing your **Design Token** set in [our dedicated section](https://www.kickstartds.com/docs/guides/use-our-starter#design-token-integration) about it, helping you to adapt your own branding / CI / CD.
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#storybook-integration"
        headline="Storybook integration"
        inverted={true}
        text={`
**Storybook** is used as your all around workbench, when working with your **Design System**. We've written two addons to help with this, and tried making best practice use of **Storybook** as effortless for you as possible.

Learn more about it in the [dedicated doc section about this](https://www.kickstartds.com/docs/guides/use-our-starter#storybook-integration) integration.
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#react-integration"
        headline="React integration"
        inverted={true}
        text={`
There are some **React** concepts already in use deep in **kickstartDS**, and its base components you build upon. This includes using [**Render Props**](https://reactjs.org/docs/render-props.html), and adding [**Context** / **Provider**](https://reactjs.org/docs/context.html) to all components, both to enable flexible and efficient mix-and-match of components.

Learn more about it in the [docs section about this](https://www.kickstartds.com/docs/guides/use-our-starter#react-integration).
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#bedrock-layout-primitives-integration"
        headline="Bedrock Layout Primitives integration"
        inverted={true}
        text={`
When you have more general layout needs, not covered by simply using a "Section" component, we usually recommend using [**Bedrock Layout Primitives**](https://www.bedrock-layout.dev/) for those cases. We think it meshes really well with our approach to **Design Token**, you simply connect your existing **Design Token** set [to their theming approach](https://www.bedrock-layout.dev/?path=/docs/getting-started-lesson-3-spacing--page).

Learn [more about this](https://www.kickstartds.com/docs/guides/use-our-starter#bedrock-layout-primitives-integration).
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#playroom-integration"
        headline="Playroom integration"
        inverted={true}
        text={`
We're big proponents of prototyping interface as close to your real **Design System** as possible. For developers, and even code-affine designers, we really love the DX [**Playroom**](https://github.com/seek-oss/playroom) by [seek-oss](https://github.com/seek-oss) offers for this.

This is why we've included a **Playroom** integration with this starter (and because it's actually really easy to do with the way **kickstartDS** is set up) at ["playroom.config.js"](https://github.com/kickstartDS/ds-starter/blob/main/playroom.config.js).

Want to know more? Head to [our docs about it](https://www.kickstartds.com/docs/guides/use-our-starter#playroom-integration).
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#bundling"
        headline="Bundling"
        inverted={true}
        text={`
With this starter we want to cover the complete life-cycle of a **Design System**. This includes **Bundling** and [**Release handling**](#release-handling). We also want to show what we mean when we say **kickstartDS** is framework-agnostic.

Because you can either use a **Design System** based on **kickstartDS** by working with **React** templates directly, or by alternatively using **CSS** and **JavaScript** bundles to be used with the raw markup generated by components... both cases are covered in this starter.

This is also described in more details [as part of our docs here](https://www.kickstartds.com/docs/guides/use-our-starter#bundling).
        `}
      />
      <TeaserCard
        target="https://www.kickstartds.com/docs/guides/use-our-starter#release-handling"
        headline="Release Handling"
        inverted={true}
        text={`
Release handling for this starter is configured to use [**auto**](https://github.com/intuit/auto), and its semantic versioning. We use this setup for **kickstartDS** itself, you can learn more about it [in our documentation](https://www.kickstartds.com/docs/intro/upgrading#semantic-versioning-with-auto).

Configuration is added in [".autorc"](https://github.com/kickstartDS/ds-starter/blob/main/.autorc), and if you want to enable releases as part of your **CI** / **CD**... you can use [**Circle CI**](https://circleci.com/) with the included configuration file at [".circleci/config.yml"](https://github.com/kickstartDS/ds-starter/blob/main/.circleci/config.yml).

Learn more about release handling in [the dedicated docs section](https://www.kickstartds.com/docs/guides/use-our-starter#release-handling).
        `}
      />
    </Section>

    <Section
      width="max"
      headline="Read articles about kickstartDS"
      inverted={true}
      ctas={[{
        label: "All articles",
        target: "https://www.kickstartDS.com/blog"
      }, {
        label: "Open Source announcement",
        target: "https://www.kickstartds.com/blog/kickstartds-is-open-source-now-lets-start-to-democratize-design-systems-today/"
      }]}
    >
      <TeaserCard
        headline="Release Spotlight: Semantic Token"
        text="#tldr: Design Token are all the rage these days. In almost every channel from the Design System space, you can feel a crispy white noise around the broad topic of Design Token..."
        target="https://www.kickstartds.com/blog/release-spotlight-semantic-token/"
        image="https://www.kickstartds.com/static/95c85bb44b1a2efbe2b33e75b99754bd/Blog-Post_Release-Notes-01-1.png"
        inverted={false}
      />
      <TeaserCard
        headline="Release Spotlight: Container Queries"
        text="#tldr: Container Queries are another new feature coming with the Open Source release of kickstartDS. It's a proposed feature for CSS that allows the styling of elements to be..."
        target="https://www.kickstartds.com/blog/release-spotlight-container-queries/"
        image="https://www.kickstartds.com/static/3d484cc97ab1a34975e6abaa6dc28fed/Blog-Post_Release-Spotlight-02.png"
        inverted={false}
      />
      <TeaserCard
        headline="Release Spotlight: Documentation &amp; Starter"
        text="#tldr We’ve added extensive documentation around the creation of Design Systems with kickstartDS. From general intro and foundation articles and component example guides to our..."
        target="https://www.kickstartds.com/blog/release-spotlight-documentation-starter/"
        image="https://www.kickstartds.com/static/18e344141b89464fc885591443650ee6/Blog-Post_Release-Spotlight-03.png"
        inverted={false}
      />
    </Section>

    <Section
      width="narrow"
      align="left"
      spaceBefore="small"
      headline="Feedback and Support"
    >
      <TextMedia
        text={`
Feel free to [join us on Discord](https://discord.gg/mwKzD5gejY)!

If that's not your cup of tea, you can also reach out to us:

- Through the chat widget, included in all of our public facing websites
- By [writing us an email](mailto:hello@kickstartds.com)
- By [joining us on Twitter](https://twitter.com/intent/follow?screen_name=kickstartDS)
- By [writing us on WhatsApp](https://wa.me/491752131879?text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20kickstartDS.)
      `}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Demo = Template.bind({});
