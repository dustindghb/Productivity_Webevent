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
        <div className="logo">Productivity Webevent</div>
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
            Whether you are someone who works to live or lives to work, work is a big part of our lives, especially with the beginning of the academic year. Below is a sparknotes-style document on 
            <a href="https://www.feelgoodproductivity.com/" target="_blank"> Feel Good Productivity</a> by Ali Abdaal and 
            <a href="https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/" target="_blank"> Deep Work</a> by Cal Newport. 
          Both offer insights and dispel misconceptions about productivity, procrastination, and burnout. Some strategies and tips are included to try out.
        </p>
          <a href="https://docs.google.com/document/d/1lfa_W_QzQktXelUZyjjqk3AHtK7tkeRM_5U_R4xD6Qo/edit?usp=sharing" className="button-link" target="_blank" rel="noopener noreferrer">
            Link to doc
          </a>
          <p className="section_text_p2">
            Here's a little puzzle to challenge your productivity. First person to decode the crypt wins x.
          </p>
        </div>
      </section>
      <hr></hr>

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
      <hr></hr>
      
      <section id="1">
        <ol class="section_text_piece1a">
            <li>seal on ball</li>
            <li>key</li>
            <li>popsicle stick</li>
            <li>pair of black arrows</li>
            <li>snake eyes</li>
            <li>uncaged bird</li>
            <li>lighthouse</li>
            <li>sailboat</li>
            <li>rubber band</li>
            <li>expert</li>
            <li>lion</li>
            <li>lock</li>
        </ol>
      </section>
      <hr></hr>
      
      {/* Section 2 */}
      <section id="2">
        <p className="section_text_piece2a">
          nine tails in the night <br />
          eight black shadows, one moon white <br />
          they dance, fearless fight <br />
          <br />
          the number of odd ones out make it right
        </p>
      </section>
      <hr></hr>

      {/* Crypt Section */}
      <section id="crypt">
        <p className="section_text_crypt1">
          C zkyjvvgn jar ecd r adufmlv az xwztgguf evswczi niyhs by 
          wydjxkzy jmsgxy hmhsnpee sbbol lug ap h kpwlybz-jduyg. 
          Ov uguyw oehy pghijq lvdl xtyy hvi fas ynugt, vgv dycf 
          hr mymqx mpk wyalrw as dymeo kfw bhgjl: "Mb igsc, gl's 
          zhyi xcwgsp rzel'kl ran eylvr -- Yobw vrxs rqy xpwea yvsxm fq lrr!" 
          Oafg'a lq quul km kal moik qqtl lljicx yefbqt ayyf wubui mhp iyznw? <br />
          <br />
          Pda hwng eo w owrknu xenz, xqp zebbeyqhp pk ywpyd. 
          Ej pda beahz, pda dqjpan lhwyao w iennkn kj w opwjz. 
          Pda hwng hwjzo ej bnkjp kb pda chwoo, opalo xwyg wjz bknpd, 
          ajpnwjyaz xu epo ksj ikrejc eiwca wjz xu eiepwpera iwpejc zwjya
          ep oaao lanbkniaz xabkna epo auao. Duljkpevaz, pda xenz hkoao
          whh oajoa kb epo oqnnkqjzejco, qjpeh pda dqjpan'o jap pnwlo ep 
          wcwejop pda iennkn. <br />
          <br />
          Weq lbkjev egvr vrrugkrt mno owchf. Mye izqrg afrvm yiam neot, 
          dyg mye umcv uhish ecw ytqy. Wpg qrg sejip xb izlh bji exrr
          kwtwr'l codl qr gav fuwpx uhish; ejia myeb pch gkrnvngvexu 
          iw inp, gav rhit lbkje iwwrq bk edaa kbbeg, dvf lr lrig bq 
          xux wrrvv lbkje: "Wwkp ngu szmcx! Gav mrzg cbn krb, bji zhie 
          bww lnov tr awjsxi." Wkmp xuxp rhielrw khh bczrke, tkm qaaxi sdqf; 
          "Aur jhrcnh V yfdgmt xjh youagw javn L kcver rlo wp sax? Z hdl
          digmvr jqxi gav oqm cpy mye iwqh vm naqbu, eaw tuw bji gaiodb
          qj gav owpgv; nm cedav M farlo pczr mye kqfi." Ngu sr pg hvw.
        </p>
      </section>
    </div>
      
  );
}

export default App;

