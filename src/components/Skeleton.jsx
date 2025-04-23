import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="animate-pulse p-4 border rounded-lg shadow-sm bg-stone-100 dark:bg-gray-800 flex flex-col gap-3">
      {/* Title line */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>

      {/* Subtext lines */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5 mb-1"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-1"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
    </div>
  );
};

export default SkeletonCard;
