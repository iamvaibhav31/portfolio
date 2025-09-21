import React, { useState, useRef, useCallback, useEffect } from 'react';
import Typewriter from './Typewriter';
import { ScrollArea } from "@/components/ui/scroll-area";
import { portfolioInfo, commandList, commands, commandMap } from '../constant';
import { formatHelp, commandHandlers , initialHistory , noCommandFoundOutput } from '../utils';

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(initialHistory);
  const [isTypingActive, setIsTypingActive] = useState(true);
  const terminalRef = useRef(null);
  const currentStopRef = useRef(null);

  const updateLastItemTyping = useCallback((isTyping) => {
    setHistory((prev) => {
      if (prev.length > 0) {
        const last = prev[prev.length - 1];
        if (last.isTyping !== isTyping) {
          return [...prev.slice(0, -1), { ...last, isTyping }];
        }
      }
      return prev;
    });
  }, []);

  const addToHistory = useCallback((command, output, isTyping = true) => {
    setHistory((prev) => [...prev, { command, output, isTyping }]);
    if (isTyping) {
      setIsTypingActive(true);
    }
  }, []);

  const onTypingComplete = useCallback(() => {
    updateLastItemTyping(false);
    setIsTypingActive(false);
  }, [updateLastItemTyping]);

  const stopCurrentTyping = useCallback(() => {
    if (currentStopRef.current) {
      currentStopRef.current.stop();
    }
    updateLastItemTyping(false);
    setIsTypingActive(false);
  }, [updateLastItemTyping]);

  const handleKeyDown = useCallback((e) => {
    if (isTypingActive && e.key === 'c' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      stopCurrentTyping();
    }
  }, [isTypingActive, stopCurrentTyping]);

  useEffect(() => {
    if (isTypingActive && terminalRef.current) {
      terminalRef.current.focus();
    }
  }, [isTypingActive]);

  const handleCommand = useCallback((command) => {
    const lowerCommand = command.toLowerCase();
    let output = '';
    let isTyping = true;

    if (commandList.includes(lowerCommand)) {
      const handler = commandHandlers[lowerCommand];
      if (handler) {
        output = handler(portfolioInfo[lowerCommand]);
      } else {
        output = portfolioInfo[lowerCommand] || noCommandFoundOutput(command);
      }
    } else if (lowerCommand === commandMap.HELP) {
      output = formatHelp(commands);
    } else if (lowerCommand === commandMap.CLEAR) {
      setHistory(initialHistory);
      setInput('');
      return;
    } else {
      output = noCommandFoundOutput(command);
      isTyping = false;
    }

    addToHistory(command, output, isTyping);
    setInput('');
  }, [addToHistory]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput && !isTypingActive) {
      handleCommand(trimmedInput);
    }
  }, [input, handleCommand, isTypingActive]);

  // Render history items
  const renderHistory = useCallback(() => (
    history.map((item, index) => (
      <div key={`${item.command}-${index}`} className="mb-1">
        {item.command && <div className="flex items-center mb-1">
          <span className="text-primary font-bold mr-1 select-none">vaibhav@portfolio:~$</span>
          <span className="text-foreground ml-1">{item.command}</span>
        </div>}
        <div className={`output mb-1 whitespace-pre-wrap break-words text-sm leading-snug ${item.isTyping ? 'text-primary' : 'text-foreground'}`}>
          {item.isTyping ? (
            <Typewriter
              text={item.output}
              onComplete={onTypingComplete}
              className="text-primary"
              ref={(ref) => { currentStopRef.current = ref; }}
            />
          ) : (
            <span
              className="text-sm leading-snug"
              dangerouslySetInnerHTML={{ __html: item.output }}
            />
          )}
        </div>
      </div>
    ))
  ), [history, onTypingComplete]);

  return (
    <div className="w-full lg:w-2/3 h-full border-t lg:border-t-0 border-border lg:border-l bg-card overflow-hidden">
      <div className="h-full p-0 bg-card text-foreground font-monospace-body">
        <ScrollArea 
          className="h-full p-2 sm:p-4 pr-2 relative" 
          ref={terminalRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >

          {renderHistory()}

          {!isTypingActive && (
            <form onSubmit={handleSubmit} className="flex items-center mt-2 pt-2 border-t border-border">
              <span className="text-primary font-bold mr-1 select-none">vaibhav@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent border-none text-foreground font-monospace-body outline-none ml-1 placeholder:text-muted-foreground caret-primary text-sm"
                placeholder="Enter command..."
                aria-label="Terminal command input"
              />
            </form>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}

export default Terminal;