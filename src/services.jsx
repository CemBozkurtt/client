import React from 'react';
import javaImg from './assets/javaimg.png'; 
import csharpImg from './assets/imgcsharp.png';
import webDevImg from './assets/webdevimg.png'; 

const Services = () => {
  return (
    <div>
      <h2>My Services</h2>
      <div className="service">
        <img src={javaImg} alt="Java Programming" style={{ width: '200px' }} />
        <h3>Java Programming</h3>
        <p> Java programming services.</p>
      </div>
      <div className="service">
        <img src={csharpImg} alt="C# Programming" style={{ width: '200px' }} />
        <h3>C# Programming</h3>
        <p> C# programming and development services.</p>
      </div>
      <div className="service">
        <img src={webDevImg} alt="Web Development" style={{ width: '200px' }} />
        <h3>Web Development</h3>
        <p>Web development services tailored to your needs.</p>
      </div>
    </div>
  );
};

export default Services;
