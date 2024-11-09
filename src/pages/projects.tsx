import { LandingPageLayout } from "../components/common/landingpagelayout";
import bg from "../assets/images/slider6.jpg";
import { Text } from "../components/units";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Projects as ProjectData } from "../utils/Mocks";
import { Link } from "react-router-dom";

export const ProjectsLayoutData = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Recents",
  },
  {
    id: 3,
    title: "Geo Technical",
  },
  {
    id: 4,
    title: "Soil Engineering",
  },
];

export const Projects = () => {
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(1);

  return (
    <LandingPageLayout>
      <div className="flex flex-col" id="parent">
        <section
          className="h-64 flex place-items-center justify-around bg-cover bg-center relative font-sans "
          style={{
            background: `url(${bg})`,
          }}
          id="banner"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Text
              size="heading-lg-default"
              usage="click"
              secondaryFont
              className="uppercase"
            >
              Projects
            </Text>
            <div className="flex items-center space-x-2 text-white/80">
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              <span>/</span>
              <span>Projects</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-8">
            {ProjectsLayoutData.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentLayoutIndex(category.id)}
                className={`flex flex-col cursor-pointer gap-1 group/recent text-black-4 ${
                  currentLayoutIndex === category.id
                    ? "text-brand font-medium"
                    : ""
                } `}
              >
                {category.title}

                <motion.div
                  className={`h-[2px] w-full top-7 bg-brand origin-left  scale-x-0 group-hover/recent:scale-x-100 transition-transform duration-300`}
                  id="bottom-animated-border"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {ProjectData.map((project, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative overflow-hidden"
                >
                  <Link to="">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black-2 via-black-2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-orange-500 font-medium mb-2 text-fadish-white capitalize">
                          {project.category.replace("-", " ")}
                        </div>
                        <h2 className="text-xl font-bold text-white">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      ;
    </LandingPageLayout>
  );
};
