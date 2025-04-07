"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import {
  HomeIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  SunIcon,
  MoonIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Courses", href: "/courses", icon: BookOpenIcon },
  { name: "Schedule", href: "/schedule", icon: CalendarIcon },
  { name: "Attendance", href: "/attendance", icon: ClockIcon },
  { name: "Messages", href: "/messages", icon: ChatBubbleLeftRightIcon },
  {
    name: "Assignments",
    href: "/assignments",
    icon: ClipboardDocumentListIcon,
  },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 shrink-0 items-center justify-center px-6 border-b border-gray-200 dark:border-gray-700">
            <img src="/otw_logo.jpg" alt="OTW Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                    isActive
                      ? "bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 shrink-0 ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="fixed top-4 left-4 z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
