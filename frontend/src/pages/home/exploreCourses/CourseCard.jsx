const CourseCard = () => {
  return (
      <div className="relative h-full p-4 m-2 bg-white rounded-lg border box-border">
        <div>
          <span className="rounded-md bg-gray-200 text-sm text-gray-600 font-medium px-2 py-1">
            Full Time
          </span>
        </div>

        <h1 className="text-gray-800 text-lg font-semibold py-2">
          BCA General
        </h1>

        <div className="w-full space-y-3">
          {[
            { label: "Duration", value: "3 Years" },
            { label: "Total Avg. Fees", value: "37.34 K" },
            { label: "Courses", value: "1234" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-2 text-sm">
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-right text-gray-800 text-sm font-bold">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-3 border-gray-300" />

        {/* Footer Section */}
        <div className="text-blue-600 text-base font-medium cursor-pointer hover:text-blue-800">
          Course Overview →
        </div>
      </div>
  );
};

export default CourseCard;
