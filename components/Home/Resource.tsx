"use client";

import React from "react";

const resources = [
  {
    title: "Reference Books",
    description:
      "Our experts have created through study materials that break down complicated concepts into easily understandable content",
    backgroundColor: "bg-[#E6F2FF]", // Light blue background
    buttonColor: "bg-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-16 h-16 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 2v12a9 9 0 019 9h2a9 9 0 019-9V2M6 2h12m-12 0h0a9 9 0 00-9 9h2a7 7 0 017-7h0a7 7 0 017 7h0a9 9 0 009-9h0"
        />
      </svg>
    ),
  },
  {
    title: "NCERT Solutions",
    description:
      "Unlock academic excellence with Learn Mama’s NCERT Solutions which provides you step-by-step solutions",
    backgroundColor: "bg-[#FFF7E6]", // Light yellow background
    buttonColor: "bg-yellow-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-16 h-16 text-yellow-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7v10M8 7v10m4-10v10M4 3h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
      </svg>
    ),
  },
  {
    title: "Notes",
    description:
      "Use Learn Mama’s detailed study materials that simplify complex ideas into easily understandable language",
    backgroundColor: "bg-[#E2F7E0]", // Light green background
    buttonColor: "bg-green-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-16 h-16 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h4v4h-4zm-6 0h4v4H7zm4-6h4v4h-4zm-6 0h4v4H3zm4-6h4v4H7zm6 0h4v4h-4z"
        />
      </svg>
    ),
  },
];

const Resource: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Study Resources
        </h2>
        <p className="mt-4 text-gray-600">
          A diverse array of learning materials to enhance your educational journey.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-xl shadow-md ${resource.backgroundColor} hover:shadow-xl transition`}
          >
            {/* Icon */}
            <div className="mb-4">{resource.icon}</div>

            <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
            <p className="text-sm text-gray-700 text-center mt-2">{resource.description}</p>

            <button
              className={`mt-4 ${resource.buttonColor} text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition`}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resource;
