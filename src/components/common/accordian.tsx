import { useState } from "react";
import { Text } from "../units";

interface propTypes {
  title: string;
  content: string;
  originalState?: boolean;
}

export const Accordian = ({
  title,
  content,
  originalState = false,
}: propTypes) => {
  const [isOpen, setIsOpen] = useState(originalState);
  return (
    <div className="flex flex-col ">
      <Text
        size="body-lg-mid"
        className="cursor-pointer"
        secondaryFont
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {title}
      </Text>
      {isOpen && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
          }`}
          style={{ transitionProperty: "max-height, opacity, padding" }}
        >
          <Text size="body-base-default" usage="black4">
            {content}
          </Text>
        </div>
      )}
    </div>
  );
};
