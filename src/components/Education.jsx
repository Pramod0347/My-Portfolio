import React from 'react';
 
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
    <div
      className="w-full mt-8 animate-fade-up"
    >
      <div 
        className="mb-8"
      >
        <p className="section-kicker">Academics</p>
        <h2 className="section-title">
          Education
        </h2>
        <p 
          className="text-sm lg:text-base mt-2 text-slate-600 dark:text-slate-300"
        >
          Academic background in software engineering and computer science
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 hover:shadow-lift transition-all duration-500"
          >
            {/* Header with Icon */}
            <div 
              className="flex items-center gap-3 mb-4"
            >
              <div 
                className="p-2 bg-emerald-100/70 dark:bg-emerald-900/40 rounded-lg"
              >
                <GraduationCap className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
              </div>
              <h3 
                className="text-lg font-bold text-slate-900 dark:text-slate-100"
              >
                {edu.title}
              </h3>
            </div>

            {/* Institution */}
            <h4 
              className="text-emerald-700 dark:text-emerald-300 font-semibold text-base mb-2"
            >
              {edu.institution}
            </h4>

            {/* Duration */}
            <div 
              className="flex items-center gap-2 mb-4"
            >
              <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="text-slate-600 dark:text-slate-400 text-sm">
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
                    className="px-3 py-1 bg-amber-100/80 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full border border-amber-200 dark:border-amber-700 transition-all duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
