import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import '../../styles.css'

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
        const container = ".tagcloud";
        const texts = [
          "HTML",
          "CSS",
          "SASS",
          "JavaScript",
          "React",
          "Vue",
          "Nuxt",
          "NodeJS",
          "Babel",
          "Jquery",
          "ES6",
          "GIT",
          "GITHUB",
        ];
  
        const options = {
          radius: 160,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        };
  
        TagCloud(container, texts, options);
      };

  }, []);

  return (
    <>
        <span className="tagcloud"></span>
    </>
  );
};

export default TextSphere;
          