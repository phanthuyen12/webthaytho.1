import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEstimate = async (e) => {
    e.preventDefault(); 

    if (!formData.consent) {
      alert('Please agree to receive communications');
      return;
    }

    const rentalData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: null, 
      bedrooms: null, 
      bathrooms: null, 
      amenitiesCount: null
    };

    console.log('--- Rental Form Data ---', rentalData);

    try {
      const response = await fetch('http://192.30.139.219:3002/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rentalData),
        credentials: 'include'
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Email sent and data saved!');
      } else {
        console.error('❌ Error:', result.message);
        alert('❌ Failed to send email.');
      }
    } catch (error) {
      console.error('❌ Request failed:', error);
      alert('❌ Network error.');
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-background"></div>
      
      <h1 className="form-title">DON'T BE A STRANGER!</h1>
      
      <p className="form-intro">
        We're always happy to answer questions or show off our homes. Come and say hi!
      </p>
      
      <form className="contact-form" onSubmit={handleEstimate}>
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-input"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className={`form-checkbox ${formData.consent ? 'checked' : ''}`}>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="checkbox-input"
            checked={formData.consent}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="consent" className="checkbox-label">
            I agree to receive communications by text message about my inquiry.
          </label>
        </div>
        
        <button 
          type="submit" 
          className={`submit-button ${!formData.consent ? 'disabled' : ''}`}
          disabled={!formData.consent}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;