import React from 'react';

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);


interface ScoreboardProps {
  score: number;
  timeLeft: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, timeLeft }) => {
  return (
    <div className="w-full flex justify-around items-center bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700">
      <div className="flex items-center space-x-3 text-2xl">
        <StarIcon />
        <span className="font-bold text-sky-400">Score: {score}</span>
      </div>
      <div className="flex items-center space-x-3 text-2xl">
        <ClockIcon />
        <span className="font-bold text-fuchsia-400">Time: {timeLeft}s</span>
      </div>
    </div>
  );
};

export default Scoreboard;
