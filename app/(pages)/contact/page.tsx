"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  jobTitle: string;
  phoneNumber: string;
  service: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({
    message: "",
    type: "",
  });

  const onSubmit = async (data: FormData) => {
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          message: "Your message has been sent successfully!",
          type: "success",
        });
        reset();
      } else {
        setStatus({
          message: result.message || "Failed to send the message.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 flex justify-center items-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Section: Contact Sales */}
        <div className="rounded-lg shadow-lg p-8 border border-gray-700">
          <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center">
            <FaPhone className="text-blue-700 w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Contact Our Software Team
          </h3>
          <p className="text-gray-400 mb-6">
            Reach out to discuss custom solutions, software integration, or any
            queries related to our products.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                {...register("companyName", {
                  required: "Company Name is required",
                })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Job Title
              </label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job Title is required" })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Phone Number (with Country Code)
              </label>
              <input
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Service Required
              </label>
              <select
                {...register("service", { required: "Service is required" })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              >
                <option value="">Select a service...</option>
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
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-white outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-4 h-40 mt-1 focus:ring-2 focus:ring-white outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-white text-black rounded-lg px-6 py-3 font-semibold hover:bg-gray-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status.message && (
            <p
              className={`mt-4 text-center ${
                status.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
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
                <strong className="text-white">
                  Q: How can I reach your support team?
                </strong>
                <p>
                  A: You can contact us via email or phone during our working
                  hours.
                </p>
              </li>
              <li className="mb-2">
                <strong className="text-white">
                  Q: What services do you offer?
                </strong>
                <p>
                  A: We offer a range of services including 3D design, app
                  development, branding, and more.
                </p>
              </li>
              <li className="mb-2">
                <strong className="text-white">
                  Q: How long does it take to complete a project?
                </strong>
                <p>
                  A: The duration varies based on the complexity and scope of
                  the project. Our team will provide a detailed timeline after
                  discussing your requirements.
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
