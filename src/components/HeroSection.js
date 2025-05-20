import React from 'react';
import RentalForm from './RentalForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import videosbackground from '../assets/herobannervideo.mp4'
import backgroundImage from '../assets/house-background.jpg';
import '../style/css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section d-flex justify-content-center align-items-center">
      {/* Video background */}
      <div className="video-container">
        <video 
          autoPlay 
          muted 
          loop
          playsInline
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
    borderRadius: '80px',      // bo góc 15px
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <source src={videosbackground} type="video/mp4"  />
          <source src="path-to/webm-version.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay và nội dung */}
      <div className="rectangle-26 d-flex justify-content-center align-items-center text-center">
        <div className="hero-section-inner d-flex rounded-5">
          <div
            className="p-5 d-flex flex-column justify-content-start align-items-start text-white"
            style={{ width: '50%' }}
          >
            <RentalForm />
          </div>

          <div
            className="hero-content-right"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;