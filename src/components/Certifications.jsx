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
      className="w-full mt-8 animate-fade-up"
    >
      <p className="section-kicker">Credentials</p>
      <h2 className="section-title">
        Certifications & Achievements
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-lift glass-card border border-white/60 dark:border-slate-700/60"
          >
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base lg:text-lg">
              {cert.title}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
              <span className="font-semibold">Organization:</span> {cert.organization}
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base mt-2 text-slate-800 dark:text-slate-300 space-y-1">
              {cert.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-300 font-semibold hover:underline mt-3 inline-block text-sm md:text-base"
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
