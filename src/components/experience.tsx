"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    side: 0,
    date: "2023",
    title: "$20 000 Centennial Scholarship",
    icon: FaAward,
    color: "bg-yellow-500",
  },
  {
    id: 2,
    side: 0,
    date: "2023",
    title: "Started University",
    icon: FaGraduationCap,
    color: "bg-blue-500",
  },
  {
    id: 3,
    side: 1,
    date: "2024",
    title: "Internship at Atomic",
    icon: FaBriefcase,
    color: "bg-purple-500",
  },
  {
    id: 4,
    side: 0,
    date: "2024",
    title: "UBC BUCS Team",
    icon: FaLightbulb,
    color: "bg-green-500",
  },
  {
    id: 5,
    side: 1,
    date: "2025",
    title: "Internship at HP",
    icon: FaBriefcase,
    color: "bg-purple-500",
  },
];

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition duration-1000
      ${isVisible ? "fade_after" : "fade_before"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleMilestoneClick = (milestone: any) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-[60%]">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Career Timeline
      </h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {timelineData.map((milestone, index) => (
          <RevealOnScroll>
            <div
              key={milestone.id}
              className={`mb-8 flex justify-between items-center w-full ${
                milestone.side === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full min-w-fit p-2">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {milestone.date}
                </h1>
              </div>
              <button
                onClick={() => handleMilestoneClick(milestone)}
                className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl ${
                  milestone.color
                } text-white cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                  milestone.color.split("-")[1]
                }-400`}
              >
                <h3 className="mb-3 font-bold text-xl">{milestone.title}</h3>
                <milestone.icon className="text-4xl mb-3 inline-block" />
                <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Click for more details
                </p>
              </button>
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
            className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
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
                  Detailed information about{" "}
                  {selectedMilestone.title.toLowerCase()} milestone. This
                  section can include more specific details, achievements, or
                  reflections related to this particular point in your career.
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
