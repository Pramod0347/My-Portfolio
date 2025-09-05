import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Engineering",
      institution: "Sir M Visvesvaraya Institute of Technology",
      duration: "2018 – 2022",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems", 
        "Web Technologies",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      title: "Higher Secondary Education",
      institution: "Sainik School Kodagu",
      duration: "2016 – 2018",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full mt-8"
    >
      <div className="mb-8">
        <h2 className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm">
          Education
        </h2>
        <p className="text-sm lg:text-base mt-2 text-gray-600 dark:text-gray-400">
          Academic background in software engineering and computer science
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {edu.title}
              </h3>
            </div>

            {/* Institution */}
            <h4 className="text-blue-600 dark:text-blue-400 font-semibold text-base mb-2">
              {edu.institution}
            </h4>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {edu.duration}
              </span>
            </div>

            {/* Key Coursework */}
            <div>
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Key Coursework:
              </h5>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, courseIndex) => (
                  <span
                    key={courseIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-700"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
