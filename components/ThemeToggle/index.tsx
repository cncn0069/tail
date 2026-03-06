"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="rounded-md border border-gray-300 p-2 dark:text-white"
        onClick={() => setTheme("system")}
      >
        시스템 버튼
      </button>
      <button
        className="rounded-md border border-gray-300 p-2 dark:text-white"
        onClick={() => setTheme("dark")}
      >
        다크 버튼
      </button>
      <button
        className="rounded-md border border-gray-300 p-2 dark:text-white"
        onClick={() => setTheme("light")}
      >
        기본 버튼
      </button>
    </>
  );
}
