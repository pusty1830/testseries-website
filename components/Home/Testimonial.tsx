'use client'; // Ensure it's a Client Component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS

// Importing the double quote icon from React Icons (FaQuoteLeft is the double quote icon)
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Tathagat Awatar",
      rank: "AIR 1",
      exam: "NEET",
      message:
        "My name is Tathagat Awatar. I secured All India Rank 1 by scoring full score in NEET UG 2024. I started my preparation with Learn Mama in 12th grade by joining the Lakshya NEET batch, then I took 2 drop by joining Yakeen NEET batch and I completed my full preparation from online PW batch. PW teachers and their guidance help me to achieve AIR1 and motivated me during my drop year.",
    },
    {
      name: "Sushant Padha",
      rank: "AIR 86",
      exam: "NEET",
      message:
        "My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Learn Mama in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Learn Mama. PW",
    },
    {
      name: "Karan Garg",
      rank: "AIR 429",
      exam: "NEET",
      message:
        "My name is Karan Garg, and I secured 710 marks in the NEET UG 2024 exam, achieving an All India Rank of 429. I am thrilled to have had the opportunity to study for my NEET journey with Learn Mama, as their teachers' content and guidance were superb.",
    },
    {
      name: "Tanay",
      rank: "AIR 99",
      exam: "JEE",
      message:
        "Thanks to PW! PW faculties teach from the basics and they are very supportive because of which I am able to secure AIR 99 in JEE Advanced 2024. I studied from Varun JEE Advanced 2024 Batch.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Students ❤️ Learn Mama</h2>
        <p className="text-xl mb-12">Hear from our students</p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                {/* Double Quote Icon from React Icons */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaQuoteLeft className="text-gray-500 h-6 w-6" />
                </div>

                <div className="text-lg font-bold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm mb-4">
                  {testimonial.rank} | {testimonial.exam}
                </div>
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
