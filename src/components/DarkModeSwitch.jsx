"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function DarkModeSwitch() {
  const { themes, setTheme, systemTheme, theme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(theme);
  useEffect(() => {
    setMount(true);
  }, []);
  const hendleTheme = () => {
    setTheme("light");
    console.log("handle theme");
  };
  const handleDarkMode = () => {
    setTheme("dark");
    console.log("handle theme");
  };
  return (
    <div>
      {mount && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl hover:text-amber-400 cursor-pointer"
          onClick={hendleTheme}
        />
      ) : (
        <MdDarkMode
          className="text-xl hover:text-amber-400 cursor-pointer"
          onClick={handleDarkMode}
        />
      )}
    </div>
  );
}

export default DarkModeSwitch;
