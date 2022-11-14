import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import {
  ButtonContextDefault,
  ButtonContext,
} from "@kickstartds/base/lib/button";
import { ButtonProps } from "./ButtonProps";

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLElement>
>(({ icon, variant, label, href, ...props }, ref) => (
  <ButtonContextDefault
    {...props}
    iconBefore={icon && icon !== "none" ? { icon } : undefined}
    href={href}
    label={label}
    size={"medium"}
    variant={variant}
    ref={ref}
  />
));

export const ButtonProvider: FC<PropsWithChildren<any>> = (props) => (
  <ButtonContext.Provider {...props} value={Button} />
);
