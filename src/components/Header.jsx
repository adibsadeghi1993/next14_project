import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center p-3 justify-between mx-auto max-w-6xl">
      <div className="flex gap-4">
        <MenuItem title="home" Icon={AiFillHome} address="/" />
        <MenuItem title="about" Icon={BsFillInfoCircleFill} address="/about" />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />

        <Link href={"/"} className=" flex gap-1 items-center">
          <span className="text-2xl font-bold py-1 px-2 bg-amber-500 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">clone</span>
        </Link>
      </div>
    </div>
  );
}
