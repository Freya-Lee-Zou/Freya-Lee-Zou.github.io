"use client";
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  texts, 
  speed = 100, 
  delay = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const text = texts[currentTextIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setCurrentText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsTyping(true);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, delay);
        }
      }, speed);
      
      return () => clearInterval(typeInterval);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentTextIndex, isTyping, texts, speed, delay, mounted]);

  // Fallback for SSR
  if (!mounted) {
    return (
      <span className="inline-block">
        {texts[0]}
      </span>
    );
  }

  return (
    <span className="inline-block">
      {currentText}
    </span>
  );
};
