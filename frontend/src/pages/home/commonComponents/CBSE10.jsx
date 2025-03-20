import { useEffect, useState } from "react";
import PillButton from "../../../components/PillButton";

const CBSE10 = () => {
    const [cbse10Data, setCbse10Data] = useState([]);

      useEffect(() => {
        fetch("/cbse10Data.json") // Ensure this file is inside the public folder
          .then((res) => res.json())
          .then((data) => setCbse10Data(data))
          .catch((error) => console.error("Error fetching places:", error));
      }, []);
  
  return (
    <div className="contents">
      <section className="border-b border-[#e9e9e9] bg-gray-100 py-5 md:py-9">
        <div className="container mx-auto w-full px-4 block ">
          <h2 className="font-black text-xl md:text-3xl mb-3 md:mb-6 text-gray-800 capitalize">
            CBSE Class XII Board Exam
          </h2>
          <div>
            <div className=" flex items-center flex-wrap">
              {cbse10Data.map((data, index) => (
                
                  <PillButton text={data.text} href={data.href} key={index} />
                
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBSE10;
