import { LandingPageLayout } from "../../components/common/landingpagelayout";
import bg from "../../assets/images/slider6.jpg";
import { Text } from "../../components/units";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Projects as ProjectData } from "../../utils/Mocks";
import { Link } from "react-router-dom";

export const ProjectsLayoutData = [
  { id: 1, title: "All", content: "all" },
  { id: 2, title: "Recents", content: "recent" },
  { id: 3, title: "Geo Technical", content: "Geo Engineering" },
  { id: 4, title: "Soil Engineering", content: "Soil Engineering" },
];

export const Projects = () => {
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(1);
  const [cateogoryName, setCategoryName] = useState("all");
  const [prevLayoutIndex, setPrevLayoutIndex] = useState(1); // Track previous layout index

  // Determine direction based on the category change
  const direction = currentLayoutIndex > prevLayoutIndex ? -100 : 100;

  // Filter projects based on category and recency
  const filterProjects = () => {
    const now = new Date();
    return ProjectData.filter((project) => {
      if (cateogoryName === "all") return true;
      if (cateogoryName === "recent") {
        const projectDate = new Date(project.date);
        const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
        return projectDate >= oneYearAgo;
      }
      return project.category === cateogoryName;
    });
  };

  return (
    <LandingPageLayout>
      <div className="flex flex-col" id="parent">
        <section
          className="h-64 flex place-items-center justify-around bg-cover bg-center relative font-sans"
          style={{ background: `url(${bg})` }}
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
                onClick={() => {
                  setPrevLayoutIndex(currentLayoutIndex); // Update previous layout index
                  setCurrentLayoutIndex(category.id);
                  setCategoryName(category.content);
                }}
                className={`flex flex-col cursor-pointer gap-1 group/recent text-black-4 ${
                  currentLayoutIndex === category.id
                    ? "text-brand font-medium"
                    : ""
                } `}
              >
                {category.title}
                <motion.div
                  className={`h-[2px] w-full top-7 bg-brand origin-left scale-x-0 group-hover/recent:scale-x-100 transition-transform duration-300`}
                  id="bottom-animated-border"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={cateogoryName} // Change key when category changes
              initial={{ opacity: 0, x: direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filterProjects().map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden"
                >
                  <Link to={`project-view/${project.id}`}>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </LandingPageLayout>
  );
};
