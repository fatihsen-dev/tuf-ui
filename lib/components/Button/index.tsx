import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
   "inline-flex items-center justify-center rounded-md cursor-pointer hover:brightness-105 transition-all duration-200",
   {
      variants: {
         variant: {
            default: "",
            outline: "border",
         },
         theme: {
            primary: "bg-primary text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground",
            accent: "bg-accent text-accent-foreground",
            destructive: "bg-destructive text-destructive-foreground",
            success: "bg-success text-success-foreground",
            warning: "bg-warning text-warning-foreground",
            ring: "bg-ring text-ring-foreground",
         },
         size: {
            default: "px-4 py-2",
            sm: "px-3 py-1.5",
            md: "px-4 py-2",
            lg: "px-6 py-2.5",
            icon: "w-10 h-10",
         },
      },
      compoundVariants: [
         {
            variant: "outline",
            theme: "primary",
            className: "border-primary bg-transparent text-primary hover:bg-primary/20",
         },
         {
            variant: "outline",
            theme: "destructive",
            className: "border-destructive bg-transparent text-destructive hover:bg-destructive/20",
         },
         {
            variant: "outline",
            theme: "success",
            className: "border-success bg-transparent text-success hover:bg-success/20",
         },
         {
            variant: "outline",
            theme: "warning",
            className: "border-warning bg-transparent text-warning hover:bg-warning/20",
         },
         {
            variant: "outline",
            theme: "ring",
            className: "border-ring bg-transparent text-ring hover:bg-ring/20",
         },
      ],
      defaultVariants: {
         variant: "default",
         theme: "primary",
         size: "md",
      },
   }
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ variant, theme, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return <Comp className={cn(buttonVariants({ variant, theme, size }))} {...props} ref={ref} />;
   }
);

Button.displayName = "Button";
