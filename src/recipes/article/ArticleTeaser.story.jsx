import { Section } from "../../components/section/SectionComponent";
import { TeaserCard } from "../../components/teaser-card/TeaserCardComponent";

const Recipe = () => (
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
      text="#tldr We’ve added extensive documentation around the creation of Design Systems with kickstartDS. From general intro and foundation articles and component example guides to our..."
      target="https://www.kickstartds.com/blog/release-spotlight-documentation-starter/"
      image="https://www.kickstartds.com/static/18e344141b89464fc885591443650ee6/Blog-Post_Release-Spotlight-03.png"
      inverted={false}
    />
  </Section>
);

export const ArticleTeaser = Recipe.bind({});
