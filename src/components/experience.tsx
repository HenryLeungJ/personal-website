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
        In the Fall of 2023, I was honored to be admitted to the{" "}
        <strong>University of British Columbia</strong> as a Combined Major in{" "}
        <strong>Computer Science</strong> and Business student, receiving a{" "}
        <strong>$20,000</strong> scholarship.
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
        In the Fall of 2023, I obtained my AWS Cloud Practitioner Certification.
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
        In the Summer of 2024, I joined Atomic as a Softare Developer Intern. In
        this opportunity, I was able to collaborate with world class engineers
        to create a distributed no-code platform.
      </p>
    ),
  },
  {
    id: 4,
    side: 0,
    date: "2024",
    title: "UBC BUCS Team",
    color: "bg-green-500",
    img: "/experiences/BUCS.jpg",
    description: (
      <p>
        Throughout the 2024-2025 school year, I was the Software Engineer for
        the BUCS Community team at UBC. In this experience, I was able to create
        projects that impacted over 400 students in our student body.
      </p>
    ),
  },
  {
    id: 5,
    side: 1,
    date: "2025",
    title: "HP (Hewlett-Packard)",
    color: "bg-purple-500",
    img: "/experiences/HP.png",
    description: (
      <p>
        In the Spring of 2025, I joined HP as a Fullstack Application Developer
        intern! We worked on the Trusted Thin Clients, super secure physical
        endpoints to virtual machines!
      </p>
    ),
  },
  {
    id: 7,
    side: 1,
    date: "2025",
    title: "Tesla",
    color: "bg-purple-500",
    img: "/experiences/Tesla.jpg",
    description: (
      <p>
        In the Summer of 2025, I joined Tesla as a Software Engineer Intern on
        the Maps & Navigation team for Autopilot! In this opportunity, I was
        able to build projects from scratch and lead it to completion, build
        large algorithms ontop of billions of datapoints, and help improve the
        safety and accuracy of Tesla Autopilot!
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
              <div className="z-20 flex items-center justify-center order-1 bg-gray-800 shadow-xl w-16 h-10 rounded-full min-w-fit">
                <span className="font-semibold text-base text-white text-center">
                  {milestone.date}
                </span>
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
          className="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative mx-auto p-8 border w-full max-w-lg shadow-2xl rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                {selectedMilestone.title}
              </h3>
              <div className="mt-4 px-4 py-2">
                <div className="text-base text-gray-700">
                  {selectedMilestone.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
