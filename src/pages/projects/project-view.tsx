import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock data for a single project
const project = {
  id: 1,
  title: "Soil Stabilization for Highway Construction",
  image: "/placeholder.svg?height=400&width=600",
  description:
    "This project involved extensive soil stabilization techniques for a major highway construction. We employed innovative methods to improve soil strength and reduce settlement, ensuring long-term stability of the road infrastructure.",
  challenges: [
    "Dealing with expansive clay soils",
    "Mitigating potential groundwater issues",
    "Ensuring minimal environmental impact",
  ],
  solutions: [
    "Implemented lime stabilization to reduce soil plasticity",
    "Designed a comprehensive drainage system",
    "Used eco-friendly soil binders to minimize chemical usage",
  ],
};

export default function ProjectView() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <Icon icon="eva:arrow-back-fill" className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-700 mb-6">{project.description}</p>
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
                  {project.challenges.map((challenge, index) => (
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
                  {project.solutions.map((solution, index) => (
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
  );
}
