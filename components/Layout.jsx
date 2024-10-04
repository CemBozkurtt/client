import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

export default function Layout() {
  return (
    <>
      <header>
        <div className="logo">CB</div> 
        <h1>Cem Bozkurt</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/project">Projects</Link> | <Link to="/contact">Contact Me</Link>
        </nav>
      </header>
      <br />
      <hr />
    </>
  );
}
