import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import {
  ButtonContextDefault,
  ButtonContext,
} from "@kickstartds/base/lib/button";

import { ButtonProps } from "./ButtonProps";

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLElement>
>(({
  label,
  target,
  size = "medium",
  variant = "secondary",
  disabled = false,
  ...props
}, ref) => (
  <ButtonContextDefault
    {...props}
    href={target}
    label={label}
    size={size}
    variant={
      variant === 'primary'
        ? 'solid'
        : variant === 'secondary'
          ? 'outline'
          : 'clear'
    }
    disabled={disabled}
    ref={ref}
  />
));

export const ButtonProvider: FC<PropsWithChildren<any>> = (props) => (
  <ButtonContext.Provider {...props} value={Button} />
);
