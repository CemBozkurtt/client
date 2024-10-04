import React from 'react';
import image from './assets/cemImage.jpg'
import resume from './assets/cembozkurtresume.pdf';
export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img src={image} alt="CB" style={{ width: '350px', borderRadius: '50%' }} />
      <p>Cem Bozkurt is a Software Engineering Technician student in Toronto, Ontario, fluent in English, French, and Turkish. With experience in service and mass-manufacturing management, Cem excels in communication, leadership, problem-solving, and project management. He has worked as a server at L’autre Saison in Montréal and as a board member and manager at StoneWrap in Istanbul. Currently pursuing an HND in Software Engineering at Centennial College, he also holds a CEGEP Diploma in Natural Sciences from John Abbott College.</p>
      <a href={resume} >Download My Resume</a>
    </div>
  );
}
