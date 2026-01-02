"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Explore Flexible Learning Options",
    subtitle: "Online PG & UG Courses",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "https://user.learnmama.com",
  },
  {
    id: 2,
    title: "Crack IIT JEE with LearnMama",
    subtitle: "India's Best Faculty & Results",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "https://user.learnmama.com",
  },
  {
    id: 3,
    title: "NEET Preparation Made Easy",
    subtitle: "Concept + Practice + Tests",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    link: "https://user.learnmama.com",
  },
  {
    id: 4,
    title: "Upskill for the Future",
    subtitle: "Tech, Coding & Professional Skills",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "https://user.learnmama.com",
  },
  {
    id: 5,
    title: "Learn from Anywhere",
    subtitle: "Live & Recorded Classes",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    link: "https://user.learnmama.com",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle button click for redirect
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    // If it's an external URL (learnmama.com), ensure it opens correctly
    if (link.includes('learnmama.com')) {
      e.preventDefault();
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative w-full h-[170px] sm:h-[300px] md:h-[420px] lg:h-[320px] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Overlay with your brand color */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#00778B]/90 to-[#00778B]/40"
            style={{
              background: "linear-gradient(135deg, rgba(0, 119, 139, 0.9) 0%, rgba(0, 119, 139, 0.4) 100%)"
            }}
          />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-sm sm:text-lg md:text-xl mb-6 font-light">
                  {slide.subtitle}
                </p>

                <a
                  href={slide.link}
                  onClick={(e) => handleButtonClick(e, slide.link)}
                  className="inline-flex items-center gap-2 bg-white text-[#00778B] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform group shadow-lg"
                >
                  Enroll Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Updated with your colors */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots - Updated with your colors */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}