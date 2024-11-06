import { LandingPageLayout } from "../components/common/landingpagelayout";
import bg from "../assets/images/slider6.jpg";
import { Text } from "../components/units";
import { motion } from "framer-motion";
import { useState } from "react";

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
