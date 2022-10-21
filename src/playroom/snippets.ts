export default [
  {
    group: "Button",
    name: "More Icon",
    code: `
      <Button
        href="#"
        icon="chevron-right"
        label="More info"
      />
    `,
  },
  {
    group: "Button",
    name: "Delete Icon",
    code: `
      Button
        href="#"
        icon="close"
        label="Delete"
      />
    `,
  },
  {
    group: "Button",
    name: "No Icon",
    code: `
      <Button
        href="#"
        label="Select"
        icon={false}
      />
    `,
  },
  {
    group: "Content Box",
    name: "Default",
    code: `
      <ContentBox
        topic="Lorem ipsum..."
        text="... dolor sit"
        image="https://picsum.photos/seed/kdscontentbox/500/300"
      />
    `,
  },
  {
    group: "Section",
    name: "Default",
    code: `
      <Section mode="tile">
        <ContentBox
          topic="Lorem ipsum..."
          text="... dolor sit"
          image="https://picsum.photos/seed/kdscontentbox/500/300"
        />
        <ContentBox
          topic="Lorem ipsum..."
          text="... dolor sit"
          image="https://picsum.photos/seed/kdscontentbox/500/300"
        />
        <ContentBox
          topic="Lorem ipsum..."
          text="... dolor sit"
          image="https://picsum.photos/seed/kdscontentbox/500/300"
        />
      </Section>
    `,
  },
 
];
