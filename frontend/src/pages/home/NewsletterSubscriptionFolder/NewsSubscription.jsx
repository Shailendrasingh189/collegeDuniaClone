import SubscriptionForm from "./SubscriptionForm";

const NewsSubscription = () => {
  

  return (
    <div className="contents">
      <section className="border-b border-[#e9e9e9] bg-white py-5 md:py-9">
        <div className="container mx-auto px-4 text-center p-6  ">
          {/* <div className="container  rounded-lg shadow-lg"> */}
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            Get College Notifications, Exam Notifications, and News Updates
          </p>
         <SubscriptionForm/>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default NewsSubscription;
