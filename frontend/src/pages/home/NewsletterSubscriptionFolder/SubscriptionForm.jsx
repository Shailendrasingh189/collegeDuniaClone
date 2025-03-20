import { useState } from "react";
import { MdEmail, MdPhone, MdSchool } from "react-icons/md";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateEmail(formData.email))
      validationErrors.email = "Please enter a valid email.";
    if (!validateMobile(formData.mobile))
      validationErrors.mobile = "Please enter a valid mobile number.";
    if (!formData.course)
      validationErrors.course = "Please select a valid course.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Handle form submission (e.g., send data to API)
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row flex-wrap justify-center">
          {/* Email Input */}
          <div className="mb-4 px-2 relative">
            <MdEmail className="absolute left-4 top-5 text-gray-500 size-6" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`bg-gray-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block min-w-60 w-full p-5 pl-10 `}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>

          {/* Mobile Input */}
          <div className="mb-4 px-2 relative">
            <MdPhone className="absolute left-4 top-5 text-gray-500 size-6" />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              maxLength="10"
              className={`bg-gray-50 border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block min-w-60 w-full p-5 pl-10 `}
            />
            {errors.mobile && (
              <div className="text-red-500 text-sm">{errors.mobile}</div>
            )}
          </div>

          {/* Course Selection */}
          <div className="mb-4 px-2 relative">
            <MdSchool className="absolute left-4 top-5 text-gray-500 size-6" />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`bg-gray-50 border ${
                errors.course ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block min-w-60 w-full p-5 pl-10 `}
            >
              <option value="" disabled>
                Choose your course
              </option>
              <optgroup label="Popular Courses">
                <option value="18">BE/B.Tech - Bachelors (Technology)</option>
                <option value="120">
                  MBA/PGDM - Masters (Business Administration)
                </option>
                <option value="15">
                  BBA/BBM - Bachelors (Business Administration)
                </option>
                <option value="2">B.Com - Bachelors (Commerce)</option>
                <option value="12">BA - Bachelors (Arts)</option>
              </optgroup>
            </select>
            {errors.course && (
              <div className="text-red-500 text-sm">{errors.course}</div>
            )}
          </div>
        </div>
        <div className="px-2">
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full min-w-60 md:max-w-80 bg-orange-500 text-white p-5 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
