import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';
import './one_line.css';
import './bigpic.css';
import Pic from '/react_oldal/src/img/kep1.jpg'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


function MainComponent() {
  return (
    <>
      <Top_line />
      <Navbar />
      <Backpic/>

    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid d-flex justify-content-between align-items-center"> {/* Flex container to align items */}
      <ul className="navbar-nav flex-row"> 
      <div className='brand'>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Sub-item 1</a></li>
              <li><a className="dropdown-item" href="#">Sub-item 2</a></li>
            </ul>
          </li>
      </div>

      <li 
         className="nav-item drops" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
        <a className="nav-link" href="#">Courses</a>
         <ul className={`dropdown-menu ${isOpen ? 'show custom-dp-bg' : ''}`}>
         <li><a className="dropdown-item elso" href="#">Creating course <br /> <span>Creating a custom course </span></a></li>
          <li><a className="dropdown-item masodik" href="#">Feature 2</a></li>
       </ul>
       </li>

        <li className="nav-item drops2">
          <a className="nav-link" href="#">Pricing</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Basic</a></li>
            <li><a className="dropdown-item" href="#">Pro</a></li>
          </ul>
        </li>

        <li className="nav-item drops3">
          <a className="nav-link" href="#">nig</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Basic</a></li>
            <li><a className="dropdown-item" href="#">Pro</a></li>
          </ul>
        </li>
        <li className="nav-item drops4">
          <a className="nav-link" href="">Get Started</a>
        </li>
      </ul>
    </div>
  </nav>
  

  
  
  );
}

function Top_line() {

  height = "1000px"


  return (
    <div className="Topline">
  <div className="marquee">
    <div className="things_inside">
      <span className="rigts">All Rights Reserved</span>
      <span className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </span>
      <span className="social">
        <FontAwesomeIcon icon={faFacebook} />
      </span>
      <span className="social">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span className="social">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span className="social">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
    </div>
  </div>
</div>

  

  );
}



function Backpic(){
  const [typeEffect] = useTypewriter({
    words: ['Adults', 'Children', 'Everyone'],
    loop:{},
    typespeed:100,
    deletespeed:40

  })
  return(
    <div className="Bigpic container-fluid">
     <div className="row">
      <div className="col-12 p-0">
        <img src={Pic} alt="" style={{ height: height }} className="img-fluid w-100" />
        <div className="top_text text-center mt-3">
          <div className="revenue_txt">For people with recurring revenue</div>
        </div>
      </div>
    </div>
  
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 text-center">
        <div className="resp_block">
          <div className="resp_szo">
            <span className="simple">There are so many courses,<br /> waiting for</span>
            <span className="ch_text">{typeEffect}</span>
          </div>
        </div>
      </div>
    </div>
  
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 text-center">
        <div className="motivation_txt">
          <div>We always offer the best courses to our customers,<br />
            <span className="sec_row">with the best quality and price</span>
          </div>
        </div>
      </div>
    </div> 
  </div>
  
  );
}


export default MainComponent;
