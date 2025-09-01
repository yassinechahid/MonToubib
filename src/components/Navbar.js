"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../public/assets/pictures/logo.svg";
import menuNormal from "../../public/assets/pictures/menuNormal.svg";
import menuClose from "../../public/assets/pictures/menuClose.svg";
import englishFlag from "../../public/assets/pictures/englishFlag.svg";
import franceFlag from "../../public/assets/pictures/franceFlag.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setSelectedLanguage(savedLang);

    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);
    localStorage.setItem("language", lang);
  };

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/patients", label: "Patients" },
    { href: "/medicins", label: "Doctors" },
    { href: "/professionnels", label: "professionnels" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <main className="flex fixed z-50 justify-between items-center h-24 w-full p-6 bg-light-background">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="logo mon toubib" />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden lg:block">
        <ul className="flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold ${
                isActive(item.href) ? "text-light-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile menu and language */}
      <div className="flex items-center gap-5">
        {/* Mobile menu */}
        <div ref={mobileMenuRef} className="relative">
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Image src={menuOpen ? menuClose : menuNormal} alt="menu icon" />
          </button>

          {menuOpen && (
            <div className="fixed top-0 left-0 h-full w-[300px] bg-white z-40 p-5 shadow-lg">
              <button onClick={() => setMenuOpen(false)} className="mb-5">
                <Image src={menuClose} alt="close icon" />
              </button>
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-full py-5 px-5 text-label-large font-roboto font-medium ${
                      isActive(item.href)
                        ? "bg-light-primary-fixed text-label-large"
                        : "text-light-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Language selector */}
        <div className="relative" ref={languageRef}>
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="flex items-center gap-2 rounded px-3 py-1 hover:bg-gray-100"
          >
            <Image
              src={selectedLanguage === "en" ? englishFlag : franceFlag}
              alt={selectedLanguage}
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">{selectedLanguage.toUpperCase()}</span>
          </button>

          {languageMenuOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
              <li
                onClick={() => handleLanguageChange("en")}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Image src={englishFlag} alt="English" className="w-5 h-5" />
                English
              </li>
              <li
                onClick={() => handleLanguageChange("fr")}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Image src={franceFlag} alt="French" className="w-5 h-5" />
                Français
              </li>
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
