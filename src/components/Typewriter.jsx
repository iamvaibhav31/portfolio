import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import DOMPurify from 'dompurify';
import { tokenizeHtml } from '../utils';

const Typewriter = forwardRef(({ text, delay = 30, cursor = true, onComplete, className = '' }, ref) => {
  const [displayHtml, setDisplayHtml] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const sanitizedTextRef = useRef('');
  const typingRef = useRef(true);
  const tokensRef = useRef([]);
  const tokenIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useImperativeHandle(ref, () => ({
    stop: () => {
      typingRef.current = false;
      setDisplayHtml(sanitizedTextRef.current);
      setIsComplete(true);
      if (onComplete) onComplete();
      if (animationRef.current) {
        if (typeof animationRef.current === 'number') {
          clearTimeout(animationRef.current);
        } else {
          cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = null;
      }
    }
  }));

  // Reset state when text changes
  useEffect(() => {
    setDisplayHtml('');
    setIsComplete(false);
    typingRef.current = true;
    tokenIndexRef.current = 0;
    charIndexRef.current = 0;
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }
  }, [text]); 

  useEffect(() => {
    if (!text || isComplete) return;

    // Sanitize full text once upfront
    const sanitizedText = DOMPurify.sanitize(text, {
      ALLOWED_TAGS: ['strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'br', 'p', 'div', 'span', 'h1', 'h2', 'h3', 'code'],
      ALLOWED_ATTR: ['href', 'target', 'class'],
      ALLOW_DATA_ATTR: false, // Disable data attributes for safety
    });
    sanitizedTextRef.current = sanitizedText;
    tokensRef.current = tokenizeHtml(sanitizedText);

    const typeNext = () => {
      if (!typingRef.current || isComplete || tokenIndexRef.current >= tokensRef.current.length) {
        typingRef.current = false;
        setIsComplete(true);
        if (onComplete) onComplete();
        return;
      }

      const token = tokensRef.current[tokenIndexRef.current];
      let nextChunk = '';

      if (token.type === 'tag') {
        // Insert complete tags instantly (no delay for smoothness)
        nextChunk = token.content;
        tokenIndexRef.current++; // Move to next token immediately
        charIndexRef.current = 0; // Reset for next text
      } else if (token.type === 'text') {
        // Type text char-by-char for smooth terminal feel
        if (charIndexRef.current < token.content.length) {
          nextChunk = token.content[charIndexRef.current];
          charIndexRef.current++;
        }
        if (charIndexRef.current >= token.content.length) {
          charIndexRef.current = 0;
          tokenIndexRef.current++;
        }
      }

      if (nextChunk) {
        setDisplayHtml((prev) => prev + nextChunk);
      }

      if (delay <= 50) {
        animationRef.current = requestAnimationFrame(() => {
          setTimeout(typeNext, delay);
        });
      } else {
        animationRef.current = setTimeout(typeNext, delay);
      }
    };

    // Start after brief pause
    const startTimeout = setTimeout(() => typeNext(), 50);
    return () => {
      clearTimeout(startTimeout);
      if (animationRef.current) {
        if (typeof animationRef.current === 'number') {
          clearTimeout(animationRef.current);
        } else {
          cancelAnimationFrame(animationRef.current);
        }
      }
    };
  }, [text, delay, isComplete, onComplete]);

  // Blinking cursor
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setCursorVisible((v) => !v), 400);
    return () => clearInterval(blinkInterval);
  }, []);

  const cursorChar = cursor && !isComplete ? (cursorVisible ? '█' : '') : ''; // Use block █ for better terminal feel

  return (
    <div
      ref={containerRef}
      className={`font-monospace-body leading-snug ${className}`}
      dangerouslySetInnerHTML={{ __html: isComplete ?  sanitizedTextRef.current : displayHtml + cursorChar   }}
    />
  );
});

Typewriter.displayName = 'Typewriter';

export default Typewriter;