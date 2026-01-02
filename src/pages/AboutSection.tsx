import React from "react";
import Section from "../components/Section";
import { useSectionVisibility } from "../hooks/useSectionVisibility";

const AboutSection: React.FC = () => {
  const isVisible = useSectionVisibility("about");

  return (
    <Section id="about" className="relative" bgType="green-purple">
      <div className="relative flex flex-row w-full min-h-screen">
        <div className="w-full relative flex flex-col pl-20 pr-10 pt-32 pb-20 z-10">
          <div>
            <h2
              className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
            >
              ABOUT ME
              <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-green-accent"></span>
            </h2>
          </div>

          <div className="flex flex-col max-w-3xl">
            <p
              className={`text-text-primary text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.2s", opacity: isVisible ? 1 : 0 }}
            >
              I'm Zion Pulapakura, an AI and software engineer based in
              Melbourne, Australia. I'm passionate about building intelligent,
              engaging software that blends modern machine learning, computer
              vision, and interactive application development to solve
              real-world problems and explore new creative possibilities.
            </p>
            <p
              className={`text-text-primary text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.3s", opacity: isVisible ? 1 : 0 }}
            >
              My journey in technology started when I was 12, when I first got
              into Python and Javascript. This came from a drive to make ideas
              tangible, which eventually led to all types of exciting projects
              for me: from experimenting with game mechanics to developing
              AI-powered applications that respond to real-time data like hand
              gestures.
            </p>
            <p
              className={`text-text-primary text-xl leading-relaxed ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.4s", opacity: isVisible ? 1 : 0 }}
            >
              I enjoy mastering diverse parts of the stack, whether that's
              working deeply with Python for AI and computer vision, leveraging
              full-stack technologies, or navigating cloud infrastructure to
              deploy scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
