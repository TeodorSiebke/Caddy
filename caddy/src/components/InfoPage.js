
import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Course Information</h2>
      <div className="accordion" id="courseInfoAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="lessons-heading">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#lessons-collapse" aria-expanded="true" aria-controls="lessons-collapse">
              Lessons
            </button>
          </h2>
          <div id="lessons-collapse" className="accordion-collapse collapse" aria-labelledby="lessons-heading" data-bs-parent="#courseInfoAccordion">
            <div className="accordion-body">
              <p>Our certified instructors offer private and group lessons for all skill levels. Whether you're a beginner looking to learn the basics or an experienced player wanting to fine-tune your swing, we have a program for you.</p>
              <p>Contact the pro shop for more details and to schedule your lesson.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="events-heading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#events-collapse" aria-expanded="false" aria-controls="events-collapse">
              Upcoming Events
            </button>
          </h2>
          <div id="events-collapse" className="accordion-collapse collapse" aria-labelledby="events-heading" data-bs-parent="#courseInfoAccordion">
            <div className="accordion-body">
              <ul>
                <li><strong>Member-Guest Tournament:</strong> August 15th-16th</li>
                <li><strong>Ladies' League Championship:</strong> September 5th</li>
                <li><strong>Junior Golf Clinic:</strong> Every Saturday in September</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mt-4">
        <div className="card-header">
          Advertisements
        </div>
        <div className="card-body">
          <p>Visit the Pro Shop for a 20% discount on all new drivers this month!</p>
          <p>Book a tee time online and receive a complimentary bucket of range balls.</p>
        </div>
      </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">Back</Link>
      </div>
    </div>
  );
};

export default InfoPage;
