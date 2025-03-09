"use client";

import { shareAction } from "@/actions";
import { IKImage } from "imagekitio-next";
import { useState } from "react";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const handleImageLoader = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form
      action={shareAction}
      className=" border-y-1 border-borderGray gap-2 max-lg:gap-[1px] flex pt-4 "
    >
      <div className="w-1/9 flex justify-end max-lg:ml-1">
        <IKImage
          urlEndpoint={urlEndpoint}
          path="/general/avatar.png"
          width={60}
          height={60}
          alt="profile logo"
          className="w-[35px] h-[35px] rounded-full "
        />
      </div>
      <div className="w-8/9 ">
        <div className="border-b-1 border-borderGray pb-1">
          <textarea
            name="description"
            id=""
            className="w-full outline-none border-none p-[5px] text-xl hide-scrollbar"
            placeholder="What is Happening?"
          />
          <div className="text-iconBlue flex items-center gap-1 cursor-pointer hover:bg-borderGray w-fit rounded-3xl px-2">
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/svg/globe.svg"
              width={5}
              height={5}
              alt=""
              className="text-blue-400 w-4 h-4"
            />
            <span>Everyone can reply</span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2 pb-2">
          <div className="flex gap-4 max-md:gap-1 ">
            <input
              id="fileLoader"
              name="file"
              type="file"
              onChange={handleImageLoader}
              className="hidden"
            />
            <label htmlFor="fileLoader">
              <IKImage
                urlEndpoint={urlEndpoint}
                path="/icons/image.svg"
                width={20}
                height={20}
                alt=""
                className="text-iconBlue w-5 h-5 cursor-pointer"
              />
            </label>
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/icons/gif.svg"
              width={5}
              height={5}
              alt=""
              className="text-blue-400 w-5 h-5"
            />
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/icons/image.svg"
              width={5}
              height={5}
              alt=""
              className="text-blue-400 w-5 h-5"
            />
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/icons/emoji.svg"
              width={50}
              height={50}
              alt=""
              className="text-blue-400 w-5 h-5"
            />
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/icons/schedule.svg"
              width={5}
              height={5}
              alt=""
              className="text-blue-400 w-5 h-5"
            />
            <IKImage
              urlEndpoint={urlEndpoint}
              path="/icons/location.svg"
              width={5}
              height={5}
              alt=""
              className="text-blue-400 w-5 h-5"
            />
          </div>
          <button className="py-2 max-sm:px-4 px-8 bg-white text-black rounded-full mr-4 cursor-pointer hover:bg-gray-200 font-bold">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
