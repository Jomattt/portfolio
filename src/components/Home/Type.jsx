import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Flutter Developer",
          "MBA Student in Germany",
          "Mobile App Developer",
          "Frontend Technology Enthusiast",
          "React & Flutter Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;