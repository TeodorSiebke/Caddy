import React from 'react';
import { Link } from 'react-router-dom';
import { useScore } from '../context/ScoreContext';

const HolesPage = () => {
  const { holeScores, resetScores, initialHolesData } = useScore();

  const totalScore = holeScores.reduce((acc, hole) => {
    if (hole.strokes !== '' && !isNaN(hole.strokes)) {
      return acc + (parseInt(hole.strokes) - hole.par);
    }
    return acc;
  }, 0);

  const formatTotalScore = (score) => {
    if (score === 0) {
      return 'E';
    } else if (score > 0) {
      return `+${score}`;
    } else {
      return `${score}`;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">The Holes</h2>
      <div className="row justify-content-center">
        {initialHolesData.map(hole => (
          <div key={hole.number} className="col-4 col-md-2 mb-3">
            <Link to={`/hole/${hole.number}`} className="btn btn-primary btn-lg w-100">Hole {hole.number}</Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h3>Total Score: {formatTotalScore(totalScore)}</h3>
        <button onClick={resetScores} className="btn btn-danger me-2">Reset Scores</button>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default HolesPage;
