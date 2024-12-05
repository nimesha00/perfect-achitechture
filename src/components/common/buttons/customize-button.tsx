import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ImArrowUpRight2 } from "react-icons/im";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primaryGold text-white",
        defaultError: "bg-errorButton text-white hover:opacity-80 text-white",
        defaultSuccess: "bg-successGreen text-white hover:opacity-80",
        fillWhite: "bg-white text-primary",
        fillGray: "bg-featuredGray text-primary hover:opacity-80",
        fillBlue: "bg-primaryBlue text-white hover:opacity-80",
        fillSecondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outlineInput:
          "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        outlineGreen:
          "border border-primaryGreen bg-primaryGreen/0 text-primaryGreen hover:opacity-80",
        outlineGray:
          "border border-primary bg-primary/0 text-primary hover:opacity-80",
        outlineRed:
          "border border-errorButton bg-primary/0 text-errorButton hover:opacity-80",
        outlineBlue:
          "border border-primaryBlue bg-primaryBlue/0 text-primaryBlue hover:opacity-80",
        borderGray:
          "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        secondary: "bg-transparent text-primaryGreen hover:opacity-80",
        ternary: "bg-transparent text-white hover:bg-white hover:text-primary",
        icon: "bg-primary text-white hover:opacity-80 rounded-full p-[6px]",
        redText: "bg-transparent text-error hover:opacity-80",
        grayText: "bg-transparent text-primary hover:opacity-80",
        blueText: "bg-transparent text-primaryBlue hover:opacity-80",
        greenText: "bg-transparent text-primaryGreen hover:opacity-80",
        whiteText: "bg-transparent text-white hover:underline",
        transparent: "bg-transparent hover:opacity-80",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      height: {
        default: "h-12",
        sm: "h-8",
      },
      width: {
        default: "w-12 ",
        sm: "w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      height: "default",
      width: "default",
      isDisabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  //arrow?: boolean;
  //startIcon?: React.ReactElement;
}

const CustomizeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      height,
      width,
      asChild = false,
      loading = false,
      // arrow = false,
      // startIcon,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        //className={cn(buttonVariants({ size, isDisabled: disabled }))}
        className="flex flex-row items-center hover:scale-105"
        ref={ref}
        {...props}
        disabled={loading || disabled}
      >
        <div
          className={`${cn(
            buttonVariants({ variant, className, height })
          )} px-6 py-2 !w-auto`}
        >
          {children}
        </div>

        <div
          className={`-ml-2 w-[18px] !px-0 h-[10px] ${cn(
            buttonVariants({ variant })
          )}`}
        ></div>
        <div
          className={`-ml-2 rounded-full flex items-center !px-0 !py-0 ${cn(
            buttonVariants({ variant, height, width })
          )}`}
        >
          <ImArrowUpRight2 />
        </div>
        {/* {loading ? (
          <>
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <></>
        )} */}
      </Comp>
    );
  }
);
CustomizeButton.displayName = "Button";

export { CustomizeButton, buttonVariants };
