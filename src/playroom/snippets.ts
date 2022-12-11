export default [
  {
    group: "Button",
    name: "Native Button",
    code: `
      <Button
        label="Native Button"
        variant="primary"
      />
    `,
  },
  {
    group: "Button",
    name: "Link Button",
    code: `
      <Button
        label="Link Button"
        variant="secondary"
        target="#"
      />
    `,
  },
  {
    group: "Button",
    name: "Disabled Button",
    code: `
      <Button
        label="Disabled Button"
        variant="primary"
        disabled={true}
      />
    `,
  },
  {
    group: "Button",
    name: "Primary Button",
    code: `
      <Button
        label="Primary Button"
        variant="primary"
      />
    `,
  },
  {
    group: "Button",
    name: "Secondary Button",
    code: `
      <Button
        label="Secondary Button"
        variant="secondary"
      />
    `,
  },
  {
    group: "Button",
    name: "Tertiary Button",
    code: `
      <Button
        label="Tertiary Button"
        variant="tertiary"
      />
    `,
  },
  {
    group: "Button",
    name: "Button Bar with Bedrock",
    code: `
      <Split gutter="md">
        <Button label="Primary Button" variant="primary" />
        <Button label="Secondary Button" variant="secondary" />
        <Button label="Tertiary Button" variant="tertiary" />
      </Split>
    `,
  },
  {
    group: "Headline",
    name: "H1",
    code: `
      <Headline level="h1" style="h1" text="Headline level h1" />
    `,
  },
  {
    group: "Headline",
    name: "H2",
    code: `
      <Headline level="h2" style="h2" text="Headline level h2" />
    `,
  },
  {
    group: "Headline",
    name: "H3",
    code: `
      <Headline level="h3" style="h3" text="Headline level h3" />
    `,
  },
  {
    group: "Headline",
    name: "H4",
    code: `
      <Headline level="h4" style="h4" text="Headline level h4" />
    `,
  },
  {
    group: "Headline",
    name: "Subheadline",
    code: `
      <Headline text="With a subheadline" sub="This is a subheadline, displayed below the headline" />
    `,
  },
  {
    group: "Headline",
    name: "Subheadline Order Swapped",
    code: `
      <Headline text="With a swapped subheadline" sub="This is a subheadline, displayed above the headline" switchOrder={true} />
    `,
  },
  {
    group: "Headline",
    name: "Markdown",
    code: `
      <Headline text="With *Markdown* use" sub="This is a subheadline, displayed **below the headline**" />
    `,
  },
  {
    group: "Teaser Card",
    name: "With Image",
    code: `
      <TeaserCard
        image="https://picsum.photos/seed/kdscontentbox/500/300"
        headline="TeaserCard headline"
        text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
        target="#"
        inverted="false"
      />
    `,
  },
  {
    group: "Teaser Card",
    name: "With Image Inverted",
    code: `
      <TeaserCard
        image="https://picsum.photos/seed/kdscontentbox/500/300"
        headline="TeaserCard headline"
        text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
        target="#"
        inverted="true"
      />
    `,
  },
  {
    group: "Section",
    name: "With TeaserCards",
    code: `
      <Section mode="tile" headline="Section headline">
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
      </Section>
    `,
  },
  {
    group: "Section",
    name: "With CTAs",
    code: `
      <Section mode="tile" headline="Section headline" ctas={[
        {
          label: "Section CTA 1",
          target: "#",
        },
        {
          label: "Section CTA 2",
          target: "#",
        },
        {
          label: "Section CTA 3",
          target: "#",
        }
      ]}>
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="TeaserCard headline"
          text="TeaserCard text content that can be quite a bit longer, and use **Markdown**"
          target="#"
          inverted="false"
        />
      </Section>
    `,
  },
  {
    group: "Recipe",
    name: "Article Teaser",
    code: `
      <Section
        headline="Read articles about kickstartDS"
        background="accent"
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
          text="#tldr: Container Queries are another new feature coming with the Open Source release of kickstartDS. It's a proposed feature for CSS that allows the styling of elements to be..."
          target="https://www.kickstartds.com/blog/release-spotlight-container-queries/"
          image="https://www.kickstartds.com/static/3d484cc97ab1a34975e6abaa6dc28fed/Blog-Post_Release-Spotlight-02.png"
          inverted={false}
        />
      </Section>
    `
  }
];
