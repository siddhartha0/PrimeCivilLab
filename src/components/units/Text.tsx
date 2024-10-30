import classname from "classnames";
import React from "react";

type HTMLTags =
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "aside";

export type TextSize =
  | "heading-lg-default"
  | "heading-lg-mid"
  | "heading-lg-rare"
  | "heading-base-default"
  | "heading-base-mid"
  | "heading-base-rare"
  | "body-lg-default"
  | "body-lg-mid"
  | "body-lg-rare"
  | "body-md-default"
  | "body-md-mid"
  | "body-md-rare"
  | "body-sm-default"
  | "body-sm-mid"
  | "body-sm-rare"
  | "body-base-default"
  | "body-base-mid"
  | "body-base-rare";

export type TextUsage =
  | "black"
  | "black2"
  | "black3"
  | "black4"
  | "brand"
  | "default"
  | "primary"
  | "click"
  | "info"
  | "info-primary";

interface propTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as?: HTMLTags;
  children: React.ReactNode;
  size?: TextSize;
  usage?: TextUsage;
  text?: string;
  className?: string;
  secondaryFont?: boolean;
}

export const Text = React.memo(
  ({
    as: Component = "p",
    size = "body-lg-default",
    children,
    usage = "default",
    className,
    text,
    secondaryFont = false,
    ...other
  }: propTypes) => {
    return (
      <Component
        className={classname(`${className}`, {
          //----------Size & FONT WEIGHT------------//
          //------------- Default or 500px  font with different sizes-----------------//
          "text-[40px] font-normal leading-tight": size == "heading-lg-default",
          "text-[26px] font-normal": size === "heading-base-default",
          "text-[22px] font-normal": size === "body-lg-default",
          "text-[20px] font-normal": size === "body-md-default",
          "text-[17px] font-normal": size === "body-sm-default",
          "text-[15px] font-normal": size === "body-base-default",

          //-------------End of Default or 500px  font-----------------//

          //------------- Mid or 600px  & font with different sizes-----------------//
          "text-[40px] font-medium": size == "heading-lg-mid",
          "text-[26px] font-medium": size === "heading-base-mid",
          "text-[22px] font-medium": size === "body-lg-mid",
          "text-[20px] font-medium": size === "body-md-mid",
          "text-[17px] font-medium": size === "body-sm-mid",
          "text-[15px] font-medium": size === "body-base-mid",
          //-------------End of Mid or 600px  font-----------------//

          //------------- Rare or 700px  & font with different sizes-----------------//
          "text-[40px] font-semibold": size == "heading-lg-rare",
          "text-[26px] font-semibold": size === "heading-base-rare",
          "text-[22px] font-semibold": size === "body-lg-rare",
          "text-[20px] font-semibold": size === "body-md-rare",
          "text-[17px] font-semibold": size === "body-sm-rare",
          "text-[15px] font-semibold": size === "body-base-rare",
          //-------------End of Rare or 700px  font-----------------//
          //--------------------END of Size & FONT WEIGHT-------------------------//

          //----------color------------//
          "text-brand": usage == "brand",
          "text-black-2": usage == "black2",
          "text-black-3": usage == "black3",
          "text-black-4": usage == "black4",

          "text-black": usage == "default",
          "text-grey": usage == "primary",
          "text-fadish-white": usage == "info-primary",

          "text-white": usage == "click",
          "text-fadish-blue": usage == "info",

          //----------End of color------------//
        })}
        style={{ fontFamily: secondaryFont ? "Arial, sans-serif" : undefined }}
        {...other}
      >
        {text || children}
      </Component>
    );
  }
);
