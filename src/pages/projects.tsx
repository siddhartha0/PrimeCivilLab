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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-8">
            {ProjectsLayoutData.map((category) => (
              <button
                key={category.id}
                // onClick={() => setActiveCategory(category.id)}
                className={`text-lg font-medium transition-colors",
                  activeCategory === category.id
                    ? "text-orange-500"
                    : "text-gray-600 hover:text-orange-500"`}
              >
                {category.title}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-orange-500 font-medium mb-2 capitalize">
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

        <section
          className="h-64 flex place-items-center justify-around bg-cover bg-center font-sans "
          style={{
            background: `url(${bg})`,
          }}
          id="banner"
        >
          <Text usage="click" size="heading-lg-mid">
            Projects
          </Text>
        </section>

        <section id="content-div" className="flex flex-col gap-4 p-14">
          <div className="flex place-items-center gap-4">
            {ProjectsLayoutData.map((layout) => (
              <div
                className={`flex flex-col cursor-pointer gap-1 group/recent `}
                id="recent-div"
                key={layout.id}
              >
                <p
                  id="recent-link"
                  className={`text-black-4 ${
                    currentLayoutIndex === layout.id
                      ? "text-brand font-medium"
                      : ""
                  }`}
                >
                  {layout.title}
                </p>
                <motion.div
                  className={`h-[2px] w-full top-7 bg-brand origin-left  scale-x-0 group-hover/recent:scale-x-100 transition-transform duration-300`}
                  id="bottom-animated-border"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      ;
    </LandingPageLayout>
  );
};
