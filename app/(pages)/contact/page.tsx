import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaSnapchat,
  FaPinterest,
  FaTiktok,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen p-8 flex justify-center items-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Section: Contact Sales */}
        <div className="rounded-lg shadow-lg p-8 border border-gray-700">
          <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-blue-700 w-6 h-6"
            >
              <path d="M1 6C1 3.791 2.791 2 5 2h10c2.209 0 4 1.791 4 4v.382a.625.625 0 01-.553.618L10.553 11.276a.5.5 0 01-.447 0L1.553 7.276A.625.625 0 011 6.382V6z" />
              <path
                d="M1 10.118c0-.743.782-1.227 1.447-.894l7.106 3.552a.5.5 0 00.447 0l7.106-3.552c.665-.333 1.447.151 1.447.894V14c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4v-3.882z"
                opacity="0.5"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Contact Our Software Team
          </h3>
          <p className="text-gray-400 mb-6">
            Reach out to discuss custom solutions, software integration, or any
            queries related to our products.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Tech Innovations Inc."
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Chief Technology Officer"
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Phone Number (with Country Code)
              </label>
              <input
                type="tel"
                placeholder="+1 123-456-7890"
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Service Required
              </label>
              <select
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              >
                <option disabled selected>
                  Select a service...
                </option>
                <option>3D Services</option>
                <option>App Development</option>
                <option>Website Development</option>
                <option>Vector and Raster Designing</option>
                <option>Video Making and Editing</option>
                <option>AR/VR Solutions</option>
                <option>VFX</option>
                <option>Branding</option>
                <option>Digital Marketing</option>
                <option>Others</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="john.doe@company.com"
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project or inquiry."
                required
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-4 h-40 mt-1 focus:ring-2 focus:ring-white outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-white text-black rounded-lg px-6 py-3 font-semibold hover:bg-gray-200"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Contact Details */}
        <div className="flex flex-col space-y-6">
          {/* Working Hours */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-white mb-2">Working Hours</h4>
            <p className="text-gray-400">
              <span className="block">Monday - Friday: 9:00 AM - 6:00 PM</span>
              <span className="block">Saturday: 10:00 AM - 4:00 PM</span>
              <span className="block">Sunday: Closed</span>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <a
                href="https://www.facebook.com/thezyypher/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/zyypher_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@zyypher8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://snapchat.com/t/YrTYXrLx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                <FaSnapchat size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <FaPinterest size={24} />
              </a>
              <a
                href="https://www.threads.net/@zyypher_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                Threads
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-white mb-2">Address</h4>
            <p className="text-gray-400 mb-4">
              Office No: 043456, <br />
              Ajman FZE, Ajman, UAE
              <br />
              <span className="flex items-center gap-2 mt-2">
                <FaPhone className="text-blue-500" />
                +971 800 999 7437
              </span>
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
  <h4 className="text-xl font-bold text-white mb-2">FAQs</h4>
  <ul className="text-gray-400">
    <li className="mb-2">
      <strong className="text-white">Q: How can I reach your support team?</strong>
      <p>A: You can contact us via email or phone during our working hours.</p>
    </li>
    <li className="mb-2">
      <strong className="text-white">Q: What services do you offer?</strong>
      <p>
        A: We offer a range of services including 3D design, app development,
        branding, and more.
      </p>
    </li>
    <li className="mb-2">
      <strong className="text-white">Q: How long does it take to complete a project?</strong>
      <p>
        A: The duration varies based on the complexity and scope of the project.
        Our team will provide a detailed timeline after discussing your
        requirements.
      </p>
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
