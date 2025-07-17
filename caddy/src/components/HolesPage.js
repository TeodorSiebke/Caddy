
import React from 'react';
import { Link } from 'react-router-dom';

const HolesPage = () => {
  const holes = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">The Holes</h2>
      <div className="row justify-content-center">
        {holes.map(hole => (
          <div key={hole} className="col-4 col-md-2 mb-3">
            <Link to={`/hole/${hole}`} className="btn btn-primary btn-lg w-100">{hole}</Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">Back</Link>
      </div>
    </div>
  );
};

export default HolesPage;
