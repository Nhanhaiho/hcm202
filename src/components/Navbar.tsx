"use client";

import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Mở đầu" },
    { href: "#timeline", label: "Dòng thời gian (5 chặng)" },
    { href: "#storymap", label: "Bản đồ hình thành" },
    { href: "#quiz", label: "Thử hiểu đúng" },
    { href: "#conclusion", label: "Kết luận" },
    { href: "#sources", label: "Nguồn & Phương pháp" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2D9CC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand identifier */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold tracking-wider text-white bg-[#8B1E1E] rounded">
              HCM202 · NHÓM 5
            </span>
            <a
              href="#hero"
              className="text-base sm:text-lg font-bold font-scholarly text-[#1C2024] hover:text-[#8B1E1E] transition-colors"
            >
              Bản đồ hình thành tư tưởng Hồ Chí Minh
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Menu chính">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#4A5568] hover:text-[#8B1E1E] hover:bg-[#E2D9CC]/40 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Mở danh mục chuyển trang"
              className="p-2 text-[#4A5568] hover:text-[#1C2024] hover:bg-[#E2D9CC]/50 rounded-lg cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2D9CC] bg-[#FAF7F2] px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#2D3136] hover:bg-[#E2D9CC]/50 hover:text-[#8B1E1E] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
