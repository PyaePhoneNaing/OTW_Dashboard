"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useTheme } from "../context/ThemeContext";

export default function ClientLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen">
      <Header />
      <Sidebar />
      <div className="transition-colors duration-200">{children}</div>
    </div>
  );
}
