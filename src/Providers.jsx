import { ButtonProvider } from "./components/button/ButtonComponent";
import { SectionProvider } from "./components/section/SectionComponent";
import { ContentBoxProvider } from "./components/content-box/ContentBoxComponent";

export default (props) => (
  <ButtonProvider>
    <SectionProvider>
      <ContentBoxProvider {...props} />
    </SectionProvider>
  </ButtonProvider>
);
