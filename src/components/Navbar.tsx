import { useEffect, useState } from "react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const themeChange = () => {
    // const isDark = localStorage.theme === 'dark'
    // console.log(isDark)
    localStorage.theme = isDark ? "light" : "dark";
    setIsDark(!isDark);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-slate-800 text-white shadow-lg">
      <div className="font-bold">To Do List app</div>
      <div className="flex space-x-8">
        <a href="#">Source</a>
        <a href="#">About</a>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          themeChange();
        }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
