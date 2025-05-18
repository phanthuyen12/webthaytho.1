import React, { useState, useRef } from 'react';
import Counter from './Counter';
import '../style/css/RentalForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Box, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const LOCATIONIQ_API_KEY = 'pk.e430816c74403035a11f17ed112024e1';

const RentalForm = () => {
  const [address, setAddress] = useState('');
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [amenities, setAmenities] = useState({
    communityHotTub: false,
    communitySwimmingPool: false,
    privateHotTub: false,
    privateSwimmingPool: false,
    skiInSkiOut: false,
    waterfront: false
  });
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Tính số lượng amenities đã chọn
  const amenitiesCount = Object.values(amenities).filter(Boolean).length;

  // Xử lý thay đổi địa chỉ với debounce
 const handleAddressChange = (e) => {
  const value = e.target.value;
  setAddress(value);

  clearTimeout(debounceTimer.current);
  debounceTimer.current = setTimeout(() => {
    if (value.length > 2) {
      fetch(
        `https://us1.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${encodeURIComponent(
          value
        )}&limit=5&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('API Response:', data); // Debug: Log raw API response
          const formatted = data.map((item) => ({
            display_name: item.display_name,
            lat: item.lat,
            lon: item.lon,
          }));
          console.log('Formatted Suggestions:', formatted); // Debug: Log formatted suggestions
          setSuggestions(formatted);
          setShowSuggestions(true);
        })
        .catch((error) => {
          console.error('API Error:', error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, 300);
};
  const handleSelectSuggestion = (suggestion) => {
    setAddress(suggestion.display_name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSubmit = () => {
  console.log('Address:', address);
  console.log('Bedrooms:', bedrooms);
  console.log('Bathrooms:', bathrooms);
  console.log('Amenities:', amenities); // Log tất cả các giá trị của amenities
  console.log('Number of Amenities Selected:', amenitiesCount); // Log số lượng amenities đã chọn
  setShowForm(true);
};


const handleEstimate = async () => {
  const rentalData = {
    name,
    email,
    phone,
    address,
    bedrooms,
    bathrooms,
    amenities: amenitiesCount,
    amenitiesDetails: amenities // Log toàn bộ dữ liệu amenities
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
        setShowForm(false);

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


  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: 24,
    padding: 4,
  };

  const handleAmenitiesClick = () => {
    setOpenModal(true);
  };

  const handleAmenityChange = (event) => {
    const { name, checked } = event.target;
    setAmenities(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <>
       {!showForm ? (
      <>
        <div className="maximize-your-rental-income">Maximize your rental income</div>

        <div className="group-1">
          <div className="unlock-your-vacation-rental-s-full-potential-custom-management-plan-industry-low-rates">
            <span>
              <span className="unlock-your-vacation-rental-s-full-potential-custom-management-plan-industry-low-rates-span">
                Unlock your vacation rental’s full potential.
              </span>
              <br />
              <span className="unlock-your-vacation-rental-s-full-potential-custom-management-plan-industry-low-rates-span2">
                Custom management plan. Industry low rates
              </span>
            </span>
          </div>
        </div>

        <div className="group-109">
          <div className="estimate-your-rental-income">ESTIMATE YOUR RENTAL INCOME</div>
        </div>

        <form className="rental-form">
          <div className="input-with-button">
          <div className="form-group" style={{ position: 'relative', width: '100%' }}>
  <i
    className="bi bi-geo-alt-fill"
    style={{ position: 'absolute', left: 10, top: 20, color: '#aaa' }}
  ></i>
  <input
    style={{ paddingLeft: '30px' }}
    ref={inputRef}
    className="address-input"
    type="text"
    value={address}
    onChange={handleAddressChange}
    onFocus={() => address.length > 2 && setShowSuggestions(true)}
    onBlur={handleBlur}
    placeholder="Vacation home address"
    autoComplete="off"
  />
  {showSuggestions && suggestions.length > 0 && (
    <ul className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="suggestion-item"
          onClick={() => handleSelectSuggestion(suggestion)}
        >
          {suggestion.display_name}
        </li>
      ))}
    </ul>
  )}
</div>
            <button type="button" className="black-button" onClick={handleSubmit}>
              <span className="button-icon">&gt;</span>
            </button>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label className="form-labels bedroom-label">Bedrooms</label>
              <Counter
                value={bedrooms}
                onChange={setBedrooms}
                counterStyle={{ valueSize: '14px', buttonSize: '14px' }}
              />
            </div>

            <div className="form-column">
              <label className="form-labels bedroom-label">Bathrooms</label>
              <Counter
                value={bathrooms}
                onChange={setBathrooms}
                counterStyle={{ valueSize: '14px', buttonSize: '14px' }}
              />
            </div>

            <div className="form-column">
              <label className="form-labels">Amenities</label>
              <div className="group-from" onClick={handleAmenitiesClick}>
                <div className="rectangle-from">
                  <span className="rectangle-number">{amenitiesCount}</span>
                  <i className="bi bi-chevron-down rectangle-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    ):(
        <div className="contact-form1">
          <div className="input-with-buttoSn">
            <div className="form-group" style={{ width: '100%' }}>
              <input 
                id="name"
                className="address-input input-from1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group" style={{ width: '100%' }}>
              <input 
                id="email"
                className="address-input input-from1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group" style={{ width: '100%' }}>
              <input 
                id="phone"
                className="address-input input-from1"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Enter your phone number"
              />
            </div>
            <button type="button" className="black-button btn-estimate" onClick={handleEstimate}>
              Receive my estimate
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Amenities Information
          </Typography>
          <form>
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.communityHotTub}
                  onChange={handleAmenityChange}
                  name="communityHotTub"
                />
              }
              label="Community Hot Tub"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.communitySwimmingPool}
                  onChange={handleAmenityChange}
                  name="communitySwimmingPool"
                />
              }
              label="Community Swimming Pool"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.privateHotTub}
                  onChange={handleAmenityChange}
                  name="privateHotTub"
                />
              }
              label="Private Hot Tub"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.privateSwimmingPool}
                  onChange={handleAmenityChange}
                  name="privateSwimmingPool"
                />
              }
              label="Private Swimming Pool"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.skiInSkiOut}
                  onChange={handleAmenityChange}
                  name="skiInSkiOut"
                />
              }
              label="Ski-in/Ski-out"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={amenities.waterfront}
                  onChange={handleAmenityChange}
                  name="waterfront"
                />
              }
              label="Waterfront"
            />
          </form>
          <Button onClick={() => setOpenModal(false)} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default RentalForm;