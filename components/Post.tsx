"use client";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
import { IKImage } from "imagekitio-next";
const Post = () => {
  return (
    <div>
      <div>
        <IKImage
          urlEndpoint={urlEndpoint}
          path="/general/avatar.png"
          width={40}
          height={40}
          alt="person posted"
        />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
