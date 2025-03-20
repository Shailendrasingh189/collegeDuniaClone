import { useEffect, useState } from "react";
import SliderComp from "../../../components/SliderComp";
import ExamDetailsCard from "./ExamDetailsCard";

const TopExams = () => {
  const [coursesData, setCoursesData] = useState([]);
  // const categories = ["Bachelors", "Masters", "Diploma", "Certification"];

  const responsive = [
    {
      breakpoint: 2080,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1280, // Laptops
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1024, // Tablets
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 768, // Mobile
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 480, // Small screens
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  useEffect(() => {
    fetch("/topPlaces.json")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);

  return (
    <section className="border-b border-[#e9e9e9] bg-white py-5 md:py-9">
      <div className="container mx-auto px-4 bg-white">
        {/* Heading */}
        <h2 className="font-black text-xl md:text-3xl mb-4 md:mb-6 text-gray-800 capitalize">
          Top Exams
        </h2>


        {/* top exam Slider */}
        <SliderComp responsive={responsive}>
          {coursesData.length > 0 ? (
            coursesData.map((course, index) => <ExamDetailsCard key={index} className="m-3" />)
          ) : (
            <p className="text-gray-500 text-center py-4">Loading courses...</p>
          )}
        </SliderComp>
      </div>
    </section>
  );
};

export default TopExams;
