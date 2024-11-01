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
  const [details, setDetails] = useState(originalState);
  return (
    <div className="flex flex-col ">
      <Text
        size="body-lg-mid"
        className="cursor-pointer"
        secondaryFont
        onClick={() => setDetails((prev) => !prev)}
      >
        {title}
      </Text>
      {details && (
        <div className="collapse-content">
          <Text size="body-base-default" usage="black4">
            {content}
          </Text>
        </div>
      )}
    </div>
  );
};
