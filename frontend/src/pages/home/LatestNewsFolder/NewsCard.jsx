import React from "react";

const NewsCard = () => {
  return (
    <div className="relative h-full p-4 m-2 bg-white rounded-lg border box-border">
      <a
        href="/news/cuet-pg-2025-admit-card-released-for-exams-scheduled-from-21-to-25-march-alertid-133554"
        className="block text-lg font-bold text-gray-900 hover:text-blue-600 mb-2"
      >
        CUET PG 2025: Admit Card Released for Exams Scheduled from 21 to 25 March
      </a>
      <small className="block text-gray-600 mb-2">Mar 17, 2025</small>
      <p className="text-gray-700 mb-4">
        The National Testing Agency (NTA) has released the Admit Card for candidates appearing in the
        Common University Entrance Test (CUET) PG 2025 betwee...
      </p>
      <div className="border-t pt-2 flex justify-between items-center">
        <a
          href="/news/cuet-pg-2025-admit-card-released-for-exams-scheduled-from-21-to-25-march-alertid-133554"
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Read more
          <svg
            fill="#666"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 451.846 451.847"
            className="ml-2 w-4 h-4"
          >
            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
