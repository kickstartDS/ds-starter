import { HTMLAttributes, FC, forwardRef, PropsWithChildren } from "react";
import {
  ContentBoxContextDefault,
  ContentBoxContext,
} from "@kickstartds/base/lib/content-box";
import { ContentBoxProps } from "./ContentBoxProps";

export const ContentBox = forwardRef<
  HTMLDivElement,
  ContentBoxProps & HTMLAttributes<HTMLElement>
>(({ image, topic, text, ...props }, ref) => (
  <ContentBoxContextDefault
    {...props}    
    ratio={"none"}
    alignement={"left"}
    topic={topic}
    image={image}
    text={text}
    ref={ref}
  />
));

export const ContentBoxProvider: FC<PropsWithChildren<any>> = (props) => (
  <ContentBoxContext.Provider {...props} value={ContentBox} />
);
