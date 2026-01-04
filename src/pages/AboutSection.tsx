import React from "react";
import Section from "../components/Section";
import { useSectionVisibility } from "../hooks/useSectionVisibility";
import ContactCard from "../components/ContactCard";

const AboutSection: React.FC = () => {
  const isVisible = useSectionVisibility("about");

  return (
    <Section id="about" className="relative" bgType="green-purple">
      <div className="relative flex flex-row w-full min-h-screen">
        <div className="w-full relative flex flex-col pl-20 pr-10 pt-32 pb-20 z-10">
          <div>
            <h2
              className={`text-purple-primary text-5xl font-bold mb-8 relative inline-block ${
                isVisible ? "animate-slide-in-down" : ""
              }`}
              style={{ animationDelay: "0s" }}
            >
              ABOUT ME
              <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-purple-primary"></span>
            </h2>
          </div>

          <div className="flex flex-col" style={{ maxWidth: "60%" }}>
            <p
              className={`text-gray-800 text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              I'm Zion Pulapakura, an AI and software engineer based in
              Melbourne, Australia. I'm passionate about building intelligent,
              engaging software that blends modern machine learning, computer
              vision, and interactive application development to solve
              real-world problems and explore new creative possibilities.
            </p>
            <p
              className={`text-gray-800 text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "0.9s", opacity: 0 }}
            >
              My journey in technology started when I was 12, when I first got
              into Python and Javascript. This came from a drive to make ideas
              tangible, which eventually led to all types of exciting projects
              for me: from experimenting with game mechanics to developing
              AI-powered applications that respond to real-time data like hand
              gestures.
            </p>
            <p
              className={`text-gray-800 text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "1.0s", opacity: 0 }}
            >
              Now I'm 16, and I still love experimenting and building with AI. I
              dropped out of school at the end of my Year 10 (2025) to focus on
              building my AI engineering career.
            </p>
            <p
              className={`text-gray-800 text-xl leading-relaxed ${
                isVisible ? "animate-slide-in-left" : ""
              }`}
              style={{ animationDelay: "1.1s", opacity: 0 }}
            >
              I enjoy mastering diverse parts of the stack, whether that's
              working deeply with Python for AI and computer vision, leveraging
              full-stack technologies, or navigating cloud infrastructure to
              deploy scalable solutions.
            </p>
          </div>
        </div>

        {/* Contact Card in purple section */}
        <div
          className="absolute right-20 top-1/2 -translate-y-1/2 z-10"
          style={{ width: "400px" }}
        >
          <ContactCard isVisible={isVisible} animationDelay={1.9} />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
