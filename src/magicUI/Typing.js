"use client";

import { useEffect, useState } from "react";

export function TypingAnimation({ texts, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0); // Index of the current letter
  const [textIndex, setTextIndex] = useState(0); // Index of the current text

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);

        // Wait for a brief moment and then start typing the next text
        setTimeout(() => {
          setI(0); // Reset letter index
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text, loop back if at the end
        }, 1000); // 1-second delay before starting the next string
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, texts, textIndex, duration]);

  return (
    <h1
      className={`text-6xl md:text-7xl md:pt-12 font-semibold text-purple-700 pb-12 leading-[8rem] tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {displayedText}
    </h1>
  );
}
