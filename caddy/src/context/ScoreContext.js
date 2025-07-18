import React, { createContext, useState, useEffect, useContext } from 'react';

const ScoreContext = createContext();

const initialHolesData = [
  { number: 1, par: 4 },
  { number: 2, par: 3 },
  { number: 3, par: 4 },
  { number: 4, par: 5 },
  { number: 5, par: 4 },
  { number: 6, par: 3 },
  { number: 7, par: 4 },
  { number: 8, par: 3 },
  { number: 9, par: 5 },
];

export const ScoreProvider = ({ children }) => {
  const [holeScores, setHoleScores] = useState(() => {
    const savedScores = localStorage.getItem('golf_hole_scores');
    if (savedScores) {
      return JSON.parse(savedScores);
    }
    return initialHolesData.map(hole => ({ ...hole, strokes: '' }));
  });

  useEffect(() => {
    localStorage.setItem('golf_hole_scores', JSON.stringify(holeScores));
  }, [holeScores]);

  const handleStrokesChange = (holeNumber, value) => {
    setHoleScores(prevScores =>
      prevScores.map(hole =>
        hole.number === holeNumber ? { ...hole, strokes: value } : hole
      )
    );
  };

  const calculateScoreRelative = (par, strokes) => {
    if (strokes === '' || isNaN(strokes)) {
      return '';
    }
    const diff = parseInt(strokes) - par;
    if (diff === 0) {
      return 'Par';
    } else if (diff > 0) {
      return `+${diff}`;
    } else {
      return `${diff}`;
    }
  };

  const resetScores = () => {
    localStorage.removeItem('golf_hole_scores');
    setHoleScores(initialHolesData.map(hole => ({ ...hole, strokes: '' })));
  };

  return (
    <ScoreContext.Provider value={{
      holeScores,
      handleStrokesChange,
      calculateScoreRelative,
      resetScores,
      initialHolesData
    }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
