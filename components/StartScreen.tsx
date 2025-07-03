import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <p className="text-xl text-gray-300 mb-8 max-w-md">
        Test your typing speed! Type the words as fast as you can before the timer runs out.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
