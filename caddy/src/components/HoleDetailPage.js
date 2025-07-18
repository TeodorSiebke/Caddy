import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScore } from '../context/ScoreContext';

const HoleDetailPage = () => {
  let { holeNumber } = useParams();
  const { holeScores, handleStrokesChange, calculateScoreRelative, initialHolesData } = useScore();

  const currentHoleData = initialHolesData.find(hole => hole.number === parseInt(holeNumber));
  const currentHoleScore = holeScores.find(hole => hole.number === parseInt(holeNumber));

  if (!currentHoleData) {
    return <div className="container mt-5 text-center">Hole not found.</div>;
  }

  // Placeholder data - in a real app, you'd fetch this based on the holeNumber
  const proTip = "A well-placed tee shot to the left side of the fairway will avoid the fairway bunkers and set up a good approach to the green. The green is guarded by a bunker on the right, so aim for the center.";

  return (
    <div className="container mt-5">
      <div className="card bg-light">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Hole {holeNumber}</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body text-center">
                  <h5>Hole {holeNumber} Map Placeholder</h5>
                  <p>[Map image or interactive map will go here]</p>
                </div>
              </div>
              <h4>Key Information</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Par
                  <span className="badge bg-primary rounded-pill">{currentHoleData.par}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Distance
                  <span className="badge bg-primary rounded-pill">420 yards</span>
                </li>
              </ul>
              <h4>Pro Tip</h4>
              <p>{proTip}</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <label htmlFor="strokesInput" className="form-label me-2 mb-0">Strokes:</label>
              <input
                type="number"
                id="strokesInput"
                className="form-control w-auto"
                placeholder="Enter strokes"
                value={currentHoleScore ? currentHoleScore.strokes : ''}
                onChange={(e) => handleStrokesChange(parseInt(holeNumber), e.target.value)}
                min="1"
              />
              <span className="ms-2">Score: {calculateScoreRelative(currentHoleData.par, currentHoleScore ? currentHoleScore.strokes : '')}</span>
            </div>
            <Link to="/holes" className="btn btn-secondary">Back to Holes</Link>
            {parseInt(holeNumber) < 9 && (
              <Link to={`/hole/${parseInt(holeNumber) + 1}`} className="btn btn-primary ms-2">Next Hole</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoleDetailPage;