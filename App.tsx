import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState } from './types';
import { WORDS, GAME_DURATION } from './constants';
import StartScreen from './components/StartScreen';
import GameOverScreen from './components/GameOverScreen';
import Scoreboard from './components/Scoreboard';
import WordDisplay from './components/WordDisplay';
import InputField from './components/InputField';

// Helper function to shuffle an array
const shuffleWords = (words: string[]): string[] => {
  return [...words].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Waiting);
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = useCallback(() => {
    setGameState(GameState.Playing);
    setWords(shuffleWords(WORDS));
    setCurrentWordIndex(0);
    setTypedText('');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (gameState !== GameState.Playing) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          setGameState(GameState.Finished);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [gameState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTypedText = e.target.value;
    // Prevent typing spaces at the beginning
    if (newTypedText.trim() === '' && newTypedText.length > 0) return;
    
    // Check for word match on space
    if (newTypedText.endsWith(' ')) {
        const wordToCompare = words[currentWordIndex];
        if (newTypedText.trim() === wordToCompare) {
            setScore(prev => prev + 1);
            setCurrentWordIndex(prev => prev + 1);
            setTypedText('');
        }
    } else {
       setTypedText(newTypedText);
    }
  };

  const renderGameContent = () => {
    switch (gameState) {
      case GameState.Waiting:
        return <StartScreen onStart={startGame} />;
      case GameState.Finished:
        return <GameOverScreen score={score} onRestart={startGame} />;
      case GameState.Playing:
        return (
          <div className="w-full max-w-3xl flex flex-col items-center">
            <Scoreboard score={score} timeLeft={timeLeft} />
            <div className="relative mt-8 w-full text-center">
                <WordDisplay
                  word={words[currentWordIndex]}
                  typedText={typedText}
                />
            </div>
            <InputField
              ref={inputRef}
              value={typedText}
              onChange={handleInputChange}
              disabled={gameState !== GameState.Playing}
            />
             <p className="text-sm text-gray-400 mt-4">Type the word and press space to move to the next one.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center p-4 selection:bg-fuchsia-500 selection:text-white">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500 mb-8">
            Speed Typer
        </h1>
        {renderGameContent()}
    </div>
  );
};

export default App;
