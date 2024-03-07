import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Phone:</h5>
              <p className="card-text">+44 7983235320</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email:</h5>
              <p className="card-text">antimiocasimiro@gmail.com</p> {/* Replace with your email */}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">GitHub:</h5>
              <p className="card-text">
                <a href="https://github.com/Antimio" target="_blank" rel="noopener noreferrer">Antimio</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;