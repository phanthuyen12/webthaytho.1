import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/what.css';
import { Link } from 'react-scroll'; // Thêm import này

const What = () => {
  return (
    <div className="what-container ">
 <h1 className="what-heading" style={{ position: 'relative', zIndex: 2 }}>What</h1>
<div className="benefits-we-do" style={{ position: 'relative', zIndex: 1 }}>we do</div>

      <p className="what-description">
        <span className="what-description-regular">
          We proudly provide comprehensive management services at
        </span>
        <br/>
        <span className="what-description-bold">
          an unbeatable low management fee
        </span>
      </p>
      
      <div className="what-button-container">
         <Link to="formSection" smooth={true} duration={500}>
    <button className="what-button">
          Get Started
        </button>      </Link>
    
      </div>
    </div>
  );
};

export default What;