"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Home, Info, Mail, User, BookOpen, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,119,139,0.08)]' 
          : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          {/* LEFT SECTION (Logo) */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setActiveLink("")}
            >
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-[#00778B] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700" />
                
                {/* Logo container with gradient */}
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                    boxShadow: '0 8px 32px rgba(0, 119, 139, 0.2)'
                  }}
                >
                  <BookOpen size={24} className="text-white" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles size={12} className="text-white" fill="white" />
                  </div>
                </div>
              </div>

              {/* Brand name */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#00778B]">
                  LearnMama
                </span>
                <span className="text-xs font-medium tracking-wide text-[#666666] opacity-80">
                  Empowering Learners
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER SECTION (Navigation Links) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            {[
              { href: "/", label: "Home", icon: Home },
              { href: "/About", label: "About", icon: Info },
              { href: "/Contact", label: "Contact", icon: Mail }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group relative ${
                  activeLink === item.href 
                    ? "text-white" 
                    : "text-gray-700 hover:text-[#00778B]"
                }`}
              >
                {/* Active state gradient background */}
                {activeLink === item.href && (
                  <div 
                    className="absolute inset-0 rounded-2xl animate-gradient"
                    style={{
                      background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                      boxShadow: '0 4px 20px rgba(0, 119, 139, 0.3)'
                    }}
                  />
                )}
                
                {/* Inactive hover background */}
                {activeLink !== item.href && (
                  <div className="absolute inset-0 rounded-2xl bg-[#00778B]/0 group-hover:bg-[#00778B]/5 transition-all duration-300" />
                )}

                <div className="relative flex items-center gap-2">
                  <item.icon 
                    size={18} 
                    className={`transition-all duration-300 ${
                      activeLink === item.href 
                        ? "text-white" 
                        : "text-gray-500 group-hover:text-[#00778B]"
                    }`}
                  />
                  <span>{item.label}</span>
                  <ChevronRight 
                    size={14} 
                    className={`transition-all duration-300 ${
                      activeLink === item.href 
                        ? "text-white opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00778B]"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </nav>

          {/* RIGHT SECTION (CTA Button) */}
          <div className="flex items-center gap-4">
            <Link
              href="https://user.learnmama.com"
              className="hidden lg:flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold transition-all duration-500 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                boxShadow: '0 8px 32px rgba(0, 119, 139, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 119, 139, 0.35)';
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 119, 139, 0.25)';
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <User size={20} className="text-white relative z-10" />
              <span className="text-white relative z-10 tracking-wide">Get Started</span>
              <ChevronRight 
                size={18} 
                className="text-white relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
              style={{
                background: 'linear-gradient(135deg, #F0F9FB 0%, #E6F4F7 100%)'
              }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} className="text-[#00778B]" />
            </button>
          </div>
        </div>

        {/* Subtle bottom glow effect */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00778B]/20 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[76px]" />

      {/* ===== MOBILE SIDEBAR ===== */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 119, 139, 0.1) 0%, rgba(0, 168, 198, 0.1) 100%)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar with slide animation */}
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm transform transition-all duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(165deg, #FFFFFF 0%, #F8FDFF 100%)',
            boxShadow: '-8px 0 48px rgba(0, 119, 139, 0.15)'
          }}
        >
          {/* Sidebar header */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)'
                  }}
                >
                  <BookOpen size={28} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#00778B]">
                    LearnMama
                  </span>
                  <span className="text-sm text-[#666666] opacity-80">
                    Your Learning Journey
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #F0F9FB 0%, #E6F4F7 100%)'
                }}
                aria-label="Close menu"
              >
                <X size={24} className="text-[#00778B]" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="space-y-2">
              {[
                { href: "/", label: "Home", icon: Home, desc: "Start your journey" },
                { href: "/about", label: "About Us", icon: Info, desc: "Our story & mission" },
                { href: "/contact", label: "Contact", icon: Mail, desc: "We're here to help" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveLink(item.href);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    activeLink === item.href 
                      ? 'shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  style={activeLink === item.href ? { 
                    background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)'
                  } : {
                    background: 'white'
                  }}
                >
                  <div 
                    className={`p-3.5 rounded-xl transition-all duration-300 ${
                      activeLink === item.href 
                        ? 'bg-white/20' 
                        : 'bg-[#F0F9FB] group-hover:bg-[#00778B]/10'
                    }`}
                  >
                    <item.icon 
                      size={22} 
                      className={activeLink === item.href ? "text-white" : "text-[#00778B]"}
                    />
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold ${activeLink === item.href ? 'text-white' : 'text-gray-800'}`}>
                      {item.label}
                    </div>
                    <div className={`text-sm ${activeLink === item.href ? 'text-white/80' : 'text-gray-500'}`}>
                      {item.desc}
                    </div>
                  </div>
                  <ChevronRight 
                    size={18} 
                    className={activeLink === item.href ? "text-white" : "text-[#00778B]/60"}
                  />
                </Link>
              ))}

              {/* Mobile CTA Section */}
              <div 
                className="mt-10 p-6 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 119, 139, 0.05) 0%, rgba(0, 168, 198, 0.05) 100%)'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#00778B] animate-pulse" />
                  <h3 className="font-bold text-lg text-[#00778B]">
                    Ready to Learn?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Join thousands of learners who are transforming their skills
                </p>
                
                <div className="space-y-4">
                  <Link
                    href="https://user.learnmama.com"
                    onClick={() => setIsOpen(false)}
                    className="block py-4 rounded-xl text-center font-semibold transition-all duration-300 active:scale-95 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 119, 139, 0.3)'
                    }}
                  >
                    Sign In / Register
                  </Link>
                  
                  <Link
                    href="/courses"
                    onClick={() => setIsOpen(false)}
                    className="block py-4 rounded-xl text-center font-semibold transition-all duration-300 border-2 active:scale-95"
                    style={{
                      borderColor: '#00778B',
                      color: '#00778B',
                      background: 'white'
                    }}
                  >
                    Explore Courses
                  </Link>
                </div>
                
                {/* Learner stats */}
                <div className="flex items-center justify-center gap-3 mt-6 pt-6"
                  style={{
                    borderTop: '1px solid rgba(0, 119, 139, 0.1)'
                  }}
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)'
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#00778B]">10,000+</span>
                    <span className="text-xs text-gray-500">Active Learners</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}