"use client";
import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>somthing went wrong please trye again later</h1>
      <button onClick={() => reset()} className="hover:text-amber-600">
        try again
      </button>
    </div>
  );
}
