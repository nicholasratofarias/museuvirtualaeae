import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroPage } from './intro/IntroPage';
import { MainPage } from './MainPage';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence mode='wait'>
      {showIntro ? (
        <IntroPage onStart={() => setShowIntro(false)} />
      ) : (
        <MainPage onBack={() => setShowIntro(true)} />
      )}
    </AnimatePresence>
  );
}

export default App;