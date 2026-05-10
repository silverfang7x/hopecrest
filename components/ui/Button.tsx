import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "cream";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-primary hover:bg-accentDark",
  ghost: "border border-accent/60 bg-transparent text-accent hover:border-accent hover:bg-accent/10",
  cream: "bg-cream text-primary hover:bg-cream/90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "rounded-full px-4 py-2 text-sm",
  md: "rounded-full px-5 py-2.5 text-sm",
  lg: "rounded-full px-7 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </button>
  );
}
