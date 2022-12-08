export default [
  {
    group: "Button",
    name: "Default",
    code: `
      <Button
        href="#"
        label="Select"
      />
    `,
  },
  {
    group: "Teaser Card",
    name: "Default",
    code: `
      <TeaserCard
        image="https://picsum.photos/seed/kdscontentbox/500/300"
        headline="Lorem ipsum..."
        text="... dolor sit"
        target="https://www.kickstartDS.com/"
        inverted="false"
      />
    `,
  },
  {
    group: "Teaser Card",
    name: "Inverted",
    code: `
      <TeaserCard
        image="https://picsum.photos/seed/kdscontentbox/500/300"
        headline="Lorem ipsum..."
        text="... dolor sit"
        target="https://www.kickstartDS.com/"
        inverted="true"
      />
    `,
  },
  {
    group: "Section",
    name: "Default",
    code: `
      <Section mode="tile">
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="Lorem ipsum..."
          text="... dolor sit"
          target="https://www.kickstartDS.com/"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="Lorem ipsum..."
          text="... dolor sit"
          target="https://www.kickstartDS.com/"
          inverted="false"
        />
        <TeaserCard
          image="https://picsum.photos/seed/kdscontentbox/500/300"
          headline="Lorem ipsum..."
          text="... dolor sit"
          target="https://www.kickstartDS.com/"
          inverted="false"
        />
      </Section>
    `,
  },

];
