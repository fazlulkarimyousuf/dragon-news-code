import React from "react";
import Marquee from "react-fast-marquee";

const LatesNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          inventore.
        </p>
          <p className="font-bold px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        inventore.
      </p>
        <p className="font-bold px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        inventore.
      </p>
        <p className="font-bold px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        inventore.
      </p>
      </Marquee>
    </div>
  );
};

export default LatesNews;
