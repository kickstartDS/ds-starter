import { ButtonProvider } from "./button/ButtonComponent";
import { SectionProvider } from "./section/SectionComponent";
import { TeaserBoxProvider } from "./teaser-card/TeaserCardComponent";
import { HeadlineProvider } from "./headline/HeadlineComponent";
import { BedrockProvider } from "../bedrock/BedrockProvider";

export default (props) => (
  <BedrockProvider>
    <ButtonProvider>
      <HeadlineProvider>
        <SectionProvider>
          <TeaserBoxProvider {...props} />
        </SectionProvider>
      </HeadlineProvider>
    </ButtonProvider>
  </BedrockProvider>
);
