import React from "react";

export interface Project {
  name: string;
  description: string;
  image: string;
  skills: string[];
  links: {
    youtube?: string;
    github?: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface IconProps {
  className?: string;
}

