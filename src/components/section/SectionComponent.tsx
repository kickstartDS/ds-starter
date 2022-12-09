import { HTMLAttributes, FC, PropsWithChildren } from "react";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import { Button } from "../button/ButtonComponent";

export const Section: FC<
  SectionProps & HTMLAttributes<HTMLElement>
> = ({
  headline,
  width = "default",
  gutter = "default",
  mode = "default",
  style = "default",
  spaceBefore = "default",
  spaceAfter = "default",
  inverted = false,
  ctas = [],
  ...props
}) => {
  return (
    <>
      <SectionContextDefault
        {...props}
        background={style}
        headline={{
          text: headline,
          content: !!headline,
        }}
        width={width}
        gutter={gutter}
        mode={mode}
        spaceBefore={spaceBefore}
        spaceAfter={ctas && ctas.length > 0 ? 'none' : spaceAfter}
        inverted={inverted}
      />
      {ctas && ctas.length > 0 && (
        <SectionContextDefault
          background={style}
          width="default"
          gutter={gutter}
          mode="default"
          spaceBefore="small"
          spaceAfter={spaceAfter}
          inverted={inverted}
        >
          {ctas.filter((cta) => cta.label && cta.target).map((cta, index) => (
            <Button
              key={index}
              label={cta.label}
              target={cta.target}
              variant={
                index === 0
                  ? "primary"
                  : index === 1
                    ? "secondary"
                    : "tertiary"
              }
              size="small"
            />
          ))}
        </SectionContextDefault>
      )}
    </>
  );
};

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider {...props} value={Section} />
);
