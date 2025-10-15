"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NavigationItem } from "@/types/cms";
import { motion } from "motion/react";

interface HeaderProps {
  siteName: string;
  navigation: NavigationItem[];
  logo?: string;
}

export function Header({ siteName, navigation, logo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8 ${
          isScrolled ? "backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          {logo ? (
            <div className="h-8 w-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
              {siteName.charAt(0)}
            </div>
          ) : (
            <div className="text-2xl font-bold text-orange-500">{siteName}</div>
          )}
        </div>

        <button
          className={`p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 ${
          isMenuOpen ? "visible" : "invisible"
        } transition-all duration-1000`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black/80 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sliding menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 w-screen lg:w-[70vw] bg-white shadow-2xl z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-1000 ease-in-out`}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="text-xl font-bold text-gray-800">{siteName}</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-6">
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="my-2 cursor-pointer group relative text-4xl lg:text-6xl w-full text-left px-4 py-3 rounded-lg font-medium relative overflow-hidden group nav-fill-button"
                >
                  {/* Default gray text */}
                  <span className="block text-gray-800 z-10 group-hover:text-orange-500 transition-all duration-500">
                    {item.label}
                  </span>
                  <motion.span className="-translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 absolute inset-0 px-4 py-3 bg-[#105754]/10 rounded-lg"></motion.span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
