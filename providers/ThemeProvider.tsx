"use client";

import { useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dark, setDark] = useState<"light" | "dark">("light");

  return (
    // 여기 div에 dark 클래스를 토글해보세요.
    <div className={dark}>
      <button
        className="rounded-md border border-gray-300 p-2"
        onClick={() => setDark(dark === "dark" ? "light" : "dark")}
      >
        다크모드 버튼
      </button>
      {children}
    </div>
  );
}
