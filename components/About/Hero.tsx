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
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    link: "/courses/pg-ug",
  },
  {
    id: 2,
    title: "Crack IIT JEE with learnmama",
    subtitle: "India’s Best Faculty & Results",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "/courses/iit-jee",
  },
  {
    id: 3,
    title: "NEET Preparation Made Easy",
    subtitle: "Concept + Practice + Tests",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    link: "/courses/neet",
  },
  {
    id: 4,
    title: "Upskill for the Future",
    subtitle: "Tech, Coding & Professional Skills",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "/upskilling",
  },
  {
    id: 5,
    title: "Learn from Anywhere",
    subtitle: "Live & Recorded Classes",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    link: "/online-learning",
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
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2f]/90 to-[#071a2f]/40" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-yellow-400 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {slide.title}
              </h1>
              <p className="text-white text-sm sm:text-lg md:text-xl mb-6">
                {slide.subtitle}
              </p>

              <Link
                href={slide.link}
                className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition"
              >
                Enquire Now →
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white w-10 h-10 rounded-full items-center justify-center hover:bg-black"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white w-10 h-10 rounded-full items-center justify-center hover:bg-black"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
