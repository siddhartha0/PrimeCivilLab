import { Link } from "react-router-dom";
import { Text } from "../../units";
import { motion } from "framer-motion";

export const CoreThree = () => {
  return (
    <div className="flex flex-col  gap-8 px-32 py-16 w-full" id="parent_div">
      <section
        className="flex place-items-center gap-7  w-full justify-center"
        id="project-header-div"
      >
        <span className="h-[.5px] w-[30%] bg-grey" id="border" />
        <Text id="project-header">Our Projects</Text>
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

      <section id="project-gallery-view"></section>
    </div>
  );
};
