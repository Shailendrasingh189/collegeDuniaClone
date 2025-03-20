import React from "react";

const CopyRightComp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  py-4 px-6 border-t">
      {/* Logo & Copyright */}
      <div className="flex items-center space-x-4">
        <div className="w-1/4 h-5">
          <img
            src="https://image-static.collegedunia.com/public/images/cd_logo_white_new.png"
            alt="Company Logo"
            className="w-full h-auto"
          />
        </div>
        <p className="text-gray-700 text-sm">
          © 2025 Xcoders Web Pvt. Ltd. All Rights Reserved
        </p>
      </div>

      {/* App Download Links */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <p className="text-gray-700 text-sm">
          Download the Collegedunia app on
        </p>

        {/* Google Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.collegedunia"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Collegedunia App"
        >
          <img
            src="https://image-static.collegedunia.com/public/asset/img/google-play.png"
            alt="Google Play Store"
            className="h-8 w-auto"
            loading="lazy"
          />
        </a>

        {/* Apple App Store */}
        <a
          href="https://itunes.apple.com/us/app/collegedunia/id1366265528?ls=1&mt=8"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Collegedunia App"
        >
          <img
            src="https://image-static.collegedunia.com/public/asset/img/app-store.png"
            alt="Apple App Store"
            className="h-8 w-auto"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default CopyRightComp;
