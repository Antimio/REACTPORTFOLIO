import React from 'react';
import './style.css';
import MyPicture from './images/picture.png';

function Home() {
  return (
    <div className="container mt-4">
      <div>
        <div className="col-12">
          <img src={MyPicture} alt="Antimio's headshot" className="img-fluid float-md-right ml-md-4 mb-3" style={{maxWidth: "200px"}} />
          <p>
            My name is Antimio and I'm a student in a web-development bootcamp. This bootcamp taught me a lot; from basic HTML to REACT Vite and beyond.
          </p>
          <p>
            This page is a gallery of some of the work I've been creating. I hope you enjoy it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

