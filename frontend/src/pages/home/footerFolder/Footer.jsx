import CopyRightComp from "./CopyRightComp";
import FooterMenu from "./FooterMenu";
import SocialComponent from "./SocialComponent";

const Footer = () => {
  return (
    <footer>
      <div className="contents">
        <section className="border-b border-[#e9e9e9] bg-gray-300 py-5 md:py-9">
          <div className="container mx-auto pt-9 pr-5 pb-6 pl-5 ">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <FooterMenu />
              <SocialComponent />
              <CopyRightComp />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
