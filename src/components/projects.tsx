"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Project from "./project";
import RevealOnScroll from "./revealOnScroll";

const projects = () => {
  const router = useRouter();
  const projects = [
    { imagePath: "futuresdex.png", route: "/futuresdex", id: 0 },
    { imagePath: "snaptext.png", route: "/snaptext", id: 1 },
    { imagePath: "ChattingBusiness.png", route: "/chattingbusiness", id: 2 },
    { imagePath: "companyguesser.png", route: "/companyguesser", id: 3 },
    { imagePath: "cryptoviewer.png", route: "/cryptoviewer", id: 4 },
  ];
  return (
    <div className="container mx-auto px-4 py-8 my-10 w-screen">
      <h1 className="text-3xl text-center font-bold mb-8 text-center">
        My Projects
      </h1>
      <RevealOnScroll key={1}>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[8rem] items-center place-items-center">
          {projects.map(({ imagePath, id, route }) => (
            <Project
              imagePath={imagePath}
              id={id}
              onClick={() => router.push(route)}
            />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default projects;
