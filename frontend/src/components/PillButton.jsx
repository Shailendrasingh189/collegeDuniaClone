import React from "react";

const PillButton = ({ text, href }) => {
  return (
    <div className="p-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center items-center h-7 md:h-12 my-1 px-3 py-1 bg-white text-gray-700 font-medium text-xs md:text-lg rounded-3xl border whitespace-nowrap no-underline  hover:bg-gray-300 transition"
      >
        {text}
        <svg
          width="23"
          height="23"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 23 23"
          className="ml-2 hidden md:block"
        >
          <path
            d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default PillButton;
