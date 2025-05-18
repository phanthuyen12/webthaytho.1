import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/About.css';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';

const About = () => {
  return (
    <div className="container-fluid about-container">
      <div className="row">
        {/* Left Side - Text Content */}
        <div className="col-sm-6 left-section">
          <div className="text-row">
            <h1 className="about">ABOUT</h1>
          </div>
          <div className="text-row">
            <h2 className="we-re-built-on">we're built on</h2>
          </div>
          <div className="text-row">
            <h2 className="your-needs needs3">Your Needs</h2>
          </div>
          <div className="text-row">
            <p className="every-property-neighborhood-and-owner-are-different text-every">
              Every property, neighborhood, and owner are different. That's why we tailor
              our services based on your needs.
            </p>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number _50">50+</div>
              <div className="stat-label trusted-homeowners">Trusted Homeowners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number _76">76%</div>
              <div className="stat-label avg-revenue-increment">Avg Revenue Increment</div>
            </div>
          </div>
        </div>

        {/* Right Side - Rectangles */}
        <div className="col-sm-6 right-section">
          <div className="rectangle-container">
            {/* Rectangle 1 */}
            <div className="rectangle-23">
              <div className="rectangle-content">
                <div className="rectangle-logo">
                  <img src={Logo1} alt="Logo 1" className="logo-img" />
                </div>
                <div className="rectangle-text">
                  <h3 className="rectangle-title optimize-your-listing">OPTIMIZE YOUR LISTING</h3>
                  <p className="rectangle-description">
                    From professional photos to SEO crafted titles and descriptions, our in-house marketing team will boost your listing visibility and bookings to new heights.
                  </p>
                </div>
              </div>
            </div>

            {/* Rectangle 2 */}
            <div className="rectangle-23">
              <div className="rectangle-content">
                <div className="rectangle-logo">
                  <img src={Logo3} alt="Logo 2" className="logo-img" />
                </div>
                <div className="rectangle-text">
                  <h3 className="rectangle-title optimize-your-listing">OPTIMIZE YOUR LISTING</h3>
                  <p className="rectangle-description">
                    From professional photos to SEO crafted titles and descriptions, our in-house marketing team will boost your listing visibility and bookings to new heights.
                  </p>
                </div>
              </div>
            </div>

            {/* Rectangle 3 */}
            <div className="rectangle-23">
              <div className="rectangle-content">
                <div className="rectangle-logo">
                  <img src={Logo2} alt="Logo 3" className="logo-img" />
                </div>
                <div className="rectangle-text">
                  <h3 className="rectangle-title optimize-your-listing">OPTIMIZE YOUR LISTING</h3>
                  <p className="rectangle-description">
                    From professional photos to SEO crafted titles and descriptions, our in-house marketing team will boost your listing visibility and bookings to new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
