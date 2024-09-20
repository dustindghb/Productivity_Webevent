import React, { useState } from "react";
import './App.css'; // We will include all styles in one CSS file
import ThetaTauLogo from './imgs/ThetaTauLogo.png';
import ProductivityImage from './imgs/productivityimage.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo">Productivity Webevent</div>
        <div>
          <ul className="nav-links">
            <li><a href="#0">piece0</a></li>
            <li><a href="#1">piece1</a></li>
            <li><a href="#2">piece2</a></li>
            <li><a href="#crypt" onClick={toggleMenu}>crypt</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <div className="logo">Puzzle</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <div className="menu-links open">
              <li><a href="#0" onClick={toggleMenu}>piece0</a></li>
              <li><a href="#1" onClick={toggleMenu}>piece1</a></li>
              <li><a href="#2" onClick={toggleMenu}>piece2</a></li>
              <li><a href="#crypt" onClick={toggleMenu}>crypt</a></li>
            </div>
          )}
        </div>
      </nav>

      {/* Front Page Section */}
      <section id="front-page" className="front-page">
        <div className="section_pic-logo">
          <img src={ThetaTauLogo} alt="ThetaTauLogo" />
        </div>
        <div className="section_pic-main">
          <img src= {ProductivityImage} alt="productivityimage" />
        </div>
        <div className="section_text">
          <p className="section_text_p1">
            Welcome to the Theta Tau Productivity Webevent. Whether you are someone who works to live or lives to work, work is a big part of our lives, especially with the beginning of the academic year. Below is a sparknotes-style document of Feel Good Productivity by Ali Abdaal and Deep Work by Cal Newport. Topics of productivity, procrastination, and burnout are covered while strategies and tips are recommended for you to try out.
          </p>
          <a href="https://docs.google.com/document/d/1lfa_W_QzQktXelUZyjjqk3AHtK7tkeRM_5U_R4xD6Qo/edit?usp=sharing" className="button-link" target="_blank" rel="noopener noreferrer">
            Link to doc
          </a>
          <p className="section_text_p2">
            Here's a little puzzle to challenge your productivity. First person to decode the crypt wins x. Keys are the key.
          </p>
        </div>
      </section>

      {/* Additional sections can go here */}
      {/* For example, a section for the puzzle piece: */}
      <section id="0">
        <p className="section_text_piece0a">
          9780590450874 <br />
          I. blocks <br />
          II. toys in attic <br />
          III. bulletin board <br />
          IV. cubbies <br />
        </p>
        <p className="section_text_piece0b">
          L  A  N  E  C  Y  A  T  C  U <br />
          Q  F  S  K  S  A  W  R  H  A <br />
          A  P  J  U  L  E  J  E  M  Z <br />
          E  R  X  L  I  R  U  S  G  C <br />
          R  A  H  R  A  H  D  N  A  S <br />
          L  V  A  T  L  E  V  I  D  Y <br />
          S  M  C  W  O  Y  O  M  F  E <br />
          I  P  E  H  H  N  N  A  S  K <br />
        </p>
      </section>
    </div>
  );
}

export default App;

