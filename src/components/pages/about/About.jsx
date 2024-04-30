import React from 'react';
import heenaImage from './heena.jpg'; // Import the image
import './about.css'; // Import your CSS file if needed
const About = () => {
  const handleDownload = () => {
    // Replace 'path-to-your-cv.docx' with the actual path to your CV file
    const cvFilePath = '/cv.docx';
    const anchorElement = document.createElement('a');
    anchorElement.href = cvFilePath;
    anchorElement.download = 'Heena_Ghare_CV.docx'; // You can customize the downloaded file name
    anchorElement.click();
  };

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            {/* Use the imported image */}
            <img src={heenaImage} alt="Heena" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Heena Ghare <span className="typing-2"></span>
            </div>
            <p className="lead">
              I am a software developer and have completed my BE from Pune's reputed college.
            </p>
            <br />
            <p className="lead">
              I love to make new connections, going outside to different places, and exploring new things.
              Making websites took my attention. Because of my interest in this, I keep improving my skills.
            </p>
            <span>“Every moment is a fresh beginning.” ~T.S. Eliot</span>
            <br />
            <button className="custom-button" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
