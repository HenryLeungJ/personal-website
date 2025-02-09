"use client";
import React from "react";
import RevealOnScroll from "./revealOnScroll";
import Link from "next/link";

async function projects() {
  const projects = [
    { imagePath: "futuresdex.png", route: "/futuresdex", id: 0 },
    { imagePath: "SnapText.png", route: "/snaptext", id: 1 },
    { imagePath: "ChattingBusiness.png", route: "/chattingbusiness", id: 2 },
    { imagePath: "companyguesser.png", route: "/companyguesser", id: 3 },
    { imagePath: "cryptoviewer.png", route: "/cryptoviewer", id: 4 },
  ];
  return (
    <div className="container mx-auto px-4 py-8 my-10 w-screen h-screen flex flex-col justify-center">
      <h1 className="text-3xl text-center font-bold mb-8 text-center">
        My Projects
      </h1>
      <RevealOnScroll key={1}>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[8rem] items-center place-items-center mt-5">
          {projects.map(({ imagePath, id, route }) => (
            <Link
              key={id}
              href={route}
              style={{
                background: "url(./projects/" + imagePath + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              //   onClick={() => handleMilestoneClick(milestone)}
              className={`order-1 h-[15rem] w-[25rem] py-4 ${
                id < 3 ? "col-span-2" : "col-span-3"
              } rounded-lg shadow-xl text-black cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
            }-400`}
            ></Link>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}

export default projects;
