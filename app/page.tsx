"use client";
import Share from "@/components/Share";
import Feed from "@/components/Feed";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [clicked, setclicked] = useState(1);

  return (
    <div>
      <div className="flex w-full ">
        <Link
          href="/"
          onClick={(e) => {
            clicked == 1 ? "" : setclicked(1);
          }}
          className="w-1/2 flex justify-center items-center h-14 hover:bg-inputGray cursor-pointer"
        >
          <div
            className={`${
              clicked === 1 ? "border-b-4 font-bold" : "text-textGray"
            } border-blue-500 h-full flex items-center`}
          >
            For you
          </div>
        </Link>
        <Link
          href="/"
          onClick={(e) => {
            clicked == 2 ? "" : setclicked(2);
          }}
          className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-inputGray"
        >
          <div
            className={`${
              clicked === 2 ? "border-b-4 font-bold " : "text-textGray"
            } border-blue-500  h-full flex items-center `}
          >
            Following
          </div>
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
