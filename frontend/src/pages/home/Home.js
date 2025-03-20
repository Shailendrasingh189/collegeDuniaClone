import Footer from "./footerFolder/Footer";
import CBSE12 from "./commonComponents/CBSE12";
import CBSE10 from "./commonComponents/CBSE10";
import TopCourses from "./commonComponents/TopCourses";
import ExploreCourses from "./exploreCourses/ExploreCourses";
import LatestNews from "./LatestNewsFolder/LatestNews";
import NewsSubscription from "./NewsletterSubscriptionFolder/NewsSubscription";
import StudyAbroad from "./studyAbroad/StudyAbroad";
import TopExams from "./topExamFolder/TopExams";
import TopPlaces from "./topPlaces/TopPlaces";
import Admissions from "./commonComponents/Admissions";

const Home = () => {
  return (
    <div className="relative bg-white mx-auto">
      <TopPlaces />
      <ExploreCourses />
      <CBSE12 />
      <CBSE10 />
      <TopExams />
      <Admissions/>
      <LatestNews />
      <StudyAbroad />
      <TopCourses/>
      <NewsSubscription />
      <Footer />
    </div>
  );
};

export default Home;
