import React from 'react';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import musicPlayer from './assets/project3.png';

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      
      {/* Games subsection under Projects */}
      <div>
        <h3>Games</h3>
        <div className="project">
          <a href="https://pandorasbag.itch.io/mygame" target="_blank" rel="noopener noreferrer">
            <img src={project1} alt="CBP1" style={{ width: '350px', borderRadius: '5%' }} />
          </a>
          <p>Fun soccer game with over-complicated controls. Built using Unity.</p>
        </div>
        <div className="project">
          <a href="https://pandorasbag.itch.io/simcoe-bros" target="_blank" rel="noopener noreferrer">
            <img src={project2} alt="CBP2" style={{ width: '350px', borderRadius: '5%' }} />
          </a>
          <p>A game where you fight a single enemy, the Dodge Monster. Built using Unity.</p>
        </div>
      </div>

      {/* Music Apps subsection under Projects */}
      <div>
        <h3>Music Apps</h3>
        <div className="project">
          <img src={musicPlayer} alt="Music Player App" style={{ width: '350px', borderRadius: '5%' }} />
          <p>A C# music player application that allows users to download and play their favorite songs with an easy-to-use interface. (Sample songs of my choosing are included for testing purposes :) )</p>
          {/* Download link for the Music Player App using Google Drive */}
          <a href="https://drive.google.com/file/d/1o0JM35Ugv-M87oMTlyos55pFyVHKW0E3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Click here to download the Music Player App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
