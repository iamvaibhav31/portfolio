import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ClickSpark } from './components/custom';
import Terminal from './components/Terminal';
import Info from './components/Info';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <ClickSpark 
      className="min-h-screen bg-background relative overflow-hidden" 
    >
      <ToggleTheme />
      <div className="flex flex-col lg:flex-row h-screen">  
        <Info />
        <Terminal />
      </div>
      <Analytics />
    </ClickSpark>
  );
}

export default App;