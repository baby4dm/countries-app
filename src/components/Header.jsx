"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <header className="h-20 w-full bg-(--bg-element) flex items-center justify-between px-4 shadow-sm md:px-10 lg:px-20">
      <h1 className="text-preset-5-regular font-extrabold xl:text-preset-2">
        Where in the world?
      </h1>
      {isMounted && (
        <button
          className="text-preset-6-semibold flex items-center gap-2 cursor-pointer lg:text-preset-4-semibold"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <span> {isDark ? "☀️" : "🌙"}</span>
          <span> {isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
      )}
    </header>
  );
}
