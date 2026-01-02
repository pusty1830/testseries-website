"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Home, Info, Mail, User, BookOpen, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current path for active link highlighting

  // Navigation items - using lowercase paths for consistency
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail }
  ];

  // Mobile navigation items with descriptions
  const mobileNavItems = [
    { href: "/", label: "Home", icon: Home, desc: "Start your journey" },
    { href: "/about", label: "About Us", icon: Info, desc: "Our story & mission" },
    { href: "/contact", label: "Contact", icon: Mail, desc: "We're here to help" }
  ];

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // For SSR compatibility
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      
      return () => window.removeEventListener("scroll", handleScroll);
    }
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
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* LEFT SECTION (Logo) */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <div className="relative">
                  {/* Logo container with gradient */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                      boxShadow: '0 4px 20px rgba(0, 119, 139, 0.2)'
                    }}
                  >
                    <BookOpen size={20} className="sm:w-6 sm:h-6 text-white" />
                    <div className="absolute -top-1 -right-1">
                      <Sparkles size={10} className="text-white" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Brand name - hide on very small screens, show on sm and up */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#00778B]">
                    LearnMama
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium tracking-wide text-[#666666] opacity-80">
                    Empowering Learners
                  </span>
                </div>
              </Link>
            </div>

            {/* CENTER SECTION (Navigation Links - Desktop) */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative ${
                        isActive 
                          ? "text-white" 
                          : "text-gray-700 hover:text-[#00778B]"
                      }`}
                    >
                      {/* Active state gradient background */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                            boxShadow: '0 4px 20px rgba(0, 119, 139, 0.3)'
                          }}
                        />
                      )}
                      
                      {/* Inactive hover background */}
                      {!isActive && (
                        <div className="absolute inset-0 rounded-xl bg-[#00778B]/0 group-hover:bg-[#00778B]/5 transition-all duration-300" />
                      )}

                      <div className="relative flex items-center gap-2">
                        <item.icon 
                          size={18} 
                          className={`transition-all duration-300 ${
                            isActive 
                              ? "text-white" 
                              : "text-gray-500 group-hover:text-[#00778B]"
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight 
                          size={14} 
                          className={`transition-all duration-300 ${
                            isActive 
                              ? "text-white opacity-100 translate-x-0" 
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00778B]"
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT SECTION (CTA Button & Mobile Menu) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop CTA Button */}
              <a
                href="https://user.learnmama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                  boxShadow: '0 4px 20px rgba(0, 119, 139, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 119, 139, 0.35)';
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 119, 139, 0.25)';
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <User size={18} className="sm:w-5 sm:h-5 text-white relative z-10" />
                <span className="text-white relative z-10 text-sm sm:text-base">Get Started</span>
                <ChevronRight 
                  size={16} 
                  className="text-white relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                />
              </a>

              {/* Tablet/Mobile CTA Button (hidden on desktop, visible on tablet) */}
              <a
                href="https://user.learnmama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex lg:hidden items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                  color: 'white'
                }}
              >
                <User size={16} />
                <span className="text-sm">Login</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #F0F9FB 0%, #E6F4F7 100%)'
                }}
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} className="sm:w-7 sm:h-7 text-[#00778B]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar - responsive height */}
      <div className="h-16 sm:h-20" />

      {/* ===== MOBILE SIDEBAR ===== */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar with slide animation */}
        <div 
          className={`absolute right-0 top-0 h-full w-72 sm:w-80 max-w-sm transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'white',
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Sidebar header */}
          <div className="p-5 sm:p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)'
                  }}
                >
                  <BookOpen size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-[#00778B]">
                    LearnMama
                  </span>
                  <span className="text-xs text-gray-500 opacity-80">
                    Your Learning Journey
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: '#F0F9FB'
                }}
                aria-label="Close menu"
              >
                <X size={20} className="sm:w-6 sm:h-6 text-[#00778B]" />
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="p-4 sm:p-5">
            <div className="space-y-1">
              {mobileNavItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'shadow-sm' 
                        : 'hover:bg-gray-50'
                    }`}
                    style={isActive ? { 
                      background: '#F0F9FB',
                      borderLeft: '3px solid #00778B'
                    } : {}}
                  >
                    <div 
                      className={`p-2.5 rounded-lg transition-colors duration-200 ${
                        isActive 
                          ? 'bg-[#00778B]/10' 
                          : 'bg-gray-100'
                      }`}
                    >
                      <item.icon 
                        size={20} 
                        className={isActive ? "text-[#00778B]" : "text-gray-600"}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium truncate ${isActive ? 'text-[#00778B]' : 'text-gray-800'}`}>
                        {item.label}
                      </div>
                      <div className={`text-xs sm:text-sm truncate ${isActive ? 'text-[#00778B]/80' : 'text-gray-500'}`}>
                        {item.desc}
                      </div>
                    </div>
                    <ChevronRight 
                      size={16} 
                      className={isActive ? "text-[#00778B]" : "text-gray-400"}
                    />
                  </Link>
                );
              })}

              {/* Mobile CTA Section */}
              <div 
                className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 119, 139, 0.05) 0%, rgba(0, 168, 198, 0.05) 100%)',
                  border: '1px solid rgba(0, 119, 139, 0.1)'
                }}
              >
                <h3 className="font-bold text-[#00778B] mb-2 text-sm sm:text-base">
                  Ready to Learn?
                </h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                  Join thousands of learners
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://user.learnmama.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 rounded-lg text-center font-medium transition-all duration-200 active:scale-95 text-sm sm:text-base"
                    style={{
                      background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)',
                      color: 'white'
                    }}
                  >
                    Sign In / Register
                  </a>
                  
                  <Link
                    href="/courses"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 rounded-lg text-center font-medium transition-all duration-200 border active:scale-95 text-sm sm:text-base"
                    style={{
                      borderColor: '#00778B',
                      color: '#00778B'
                    }}
                  >
                    Explore Courses
                  </Link>
                </div>
                
                {/* Learner stats */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-200">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                        style={{
                          background: 'linear-gradient(135deg, #00778B 0%, #00A8C6 100%)'
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#00778B] text-xs sm:text-sm">10,000+</span>
                    <span className="text-gray-500 text-xs">Active Learners</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}