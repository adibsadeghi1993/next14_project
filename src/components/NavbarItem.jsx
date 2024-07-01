"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold  ${
          genre === param
            ? "underline underline-offset-8 decoration-amber-500 decoration-4"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
