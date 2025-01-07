import React from "react";
import {
  HomeRounded,
  WorkRounded,
  SchoolRounded,
  BuildRounded,
  WorkspacePremiumRounded,
  EmojiEventsRounded,
  SportsSoccerRounded,
  ContactMailRounded,
  CodeRounded,
} from "@mui/icons-material";

interface Button {
  name: string;
  icon: React.ElementType;
  path: string;
  color: string;
  size: number; // Icon size in pixels
}

export const buttons: Button[] = [
  { name: "Home", icon: HomeRounded, path: "home", color: "#2196F3", size: 30 },
  {
    name: "Work Experience",
    icon: WorkRounded,
    path: "work",
    color: "#4CAF50",
    size: 30,
  },
  {
    name: "Projects",
    icon: CodeRounded,
    path: "project",
    color: "#FF9800",
    size: 30,
  },
  {
    name: "Education",
    icon: SchoolRounded,
    path: "education",
    color: "#9C27B0",
    size: 30,
  },
  {
    name: "Certificates",
    icon: WorkspacePremiumRounded,
    path: "certificate",
    color: "#FFC107",
    size: 30,
  },
  {
    name: "Skills",
    icon: BuildRounded,
    path: "skills",
    color: "#607D8B",
    size: 30,
  },
  {
    name: "Extra Curricular",
    icon: EmojiEventsRounded,
    path: "extra",
    color: "#FF5722",
    size: 30,
  },
  {
    name: "Hobbies and More",
    icon: SportsSoccerRounded,
    path: "hobbies",
    color: "#795548",
    size: 30,
  },
  {
    name: "Contact Us",
    icon: ContactMailRounded,
    path: "contact",
    color: "#E91E63",
    size: 30,
  },
];
