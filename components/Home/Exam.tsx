"use client";

import React from "react";
import { FaMedkit, FaLaptop, FaSchool, FaUsers, FaBriefcase, FaBuilding, FaTools, FaBook, FaChalkboard, FaArrowRight } from "react-icons/fa"; // Importing more relevant icons

const examCategories = [
  {
    title: "NEET",
    tags: ["class 11", "class 12", "Dropper"],
    backgroundColor: "bg-[#F9E5E8]", // Light pink background
    icon: <FaMedkit size={48} style={{ color: "#00778B" }} />, // Medical icon for NEET
  },
  {
    title: "IIT JEE",
    tags: ["class 11", "class 12", "Dropper"],
    backgroundColor: "bg-[#FFF0D6]", // Light yellow background
    icon: <FaTools size={48} style={{ color: "#00778B" }} />, // Tools icon for IIT JEE (engineering)
  },
  {
    title: "Pre Foundation",
    tags: [],
    backgroundColor: "bg-[#FEF3C7]", // Light yellowish background
    icon: <FaBook size={48} style={{ color: "#00778B" }} />, // Book icon for Pre Foundation
  },
  {
    title: "School Boards",
    tags: ["CBSE", "ICSE", "UP Board", "Maharashtra Board"],
    backgroundColor: "bg-[#D1E9FF]", // Light blue background
    icon: <FaChalkboard size={48} style={{ color: "#00778B" }} />, // Chalkboard icon for School Boards
  },
  {
    title: "UPSC",
    tags: [],
    backgroundColor: "bg-[#E2F4D9]", // Light green background
    icon: <FaBriefcase size={48} style={{ color: "#00778B" }} />, // Briefcase icon for UPSC
  },
  {
    title: "Govt Job Exams",
    tags: ["SSC", "Banking", "Teaching", "Judiciary"],
    backgroundColor: "bg-[#F9D6C1]", // Light peach background
    icon: <FaBuilding size={48} style={{ color: "#00778B" }} />, // Government building icon for Govt Job Exams
  },
];

const Exam: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Exam Categories
        </h2>
        <p className="mt-4 text-gray-600">
          Learn Mama is preparing students for 35+ exam categories. Scroll down to find
          the one you are preparing for.
        </p>
      </div>

      {/* Exam Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {examCategories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${category.backgroundColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`}
          >
            {/* Icon */}
            <div className="w-20 h-20 mb-6 flex justify-center items-center rounded-full bg-white p-4">
              {category.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center mb-4">
              {category.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs bg-purple-200 text-purple-800 rounded-full px-3 py-1 m-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Explore Button with Icon */}
            <button className="mt-4 text-#00778B px-6 py-2 rounded-lg flex items-center hover:bg-[#00778B] transition">
              Explore Category
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exam;
