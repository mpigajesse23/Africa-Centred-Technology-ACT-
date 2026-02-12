"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ShoppingCart } from "lucide-react";

/**
 * MainNav Component
 * 
 * Clones the secondary navigation menu located within the hero area.
 * Features:
 * - Dropdowns for Demos, Pages, Features
 * - Link for Tutorials
 * - "Purchase" button with Earthy Red hover state
 * - Saffron indicators for active/hover states
 * - Deep Green background context
 */
export default function MainNav() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navLinks = [
    { title: "Demos", hasDropdown: true },
    { title: "Pages", hasDropdown: true },
    { title: "Features", hasDropdown: true },
    { title: "Tutorials", hasDropdown: false },
  ];

  return (
    <nav className="w-full h-[90px] flex items-center justify-between px-[15px] max-w-[1170px] mx-auto bg-transparent relative z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="relative flex items-center group">
          <div className="flex flex-col items-start">
             <div className="flex items-center gap-1">
                <span className="text-white text-[32px] font-extrabold font-display leading-none uppercase tracking-[-1px]">
                  Consulting
                </span>
                <div className="bg-saffron text-deep-green text-[10px] font-bold px-1 py-0.5 mt-[-15px] leading-tight">
                  WP
                </div>
             </div>
          </div>
        </a>
      </div>

      {/* Navigation Links and CTA */}
      <div className="flex items-center gap-[35px]">
        <ul className="hidden lg:flex items-center space-x-[30px] list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.title} className="relative group py-[30px]">
              <a
                href="#"
                className={`flex items-center gap-1.5 text-white text-[14px] font-semibold font-display uppercase tracking-[1px] transition-colors duration-300 hover:text-saffron`}
                onMouseEnter={() => setActiveItem(link.title)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {link.title}
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-white/50 group-hover:text-saffron" />
                )}
              </a>
              {/* Active/Hover Indicator */}
              <div 
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-saffron transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activeItem === link.title ? 'scale-x-100' : ''}`} 
              />
              
              {/* Simplified Dropdown Placeholder */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 min-w-[200px] bg-white text-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-saffron translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <div className="px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50">
                      Explore {link.title}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Purchase Button */}
        <div className="flex items-center">
          <a
            href="#"
            className="btn relative flex items-center gap-2 bg-saffron text-deep-green px-[24px] py-[14px] text-[13px] font-bold font-display uppercase tracking-[2px] transition-all duration-300 hover:bg-earthy-red hover:text-white"
          >
            Purchase
            <ShoppingCart className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon (Visual Only) */}
      <div className="lg:hidden flex items-center">
        <button className="text-white p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </nav>
  );
}