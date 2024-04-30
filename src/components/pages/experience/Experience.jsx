import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('workExperience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const workExperience = [
    {
      title: 'Associate 2 Software Developer',
      company: 'Capgemini Service India',
      duration: 'Nov 2021 - Present',
      description: 'Responsible for developing and maintaining web applications using React, Node.js, etc.',
    },
    {
      title: 'Web Developer',
      company: 'Evision Technoserve.',
      duration: 'April 2021 - Oct 2021',
      description: 'Responsible for Developing and Maintaining web applications using Html5, CSS3, JavaScript jQuery Bootstrap4 and PHP.',
    },
    // Add more work experiences
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Savitribai Phule Pune University',
      graduationYear: '2019',
      description: 'Studied various aspects of computer science, including algorithms, data structures, programming Languages etc.',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'MSBTE',
      graduationYear: '2016',
      description: 'Studied various aspects of computer science, including algorithms, data structures, etc.',
    },
    
    // Add more education details
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      provider: 'Certification Provider Name',
      year: '2022',
      description: 'Certification demonstrating proficiency in React development.',
    },
    // Add more certifications
  ];

  const renderWorkExperience = () => (
    <div>
      {workExperience.map((job, index) => (
        <div className="card" key={index}>
          <h4>{job.title} at {job.company}</h4>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div>
      {education.map((edu, index) => (
        <div className="card" key={index}>
        <h4>{edu.degree}</h4>
          <p>{edu.institution}, Graduated {edu.graduationYear}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div>
      {certifications.map((cert, index) => (
        <div className="card" key={index}>
        <h4>{cert.title}</h4>
          <p>{cert.provider}, {cert.year}</p>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'workExperience':
        return renderWorkExperience();
      case 'education':
        return renderEducation();
      case 'certifications':
        return renderCertifications();
      default:
        return null;
    }
  };

  return (
    <section id="experience">
      <div className="container">
        <div className="tab-panel">
          <div className="tabs">
            <button onClick={() => handleTabChange('workExperience')} className={activeTab === 'workExperience' ? 'active' : ''}>
              Work Experience
            </button>
            <button onClick={() => handleTabChange('education')} className={activeTab === 'education' ? 'active' : ''}>
              Education
            </button>
            <button onClick={() => handleTabChange('certifications')} className={activeTab === 'certifications' ? 'active' : ''}>
              Certifications
            </button>
          </div>
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
