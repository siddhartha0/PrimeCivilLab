import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Projects } from "../../utils/Mocks";
import { LandingPageLayout } from "../../components/common/landingpagelayout";
import { Text } from "../../components/units";

export default function ProjectView() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState<(typeof Projects)[0]>();

  useEffect(() => {
    const project = Projects.find(
      (project) => project.id === parseInt(id ?? "")
    );
    setProjectDetails(project);
  }, [id]);

  return (
    <LandingPageLayout>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl flex flex-col gap-4 mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <Icon icon="eva:arrow-back-fill" className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className=" flex flex-col gap-3 max-w-7xl">
            <div className="flex space-x-2 text-black">
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-brand">
                Projects
              </Link>
              <span>/</span>
              <Text usage="brand" size="body-base-default">
                Project-Details
              </Text>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={projectDetails?.image}
              alt={projectDetails?.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {projectDetails?.title}
              </h1>
              <p className="text-gray-700 mb-6">{projectDetails?.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Challenges
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {projectDetails?.difficulty.map((challenge, index) => (
                      <li key={index} className="mb-2">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Solutions
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {projectDetails?.solution.map((solution, index) => (
                      <li key={index} className="mb-2">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </LandingPageLayout>
  );
}
