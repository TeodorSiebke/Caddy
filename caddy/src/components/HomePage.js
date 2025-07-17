
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h1 className="display-4">Pocket Caddy</h1>
        <h2 className="mb-4">Your Course Name Here</h2>
      </div>
      <div className="d-grid gap-3 col-md-6 mx-auto mt-4">
        <Link to="/holes" className="btn btn-primary btn-lg">The Holes</Link>
        <Link to="/info" className="btn btn-primary btn-lg">Course Info</Link>
        <a href="https://www.your-golf-course-booking-url.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Book a Tee Time</a>
      </div>
    </div>
  );
};

export default HomePage;
