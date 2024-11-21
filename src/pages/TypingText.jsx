import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function TypingText() {
  const words = ["MERN Stack", "React Native", "JavaScript "];
  const typingSpeed = 120;
  const backspaceSpeed = 100; // Speed of clearing each character
  const switchDelay = 100; // Delay before switching to the next word

  // State to control typing effect
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect handler
  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      // Typing the word
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentText + currentWord[currentText.length]);
        }, typingSpeed);
      } else {
        // If the word is fully typed, switch to backspace effect
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
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
      }
    }

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts or effect changes
  }, [currentText, isTyping, currentWordIndex, words]);

  return (
    <div>
      <Typography
        variant="h2"
        style={{ display: "inline-block", marginBottom: "10px" }}
      >
        {currentText}
      </Typography>
    </div>
  );
}

export default TypingText;
