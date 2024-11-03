import { Link } from "react-router-dom";
import { Button, Text } from "../../units";
import { motion } from "framer-motion";
import { Projects } from "../../../utils/Mocks";
import bg from "../../../assets/images/blog1.jpg";

export const CoreThree = () => {
  return (
    <div
      className="flex flex-col  gap-8 px-32 py-16 w-full"
      id="parent_div"
      style={{
        background: `url(${bg})`,
      }}
    >
      <section
        className="flex place-items-center gap-7  w-full justify-center"
        id="project-header-div"
      >
        <span className="h-[.5px] w-[30%] bg-grey" id="border" />
        <Text id="project-header" usage="click">
          Our Projects
        </Text>
        <span className="h-[.5px] w-[30%] bg-grey" id="border" />
      </section>

      <section className="flex place-items-center justify-center gap-6  ">
        <div className="flex flex-col gap-1 group/recent">
          <Link to="/">Recents</Link>
          <motion.div
            className="h-[2px]  w-full   top-7 bg-brand origin-left scale-x-0 group-hover/recent:scale-x-100 transition-transform duration-300"
            id="bottom-border"
          />
        </div>

        <div className="flex flex-col gap-1 group/more">
          <Link to="" className=" relative">
            More
          </Link>
          <motion.div
            className="h-[2px]  w-full   top-7 bg-brand origin-left scale-x-0 group-hover/more:scale-x-100 transition-transform duration-300"
            id="bottom-border"
          />
        </div>
      </section>

      <section id="project-gallery-view" className="grid grid-cols-3 gap-8 ">
        {Projects.map((project, i) => {
          return (
            <section
              className={`flex flex-col group  min-h-96 relative ${
                i == 1 ? "row-span-2" : ""
              }`}
              style={{
                background: `url(${project.image})`,
                backgroundSize: "cover", // Makes the image cover the entire section
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
              }}
            >
              <div className="absolute inset-0 bg-black-2 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 ease-in-out flex z-30 justify-center items-center">
                <Button
                  usage="brand"
                  className="opacity-0 group-hover:opacity-100  text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
                >
                  Read More
                </Button>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};
