import React, { useState, useEffect } from "react";

const ScrollDownButton = ({ targetId = "more-content" }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Smoothly decrease opacity over 200px scroll
      const newOpacity = Math.max(1 - scrollY / 200, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`#${targetId}`}
      aria-label="Scroll down"
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center 
                  rounded-full text-white text-3xl lg:text-5xl 
                  cursor-pointer animate-bounce z-50 hover:shadow-lg 
                  transition duration-500`}
      style={{
        color: "#302024",
        opacity,
        backgroundColor: "rgba(255, 255, 255, 0.6)", // more transparent white
        transition: "opacity 0.5s ease-out, background-color 0.3s ease",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  );
};

export default ScrollDownButton;
