import React, { useEffect, useState } from "react";
import Section from "../components/Section";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <Section id="about" className="relative" background="purple-green">
      <div className="relative flex flex-row w-full min-h-screen">
        <div className="w-full relative flex flex-col pl-20 pr-10 py-20 z-10">
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #87CEEB 0, #87CEEB 4px, transparent 4px, transparent 8px)",
            }}
          ></div>

          <h2
            className={`text-green-accent text-5xl font-bold mb-8 relative inline-block ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s", opacity: isVisible ? 1 : 0 }}
          >
            ABOUT ME
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-green-accent"></span>
          </h2>

          <div className="flex flex-col max-w-3xl">
            <p
              className={`text-text-primary text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.2s", opacity: isVisible ? 1 : 0 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p
              className={`text-text-primary text-xl leading-relaxed mb-4 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.3s", opacity: isVisible ? 1 : 0 }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p
              className={`text-text-primary text-xl leading-relaxed ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.4s", opacity: isVisible ? 1 : 0 }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
