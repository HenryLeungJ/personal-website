import React from "react";
import Project from "./project";
import RevealOnScroll from "./revealOnScroll";

const projects = () => {
  const projects = [
    { imagePath: "futuresdex.png", id: 0 },
    { imagePath: "snaptext.png", id: 1 },
    { imagePath: "ChattingBusiness.png", id: 2 },
    { imagePath: "companyguesser.png", id: 3 },
    { imagePath: "cryptoviewer.png", id: 4 },
  ];
  return (
    <div className="container mx-auto px-4 py-8 my-10 w-screen">
      <h1 className="text-3xl text-center font-bold mb-8 text-center">
        My Projects
      </h1>
      <RevealOnScroll key={1}>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[8rem] items-center place-items-center">
          {projects.map(({ imagePath, id }) => (
            <Project imagePath={imagePath} id={id} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default projects;
