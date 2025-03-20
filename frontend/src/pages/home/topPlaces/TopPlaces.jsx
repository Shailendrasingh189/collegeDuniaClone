import { useEffect, useState } from "react";
import TopPlacesCard from "./TopPlacesCard";
import SliderComp from "../../../components/SliderComp";

const TopPlaces = () => {
  const [placesData, setPlacesData] = useState([]);

  const responsive = [
    {
      breakpoint: 2080, 
      settings: { slidesToShow: 6, slidesToScroll: 6 },
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
    fetch("/topPlaces.json") // Ensure this file is inside the public folder
      .then((res) => res.json())
      .then((data) => setPlacesData(data))
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  return (
    <div className="contents">
      <section className="border-b border-[#e9e9e9] bg-white py-5 md:py-9">
        <div className="container mx-auto w-full px-4 block bg-white">
          <h2 className="font-black text-xl md:text-3xl mb-3 md:mb-6 text-gray-800 capitalize">
            Top Study Places
          </h2>
          <div className="">
            {placesData.length > 0 ? (
              <SliderComp responsive={responsive}>
                {placesData.map((place, index) => (
                  <TopPlacesCard place={place} key={index} />
                ))}
              </SliderComp>
            ) : (
              <p className="text-gray-500 text-center">Loading places...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopPlaces;
