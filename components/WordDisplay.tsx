import React from 'react';

interface WordDisplayProps {
  word: string;
  typedText: string;
}

const Character: React.FC<{ char: string; state: 'correct' | 'incorrect' | 'default' }> = ({ char, state }) => {
    let colorClass = 'text-gray-400';
    if(state === 'correct') colorClass = 'text-sky-300';
    if(state === 'incorrect') colorClass = 'text-red-500 bg-red-500/20 rounded';

    return <span className={`transition-colors duration-200 ${colorClass}`}>{char}</span>
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, typedText }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-4xl tracking-widest font-mono select-none">
      {word.split('').map((char, index) => {
        let state: 'correct' | 'incorrect' | 'default' = 'default';
        if (index < typedText.length) {
            state = typedText[index] === char ? 'correct' : 'incorrect';
        }
        return <Character key={index} char={char} state={state} />;
      })}
    </div>
  );
};

export default WordDisplay;
