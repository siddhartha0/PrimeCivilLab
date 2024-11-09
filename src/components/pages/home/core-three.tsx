import { Link } from "react-router-dom";
import { Button, Text } from "../../units";
import { motion } from "framer-motion";
import { Projects } from "../../../utils/Mocks";
import bg from "../../../assets/images/blog1.jpg";

export const CoreThree = () => {
  return (
    <div
      className="flex flex-col gap-8 px-32 py-16 w-full"
      id="parent_div"
      style={{
        background: `url(${bg})`,
      }}
    >
      <section
        className="flex place-items-center gap-7 w-full justify-center"
        id="project-header-div"
      >
        <span className="h-[.5px] w-[30%] bg-fadish-grey" id="border" />
        <Text id="project-header" usage="click">
          Our Projects
        </Text>
        <span className="h-[.5px] w-[30%] bg-fadish-grey" id="border" />
      </section>

      <section
        className="flex place-items-center justify-center gap-6"
        id="project-nav-div"
      >
        <div className="flex flex-col gap-1 group/recent" id="recent-div">
          <Link to="/" id="recent-link">
            Recents
          </Link>
          <motion.div
            className="h-[2px] w-full top-7 bg-brand origin-left scale-x-0 group-hover/recent:scale-x-100 transition-transform duration-300"
            id="bottom-animated-border"
          />
        </div>

        <div className="flex flex-col gap-1 group/more" id="more-div">
          <Link to="" id="more-link" className="relative text-fadish-grey">
            More
          </Link>
          <motion.div
            className="h-[2px] w-full top-7 bg-brand origin-left scale-x-0 group-hover/more:scale-x-100 transition-transform duration-300"
            id="bottom-animated-border"
          />
        </div>
      </section>

      <section id="project-gallery-view" className="grid grid-cols-3 gap-8">
        {Projects.slice(0, 5).map((project, i) => {
          return (
            <div
              key={project.title + i}
              className={`flex flex-col group min-h-96 relative ${
                i === 1 ? "row-span-2" : ""
              }`}
              id="projects-parent"
              style={{
                background: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute flex-col inset-0 bg-black-2 bg-opacity-0 group-hover:bg-opacity-60 flex z-30 justify-center transition-all duration-300"
                id="hidden-content-div"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <Text
                    className="text-white font-semibold px-4 py-2 rounded"
                    size="body-base-default"
                    secondaryFont
                    id="category"
                  >
                    {project.category}
                  </Text>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <Text
                    className="text-white font-semibold px-4 py-2 rounded"
                    id="title"
                  >
                    {project.title}
                  </Text>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 px-4">
                  <Button
                    usage="brand"
                    className="mt-7 text-white font-semibold py-2 rounded"
                    id="button"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
