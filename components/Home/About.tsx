"use client";

import React from "react";
import Image from "next/image"; // Ensure proper import of Image from next/image
import { FaVideo, FaClipboardList, FaQuestionCircle, FaMapMarkerAlt } from "react-icons/fa"; // React Icons for features

const features = [
  {
    icon: <FaVideo size={48} style={{ color: "#00778B" }} />, // Apply custom color to the icon
    title: "Daily Live",
    desc: "Interactive classes",
  },
  {
    icon: <FaClipboardList size={48} style={{ color: "#00778B" }} />, // Apply custom color to the icon
    title: "10 Million +",
    desc: "Tests, sample papers & notes",
  },
  {
    icon: <FaQuestionCircle size={48} style={{ color: "#00778B" }} />, // Apply custom color to the icon
    title: "24 x 7",
    desc: "Doubt solving sessions",
  },
  {
    icon: <FaMapMarkerAlt size={48} style={{ color: "#00778B" }} />, // Apply custom color to the icon
    title: "100 +",
    desc: "Offline centres",
  },
];

const About: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-4 md:px-16 relative">
      {/* Heading & CTA */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Bharat’s <span className="text-[#00778B]">Trusted & Affordable</span>
            <br />
            Educational Platform
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Unlock your potential by signing up with Learn Mama - The most affordable learning solution
          </p>
          <button onClick={()=>window.location.href="https://user.learnmama.com"} className="mt-6 bg-[#00778B] text-white px-6 py-3 rounded-lg hover:bg-[#00778B] transition">
            Get Started
          </button>
        </div>

        {/* Teacher Image (Only image on the right side) */}
        <div className="flex-1 relative flex justify-center md:justify-end">
        
              <Image
                src="https://wpvip.edutopia.org/wp-content/uploads/2023/08/hero_feature_BTS_photo_iStock_1463406555_skynesher.jpg?w=2880&quality=85"
                alt="Teacher"
                width={544}
                height={544}
                className="object-cover"
              />
           
          
        </div>
      </div>

      {/* Features Cards */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 text-sm text-center mt-1">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
