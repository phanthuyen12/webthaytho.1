import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/About.css';
import '../style/css/who.css'; 
import { Link } from 'react-scroll'; // Thêm import này

    

const Who = () => {
  return (
    <div className="container-fluid about-container">
      <div className="row">
        {/* Left Side - Text Content */}
        <div className="col-sm-6 left-section left-section1">
        
            <h2 className="we-re-built-on who">Who</h2>
          <div class="group-104">
  <div class="benefits-from-us">benefits from us</div>
</div>
          <div className="text-row">
          <div class="group-104">
          <div class="group-82">
  <div class="group-74">
    
    {/* <div class="get-started">Get Started</div> */}
     <Link to="formSection" smooth={true} duration={500}>
       <button className="rectangle-3 get-started">  Get Started</button>
     </Link>
  </div>
</div>
</div>
          </div>
        </div>

        {/* Right Side - Rectangles */}
        <div className="col-sm-6 right-section right-section1">
  <div className="rectangle-container rectangle-container1">
    {/* Rectangle 1 */}
    <div className="rectangle-23">
      <div className="rectangle-content">
        
        <div className="rectangle-text">
          <h3 className="rectangle-title optimize-your-listing-who">Second Home Owners</h3>
          <p className="rectangle-description">
          Turn your additional home into a steady stream of passive income without the hassle.          </p>
        </div>
      </div>
    </div>

    {/* Rectangle 2 */}
    <div className="rectangle-23">
      <div className="rectangle-content">
       
        <div className="rectangle-text">
          <h3 className="rectangle-title optimize-your-listing-who">Current Hosts Seeking Better Results</h3>
          <p className="rectangle-description">
          Disappointed by the performance? Let our experts boost your bookings and revenue.          </p>
        </div>
      </div>
    </div>

    {/* Rectangle 3 */}
    <div className="rectangle-23">
      <div className="rectangle-content">
       
        <div className="rectangle-text">
          <h3 className="rectangle-title optimize-your-listing-who" >Out Of State Investors</h3>
          <p className="rectangle-description">
          Maximize returns on your investment properties without lifting a finger—our dedicated team handles it all.          </p>
        </div>
      </div>
    </div>
    {/* Rectangle 3 */}
    <div className="rectangle-23">
      <div className="rectangle-content">
       
        <div className="rectangle-text">
          <h3 className="rectangle-title optimize-your-listing-who" >Developers & Home Builders</h3>
          <p className="rectangle-description">
          Bridge the gap between project completion and sale by generating valuable rental income in the interim.          </p>
        </div>
      </div>
    </div>
     <div className="rectangle-23">
      <div className="rectangle-content">
       
        <div className="rectangle-text">
          <h3 className="rectangle-title optimize-your-listing-who" >Developers & Home Builders</h3>
          <p className="rectangle-description">
          Bridge the gap between project completion and sale by generating valuable rental income in the interim.          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Who;