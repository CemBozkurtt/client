import React from 'react';
import { Link } from 'react-router-dom';
import cemImgFace from '../src/assets/cemimgface.jpg'

export default function Home() {
  return (
    <div>
      <h2>Welcome to my page!</h2>
      <img src={cemImgFace} alt="CBF" style={{ width: '350px', borderRadius: '50%' }} />
      <div className='home-paragraph'>
        <p>Hi! I'm Cem Bozkurt, a Programming student. This is my personal portfolio where you can learn more about me and my work.</p>
        </div>
      <div className='home-buttons'>
        <Link to="/about"><button>Learn More About Me</button></Link>
        <Link to="/project"><button>View My Projects</button></Link>
      </div>
    
    </div>
  );
}
