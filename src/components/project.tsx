"use client";
import React from "react";

const project = ({
  imagePath,
  id,
  onClick,
}: {
  imagePath: string;
  id: number;
  onClick: () => void;
}) => {
  return (
    <button
      style={{
        background: "url(./projects/" + imagePath + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      onClick={onClick}
      //   onClick={() => handleMilestoneClick(milestone)}
      className={`order-1 h-[15rem] w-[25rem] py-4 ${
        id < 3 ? "col-span-2" : "col-span-3"
      } rounded-lg shadow-xl text-black cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
      }-400`}
    ></button>
  );
};

export default project;
