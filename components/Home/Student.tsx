// components/Home/Student.tsx
"use client";

import React from "react";

const stats = [
  {
    title: "15 Million+",
    description: "Happy Students",
    backgroundColor: "bg-[#FFF4E5]", // Light orange background
  },
  {
    title: "24000+",
    description: "Mock Tests",
    backgroundColor: "bg-[#FFE1E1]", // Light pink background
  },
  {
    title: "14000+",
    description: "Video Lectures",
    backgroundColor: "bg-[#D6EFFF]", // Light blue background
  },
  {
    title: "80000+",
    description: "Practice Papers",
    backgroundColor: "bg-[#E3D9FF]", // Light purple background
  },
];

const Student: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Platform Trusted by Students
        </h2>
        <p className="mt-4 text-gray-600">
          Learn Mama aims to transform not just through words, but provide
          results with numbers!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-xl shadow-md ${stat.backgroundColor} hover:shadow-xl transition`}
          >
            {/* Placeholder for icon */}

            <h3 className="text-2xl font-semibold text-gray-900">{stat.title}</h3>
            <p className="text-sm text-gray-700 text-center mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Get Started Button */}
      <div className="text-center mt-10">
        <button className="bg-[#00778B] text-white px-6 py-3 rounded-lg hover:bg-[#00778B] transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Student;
