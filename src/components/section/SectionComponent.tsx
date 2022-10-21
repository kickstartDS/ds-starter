import { FC, forwardRef, HTMLAttributes, PropsWithChildren } from "react";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";

export const Section = forwardRef<
  HTMLDivElement,
  SectionProps & HTMLAttributes<HTMLDivElement>
>(({ headline, ...props }, ref) => (
  <SectionContextDefault
    {...props}
    headline={{
      content: headline,
    }}
    ref={ref}
  />
));

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider value={Section} {...props} />
);
