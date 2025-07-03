import React from 'react';

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="text-center bg-gray-800 p-8 rounded-lg shadow-2xl flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-100 mb-2">Game Over!</h2>
      <p className="text-lg text-gray-300 mb-6">Your final score is:</p>
      <p className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500 mb-8">
        {score}
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOverScreen;
