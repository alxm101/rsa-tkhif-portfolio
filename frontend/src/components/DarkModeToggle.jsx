import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // check saved pref or system
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded text-sm border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
