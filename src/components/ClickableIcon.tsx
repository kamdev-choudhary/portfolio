import { IconButton } from "@mui/material";
import React from "react";

interface ClickableIconProps {
  icon: React.ElementType; // Accepts a component that renders the icon
  href: string; // Accepts a URL
}

const ClickableIcon: React.FC<ClickableIconProps> = ({ icon: Icon, href }) => {
  return (
    <IconButton component="a" href={href}>
      <Icon />
    </IconButton>
  );
};

export default ClickableIcon;
