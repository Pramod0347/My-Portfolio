import React from 'react';
 

const Certifications = () => {
  const certifications = [
    {
      title: 'Generative AI Prompt Design with Vertex AI',
      organization: 'Google Cloud',
      description: [
        'Completed hands-on labs using Vertex AI Studio for Generative AI prompt engineering.',
        'Explored advanced techniques like model tuning, zero-shot, and few-shot learning.',
        'Built an AI-powered tagline generator application using Python and Vertex AI SDK.'
      ],
      link: 'https://www.credly.com/badges/ee52b16b-ef7f-4049-b228-ab7b07a259df/public_url',
    }
    // You can add more certifications here later easily
  ];

  return (
    <div
      className="w-full mt-8"
    >
      <h2 className="relative w-fit text-xl lg:text-2xl font-medium after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
        Certifications & Achievements
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded md:rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-100 dark:hover:bg-stone-800/30 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-stone-200 dark:border-stone-700"
          >
            <h3 className="font-bold text-gray-900 dark:text-stone-100 text-base lg:text-lg">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
              <span className="font-semibold">Organization:</span> {cert.organization}
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base mt-2 text-gray-800 dark:text-gray-300 space-y-1">
              {cert.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-3 inline-block text-sm md:text-base"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;