const ExamDetailsCard = () => {
  return (
    <>
      <div className="relative h-full p-4 m-2 bg-white rounded-lg border box-border">
        <a href="/exams/neet" className="flex items-center mb-4">
          <img
            src="https://image-static.collegedunia.com/public/college_data/images/logos/NTA-Logo.png?h=44&w=44&mode=stretch"
            alt="NEET Logo"
            className="w-11 h-11 rounded-full mr-3"
          />
          <div>
            <span className="inline-flex items-center justify-center text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
              Offline Exam
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">NEET</h3>
          </div>
        </a>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Participating Colleges</span>
            <span className="font-semibold text-gray-800">1246</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Exam Date</span>
            <span className="font-semibold text-gray-800">June 23, 2025</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Exam Level</span>
            <span className="font-semibold text-gray-800 capitalize">
              National
            </span>
          </div>
        </div>
        <hr className="bg-gray-300 my-3" />
        <div>
          <a
            href="/exams/neet/application-process"
            className="flex items-center justify-between text-sm text-blue-600 hover:underline py-1"
          >
            Application Process
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 451.846 451.847"
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
          <a
            href="/exams/neet"
            className="flex items-center justify-between text-sm text-blue-600 hover:underline py-1"
          >
            Exam Info
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 451.846 451.847"
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExamDetailsCard;
