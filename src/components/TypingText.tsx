import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { headlineTexts } from "../data/data";

const TypingText: React.FC = () => {
  const typingSpeed = 160;
  const backspaceSpeed = 160; // Speed of clearing each character
  const switchDelay = 160; // Delay before switching to the next word

  // State to control typing effect
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect handler
  useEffect(() => {
    let timer: any;
    const currentWord = headlineTexts[currentWordIndex];

    if (isTyping) {
      // Typing the word
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentText + currentWord[currentText.length]);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false); // Start backspacing after the word is typed
        }, switchDelay);
      }
    } else {
      // Backspacing the word
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1)); // Remove the last character
        }, backspaceSpeed);
      } else {
        // Once the word is fully cleared, switch to the next word
        setIsTyping(true); // Start typing the next word
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % headlineTexts.length
        ); // Loop through words
      }
    }

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or effect changes
  }, [currentText, isTyping, currentWordIndex]);

  return (
    <Typography
      variant="h5"
      sx={{
        display: "inline-block",
        whiteSpace: "nowrap", // Prevent text wrapping
        overflow: "hidden", // Hide overflowing text
        textOverflow: "ellipsis", // Show dots for truncated text
        maxWidth: "100%", // Ensure the text does not exceed container width
        alignmentBaseline: "central",
        fontWeight: "bold",
      }}
    >
      I am {currentText}
    </Typography>
  );
};

export default TypingText;
