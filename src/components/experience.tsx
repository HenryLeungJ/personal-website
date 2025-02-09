"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaLightbulb } from "react-icons/fa";
import RevealOnScroll from "./revealOnScroll";

interface Milestone {
  icon: React.ElementType; // This assumes icon is a React component
  color: string;
  title: string;
  description: string;
}

const timelineData = [
  {
    id: 1,
    side: 0,
    date: "2023",
    title: "University of British Columbia",
    icon: FaGraduationCap,
    color: "bg-blue-500",
    img: "/experiences/UBC_LOGO.png",
    description: (
      <p>
        I was honored to be admitted to the{" "}
        <strong>University of British Columbia</strong> as a Combined Major in{" "}
        <strong>Computer Science</strong> and Business student, receiving a{" "}
        <strong>$20,000</strong> scholarship. The opportunity to blend my
        entrepreneurial ambitions with my passion for computer science at
        Canada&apos;s <strong>top-ranked</strong> business school was an
        exceptional chance I was determined to pursue.
      </p>
    ),
  },
  {
    id: 2,
    side: 0,
    date: "2023",
    title: "AWS",
    icon: FaGraduationCap,
    color: "bg-blue-500",
    img: "/experiences/AWS.png",
    description: (
      <p>
        I obtained my AWS Cloud Practitioner Certification. I learned core
        technologies and concepts such as Lambda, EC2, SageMaker, DynamoDB and
        more!
      </p>
    ),
  },
  {
    id: 3,
    side: 1,
    date: "2024",
    title: "Atomic",
    icon: FaBriefcase,
    color: "bg-purple-500",
    img: "/experiences/Atomic.jpg",
    description: (
      <p>
        My first internship was at Atomic, a no-code platform designed to
        empower everyday users to create full-stack web applications with ease.
        As a Software Developer Intern, I applied my expertise in JavaScript,
        SQL, Node.js, React.js, and AWS to tackle complex challenges and deliver
        innovative features.
      </p>
    ),
  },
  {
    id: 4,
    side: 0,
    date: "2024",
    title: "UBC BUCS Team",
    icon: FaLightbulb,
    color: "bg-green-500",
    img: "/experiences/BUCS.jpg",
    description: (
      <p>
        I joined the BUCS team as a Software Engineer, where my contributions
        impact over 400 students. This opportunity allows me to combine my
        passion for hosting career-focused social events with developing
        technology that streamlines students&apos; career growth and
        opportunities.
      </p>
    ),
  },
  {
    id: 5,
    side: 1,
    date: "2025",
    title: "HP (Hewlett-Packard)",
    icon: FaBriefcase,
    color: "bg-purple-500",
    img: "/experiences/HP.png",
    description: (
      <p>
        I am thrilled to be joining the HP team as a Fullstack Application
        Developer Intern. I look forward to the opportunities and challenges
        ahead!
      </p>
    ),
  },
];

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(
    null
  );

  const handleMilestoneClick = (milestone: any) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="container mx-auto px-4 w-[60%] mb-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Career Timeline
      </h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {timelineData.map((milestone, index) => (
          <RevealOnScroll key={index}>
            <div
              key={milestone.id}
              className={`mb-8 flex justify-between items-center w-full ${
                milestone.side === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full min-w-fit p-2">
                <h1 className="mx-auto font-semibold text-lg text-white mr-2">
                  {milestone.date}
                </h1>
                <milestone.icon className="text-xl text-white inline-block" />
              </div>
              <button
                style={{
                  background: "url(" + milestone.img + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                onClick={() => handleMilestoneClick(milestone)}
                className={`order-1 h-[9rem] w-5/12 px-6 py-4 rounded-lg shadow-xl ${
                  milestone.color
                } text-black cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                  milestone.color.split("-")[1]
                }-400`}
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {selectedMilestone && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
          onClick={closeModal}
        >
          <div
            className="relative top-[15rem] mx-auto p-5 border w-[50rem] shadow-lg rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-3 text-center">
              <selectedMilestone.icon
                className={`mx-auto text-6xl ${selectedMilestone.color.replace(
                  "bg-",
                  "text-"
                )}`}
              />
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                {selectedMilestone.title}
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  {selectedMilestone.description}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="closeModal"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
