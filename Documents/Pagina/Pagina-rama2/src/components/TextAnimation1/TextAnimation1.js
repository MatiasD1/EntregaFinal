import React, { useEffect, useState } from 'react';

const TextAnimation = () => {
  const words = [
    "    disfrute.",
    "mar.",
    "    confort.",
    "     descanso.",
    "     bienestar."
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterStates, setLetterStates] = useState(() =>
    words.map(word => word.split('').map(() => 'letter'))
  );

  useEffect(() => {
    const interval = setInterval(changeWord, 3000);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const changeWord = () => {
    const cwIndex = currentWordIndex;
    const nwIndex = (currentWordIndex + 1) % words.length;

    // Animate the current word out
    animateLetterOut(cwIndex, () => {
      // After animating out, set the new word
      setLetterStates(prevStates => {
        const newStates = prevStates.map((state, i) => {
          if (i === cwIndex) {
            return state.map(() => 'letter behind');
          } else if (i === nwIndex) {
            return words[nwIndex].split('').map(() => 'letter in');
          } else {
            return state;
          }
        });
        return newStates;
      });

      setCurrentWordIndex(nwIndex);
    });
  };

  const animateLetterOut = (wordIndex, callback) => {
    const letterOutTime = 80;
    const letters = letterStates[wordIndex];

    letters.forEach((_, i) => {
      setTimeout(() => {
        setLetterStates(prevStates => {
          const newStates = [...prevStates];
          newStates[wordIndex][i] = 'letter out';
          return newStates;
        });

        if (i === letters.length - 1) {
          setTimeout(callback, letterOutTime);
        }
      }, i * letterOutTime);
    });
  };

  return (
    <div className="textAnimation1">
      <p>Conectá con el</p>
      <p>
        {words.map((word, i) => (
          <span key={i} className={`word ${i === currentWordIndex ? 'active' : ''}`}>
            {word.split('').map((letter, j) => (
              <span key={j} className={letterStates[i][j]}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </p>
      <p className='subtituloTextAnimation'>Alquiler temporario</p>
    </div>
  );
};

export default TextAnimation;
