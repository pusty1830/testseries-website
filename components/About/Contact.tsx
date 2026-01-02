"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-xl text-gray-600 mt-3">
          Have questions or feedback? We're here to help!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Send Us a Message</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
              
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#00778B] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="w-6 h-6 text-[#00778B]" />
              <div>
                <p className="font-medium">Address</p>
                <p>123 Learning Avenue, City, Country</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="w-6 h-6 text-[#00778B]" />
              <div>
                <p className="font-medium">Phone</p>
                <p>+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="w-6 h-6 text-[#00778B]" />
              <div>
                <p className="font-medium">Email</p>
                <p>contact@learningplatform.com</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
