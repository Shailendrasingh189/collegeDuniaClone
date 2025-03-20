import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialComponent = () => {
  const socialIcons = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/collegedunia",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/collegedunia/",
    },
    {
      icon: <FaTwitter />,
      link: "https://www.twitter.com/college_dunia",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UClPHFJPqR5mNDy_-pxDCVnA/videos",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/3860037",
    },
    { icon: <FaRss />, link: "https://collegedunia.com/feed.xml" },
  ];
  return (
    <div className="flex flex-col md:flex-row  md:items-end justify-between p-4 text-gray-600">
      <div className="relative w-full px-2 basis-0 flex-grow max-w-full">
        <h4 className="font-bold text-lg capitalize">Other Links</h4>
        <div className="flex items-center flex-wrap mt-2 -ml-3">
          {[
            { name: "About Collegedunia", link: "/about" },
            { name: "Contact Us", link: "/contact-us" },
            { name: "Advertising", link: "/advertise-with-us" },
            { name: "Career", link: "/career" },
            { name: "Terms & Conditions", link: "/website-usage-policy" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="px-3 py-1 text-gray-500 hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-500 hover:text-white text-2xl"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialComponent;
