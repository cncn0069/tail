// src/components/Card/index.tsx

import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};
const cardClasses = cva(
  // 기본 스타일
  "overflow-hidden transition-all max-w-md",
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-5",
        lg: "p-8",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "full",
      },
      variant: {
        default: "bg-white border border-gray-200",
        outlined:
          "bg-white border border-gray-500 hover:border-gray-400 transition-colors",
        elevated: "bg-white shadow-lg hover:shadow-xl transition-shadow",
      },
    },
  },
);

const cardTv = tv({
  base: "overflow-hidden transition-all max-w-md",
  variants: {
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "full",
    },
    variant: {
      default: "border border-gray-200",
      outlined:
        "border border-gray-500 hover:border-gray-400 transition-colors",
      elevated: "shadow-lg hover:shadow-xl transition-shadow",
    },
  },
  compoundVariants: [
    {
      variant: ["default", "outlined", "elevated"],
      class: "bg-white",
    },
  ],
  defaultVariants: {
    padding: "none",
    radius: "none",
    variant: "default",
  },
});

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className,
}: CardProps) => {
  return (
    <div
      //   className={twMerge(
      //     clsx(cardClasses({ variant, padding, radius, className })),
      //   )}
      className={cardTv({ variant, padding, radius, className })}
    >
      {children}
    </div>
  );
};

export default Card;
