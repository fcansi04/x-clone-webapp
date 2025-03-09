"use client";

import { IKImage } from "imagekitio-next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const Left = () => {
  const [media, setMedia] = useState<File | null>(null);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  return (
    <div className=" h-screen   pl-2 flex flex-col justify-between max-3xl:mr-2 pb-2 ">
      <div className="flex flex-col gap-2 items-center  3xl:pr-10">
        <Link
          href="/"
          className="rounded-full hover:bg-inputGray p-3 3xl:self-start"
        >
          <Image
            src="icons/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className=""
          />
        </Link>
        <div className="flex flex-col  justify-center  ">
          {menuList.map((item) => {
            return (
              <Link
                key={item.id}
                href="/"
                className="flex max-3xl:w-[55px] gap-5 rounded-full hover:bg-inputGray p-[0.65rem] max-3xl:justify-center transition-all
                  duration-200 "
              >
                <Image
                  src={`icons/${item.icon}`}
                  alt="logo "
                  width={28}
                  height={28}
                />
                <span className="self-end text-[20px] max-3xl:hidden">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        <Link
          className="w-full bg-textGrayLight text-black py-[0.5rem] text-center font-bold text-xl  rounded-full max-3xl:hidden "
          href="/"
        >
          Post
        </Link>
        <Link
          href="/"
          className="p-[0.65rem] hover:bg-textGray rounded-full max-3xl:w-[55px] 3xl:hidden"
        >
          <Image src="icons/emoji.svg" alt="a" width={30} height={30}></Image>
        </Link>
      </div>
      <div className="flex w-[95%] items-center  justify-between py-1 px-5 hover:bg-textGray rounded-full  max-3xl:hidden transition-all duration-200 cursor-pointer">
        <div>
          <IKImage
            urlEndpoint={urlEndpoint}
            path="/general/avatar.png"
            alt="user logo "
            width={50}
            height={50}
            className="rounded-full w-[38px]"
          />
        </div>

        <div className=" flex flex-col  text-sm">
          <span>name</span>
          <span>UserName</span>
        </div>
        <div className="font-bold">...</div>
      </div>
    </div>
  );
};

export default Left;
