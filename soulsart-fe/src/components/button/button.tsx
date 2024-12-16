import "./button.scss";
import { clsx } from "clsx";
import { ComponentProps } from "react";

export type ButtonVariants = "primary" | "clear";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
} & ComponentProps<"button">;
export const Button = ({
  children,
  onClick,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        "button",
        !!variant && `button--${variant}`,
        !!className && className,
      )}
    >
      {children}
    </button>
  );
};
