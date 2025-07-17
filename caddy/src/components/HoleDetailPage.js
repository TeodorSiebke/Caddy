
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const HoleDetailPage = () => {
  let { holeNumber } = useParams();

  // Placeholder data - in a real app, you'd fetch this based on the holeNumber
  const holeData = {
    par: 4,
    distance: 420,
    proTip: "A well-placed tee shot to the left side of the fairway will avoid the fairway bunkers and set up a good approach to the green. The green is guarded by a bunker on the right, so aim for the center."
  };

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
                  <span className="badge bg-primary rounded-pill">{holeData.par}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Distance
                  <span className="badge bg-primary rounded-pill">{holeData.distance} yards</span>
                </li>
              </ul>
              <h4>Pro Tip</h4>
              <p>{holeData.proTip}</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/holes" className="btn btn-secondary">Back to Holes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoleDetailPage;
