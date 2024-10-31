import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Text } from "../../units";

interface propTypes {
  bgPics: string;
  title: string;
  time: Date;
  content: string;
}

export const BlogsAndArticles = ({
  bgPics,
  title,
  time,
  content,
}: propTypes) => {
  return (
    <div
      className="relative flex flex-col gap-2 w-full group overflow-hidden py-12"
      style={{
        background: `url(${bgPics})`,
      }}
    >
      <div className="absolute  inset-0 bg-black-2 opacity-60 "></div>

      {/* Dark overlay and button on hover */}
      <div className="absolute inset-0 bg-black-2 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 ease-in-out flex z-30 justify-center items-center">
        <Button
          usage="brand"
          className="opacity-0 group-hover:opacity-100  text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
        >
          Read More
        </Button>
      </div>

      {/* Content Section */}
      <section
        className="relative  flex flex-col gap-4 p-4 shadow-xl  "
        id="message"
      >
        <Text
          size="heading-base-mid"
          className="leading-tight line-clamp-2 "
          secondaryFont
          usage="brand"
        >
          {title}
        </Text>

        <div className="flex items-center gap-2 mt-4 ">
          <Icon icon="carbon:time" color="#fff" />
          <Text size="body-sm-default" usage="click">
            {time.toISOString().split("T")[0]}
          </Text>
        </div>

        <Text size="body-sm-default" usage="click" className="line-clamp-5">
          {content}
        </Text>
      </section>
    </div>
  );
};
