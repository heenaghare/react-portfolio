import React, { useState } from 'react';
import './project.css';
import web from './web.webp'; // Import the image
import coding from './coding.webp'; // Import the image
import digital from './digital.webp'; // Import the image

const Project = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const project = [
    {
      title: 'Evision Technoserve (www.evisiontechnoserve.com) (07/2021 – 10/2021)',
      description: 'This is a Training and Placement website designed and developed using Html5, CSS3, JavaScript jQuery Bootstrap4, and PHP',
      imageUrl: web,
    },
    {
      title: 'Innovative Design Services (www.idts.co.in)   (09/2021 - 09/2021)',
      description: `This is a responsive website designed and developed using
        HTML5, CSS3, JavaScript, Bootstrap4, and PHP. 
        Full Stack Development.
        - Handled C panel.
        - Monitoring Team members.
        - Consistently Delivers working software that meets standards.
        - Efficiently executes assigned actions.
       `,
      imageUrl: coding,
    },
    {
      title: 'Sparkon Engineer (www.sparkonengineers.com)(02/2020 - 04/2020)',
      description: `This is a responsive website designed and developed using
      - Html5, CSS3, JavaScript, and Bootstrap4.
      - Ensures applications meet the acceptance criteria.
      - Directed team meetings to check on progress and plans.
      - Code direction.`,
      imageUrl: digital,
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section id="project" className="project-section">
      <div className="container">
        <h2>Project</h2>
        <div className="project">
          {project.map((project, index) => (
            <div
              className={`project-item ${flippedIndex === index ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-front">
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
              </div>
              <div className={`card-back ${flippedIndex === index ? 'visible' : ''}`}>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
