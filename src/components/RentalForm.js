import React, { useState, useRef } from 'react';
import Counter from './Counter';
import '../style/css/RentalForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import locationIcons from '../assets/icons8-address-96.png';

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
    waterfront: false,
  });
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [openAmenitiesBox, setOpenAmenitiesBox] = useState(false); // New state for amenities box
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Calculate number of selected amenities
  const amenitiesCount = Object.values(amenities).filter(Boolean).length;

  // Handle address change with debounce
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
            const formatted = data.map((item) => ({
              display_name: item.display_name,
              lat: item.lat,
              lon: item.lon,
            }));
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
    console.log('Amenities:', amenities);
    console.log('Number of Amenities Selected:', amenitiesCount);
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
    amenitiesDetails: amenities,
  };

  // ✅ Kiểm tra điều kiện bắt buộc
  const requiredFields = [name, email, phone, address, bedrooms, bathrooms];
  const allFieldsFilled = requiredFields.every((field) => field !== '' && field !== null && field !== undefined);

  if (!allFieldsFilled) {
    alert('⚠️ Please fill in all required fields before submitting.');
    return;
  }

  console.log('--- Rental Form Data ---', rentalData);

  try {
    const response = await fetch('http://192.30.139.219:3002/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rentalData),
      credentials: 'include',
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


  const handleAmenitiesClick = () => {
    setOpenAmenitiesBox((prev) => !prev); // Toggle amenities box
  };

  const handleAmenityChange = (event) => {
    const { name, checked } = event.target;
    setAmenities((prev) => ({
      ...prev,
      [name]: checked,
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
                <img
                  src={locationIcons}
                  alt="Location"
                  style={{ position: 'absolute', left: 10, top: 18, width: 25, height: 25 }}
                />
                <input
                  style={{ paddingLeft: '35px' }}
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

              <div className="form-column" style={{ position: 'relative' }}>
                <label className="form-labels">Amenities</label>
                <div className="group-from" onClick={handleAmenitiesClick}>
                  <div className="rectangle-from">
                    <span className="rectangle-number">{amenitiesCount}</span>
                    <i
                      className={`bi ${openAmenitiesBox ? 'bi-chevron-up' : 'bi-chevron-down'} rectangle-icon`}
                    ></i>
                  </div>
                </div>
                {openAmenitiesBox && (
                  <div
                    className="amenities-box"
                    style={{
                      position: 'absolute',
                      top: '40%',
                     
                      left: 0,
                      width: '200px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      padding: '16px',
                      zIndex: 10,
                      marginTop: '8px',
                    }}
                  >
                    <form>
                      <div>
                        <input
                          type="checkbox"
                          name="communityHotTub"
                          checked={amenities.communityHotTub}
                          onChange={handleAmenityChange}
                          id="communityHotTub"
                        />
                        <label htmlFor="communityHotTub">Community Hot Tub</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="communitySwimmingPool"
                          checked={amenities.communitySwimmingPool}
                          onChange={handleAmenityChange}
                          id="communitySwimmingPool"
                        />
                        <label htmlFor="communitySwimmingPool">Community Swimming Pool</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="privateHotTub"
                          checked={amenities.privateHotTub}
                          onChange={handleAmenityChange}
                          id="privateHotTub"
                        />
                        <label htmlFor="privateHotTub">Private Hot Tub</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="privateSwimmingPool"
                          checked={amenities.privateSwimmingPool}
                          onChange={handleAmenityChange}
                          id="privateSwimmingPool"
                        />
                        <label htmlFor="privateSwimmingPool">Private Swimming Pool</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="skiInSkiOut"
                          checked={amenities.skiInSkiOut}
                          onChange={handleAmenityChange}
                          id="skiInSkiOut"
                        />
                        <label htmlFor="skiInSkiOut">Ski-in/Ski-out</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="waterfront"
                          checked={amenities.waterfront}
                          onChange={handleAmenityChange}
                          id="waterfront"
                        />
                        <label htmlFor="waterfront">Waterfront</label>
                      </div>
                    </form>
                    <button
                      onClick={() => setOpenAmenitiesBox(false)}
                      style={{
                        marginTop: '16px',
                        padding: '8px 16px',
                        backgroundColor: '#f0f0f0',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </>
      ) : (
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
    </>
  );
};

export default RentalForm;