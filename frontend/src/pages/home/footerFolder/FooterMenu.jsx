import React from "react";

const FooterMenu = () => {
  const menuItems = [
    {
      title: "Top Colleges",
      links: [
        { name: "M.B.A", href: "/mba-colleges" },
        { name: "B.Tech/B.E", href: "/btech-colleges" },
        { name: "MCA", href: "/mca-colleges" },
        { name: "BCA", href: "/bca-colleges" },
        { name: "M.Tech", href: "/mtech-colleges" },
        { name: "MA", href: "/ma-colleges" },
        { name: "BA", href: "/ba-colleges" },
      ],
    },
    {
      title: "Top Universities",
      links: [
        { name: "Engineering", href: "/engineering-colleges" },
        { name: "Management", href: "/management-colleges" },
        { name: "Medical", href: "/medical-colleges" },
        { name: "Law", href: "/law-colleges" },
        { name: "Commerce", href: "/commerce-colleges" },
        { name: "Science", href: "/science-colleges" },
        { name: "Arts", href: "/arts-colleges" },
      ],
    },
    {
      title: "Top Exams",
      links: [
        { name: "CAT", href: "/exams/cat" },
        { name: "GATE", href: "/exams/gate" },
        { name: "JEE-Main", href: "/exams/jee-main" },
        { name: "NEET", href: "/exams/neet" },
        { name: "XAT", href: "/exams/xat" },
        { name: "CLAT", href: "/exams/clat" },
        { name: "MAT", href: "/exams/mat" },
      ],
    },
    {
      title: "Study Abroad",
      links: [
        { name: "Canada", href: "/canada" },
        { name: "USA", href: "/usa" },
        { name: "UK", href: "/uk" },
        { name: "UAE", href: "/uae" },
        { name: "Australia", href: "/australia" },
        { name: "Germany", href: "/germany" },
        { name: "Sweden", href: "/sweden" },
        // { name: "Ireland", href: "/ireland" },
        // { name: "New Zealand", href: "/new-zealand" },
        // { name: "Hong Kong", href: "/hong-kong" },
        // { name: "Singapore", href: "/singapore" },
        // { name: "Malaysia", href: "/malaysia" },
        // { name: "Netherlands", href: "/netherlands" },
        // { name: "Italy", href: "/italy" },
      ],
    },
    {
      title: "Board Exams",
      links: [
        { name: "CBSE Class 12", href: "/exams/cbse-class-xii" },
        {
          name: "CBSE Class 12th Results",
          href: "/exams/cbse-class-xii/results",
        },
        {
          name: "CBSE Class 12th Syllabus",
          href: "/exams/cbse-class-xii/syllabus",
        },
        {
          name: "CBSE Class 12th Exam Dates",
          href: "/exams/cbse-class-xii/exam-dates",
        },
        { name: "CBSE Class 10", href: "/exams/cbse-x" },
        { name: "CBSE Class 10th Result", href: "/exams/cbse-x/results" },
        { name: "CBSE Class 10th Syllabus", href: "/exams/cbse-x/syllabus" },
      ],
    },
  ];

  return (
    <div className="hidden md:flex md:flex-row items-start justify-start md:flex-nowrap p-4 text-gray-600 border-b border-gray-300 ">
      {menuItems.map((menu, index) => (
        <div
          key={index}
          className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        >
          <h4 className="font-bold min-w-32 w-full text-lg text-gray-800 mb-2">{menu.title}</h4>
          <div className="space-y-1 hidden md:block">
            {menu.links.map((link, linkIndex) => (
              <div key={linkIndex} className="text-gray-500 hover:text-gray-600 px-1">
                <a href={link.href} className="text-base capitalize">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
