import classnames from "classnames";
import { HTMLAttributes, FC, PropsWithChildren } from "react";

import { HeadlineContext } from "@kickstartds/base/lib/headline";
import { defaultRenderFn } from "@kickstartds/core/lib/core";

import { HeadlineProps } from "./HeadlineProps";

interface RenderFunctions {
  renderContent?: typeof defaultRenderFn;
  renderSubheadline?: typeof defaultRenderFn;
}

export const Headline: FC<
  HeadlineProps & RenderFunctions & HTMLAttributes<HTMLElement>
> = ({
  text,
  sub,
  switchOrder = false,
  level = "h2",
  style = "h2",
  spaceAfter = "small",
  renderContent = defaultRenderFn,
  renderSubheadline = defaultRenderFn,
  ...props
}) => {
  const TagName = level;

  return (
    <>
      {text || sub ? (
        <>
          <header
            className={classnames(
              "c-headline",
              `c-headline--align-left`,
              spaceAfter && `c-headline--space-after-${spaceAfter}`,
            )}
            {...props}
          >
            {sub && switchOrder && (
              <p className="c-headline__subheadline">
                {renderSubheadline(sub)}
              </p>
            )}
            <TagName
              className={classnames(
                "c-headline__headline",
                style !== "none" &&
                  style !== level &&
                  `c-headline__${style}`
              )}
            >
              {renderContent(text)}
            </TagName>
            {sub && !switchOrder && (
              <p className="c-headline__subheadline">
                {renderSubheadline(sub)}
              </p>
            )}
          </header>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export const HeadlineProvider: FC<PropsWithChildren<any>> = (props) => (
  <HeadlineContext.Provider {...props} value={Headline} />
);
