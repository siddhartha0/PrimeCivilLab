import React from "react";
import classnames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "default" | "small";
  usage?: "brand" | "click" | "primary" | "default" | "";
  className?: string;
  secondaryFont?: boolean;
}

export const Button = React.memo(
  ({
    children,
    className,
    size = "default",
    usage = "default",
    secondaryFont = false,
    ...other
  }: ButtonProps): JSX.Element => {
    return (
      <button
        className={classnames(
          `${className} flex place-items-center justify-center gap-3   font-medium leading-7 min-w-[150px] `,

          {
            //--------- Padding && Border Radius ------------//

            //--------16px(t,b) 12px(r,l) padding with different border radius---------
            "py-2 px-3": size === "default",
            //--------End of 16px(t,b) 12px(r,l) padding with different border radius---------

            //--------8px(t,b) 12px(r,l) padding with different border radius---------
            "py-1 px-6 ": size === "small",
            //--------End of 8px(t,b) 12px(r,l) padding with different border radius---------

            //--------- End of Padding && Border Radius------------//

            //--------- Background Color------------//
            "bg-fadish-blue text-white ": usage === "default",
            "bg-yellow text-white ": usage === "primary",
            "bg-brand text-white ": usage === "brand",
            "bg-white text-fade-blue ": usage === "click",
            //--------- End of Background Color------------//
          }
        )}
        style={{ fontFamily: secondaryFont ? "Arial, sans-serif" : undefined }}
        {...other}
      >
        {children}
      </button>
    );
  }
);
