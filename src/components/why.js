import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/Why.css';
import Highlighter from 'react-highlight-words';
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangle6 from '../assets/Why Toshi 1.png';
import Rectangle9 from '../assets/Why Toshi 2.png';
import Rectangle10 from '../assets/Why Toshi 3.png';
import User1 from '../assets/Jessica.jpg';
import User2 from '../assets/Miles.jpg';
import User3 from '../assets/Bonnie.jpg';
import User4 from '../assets/Andrew.jpg';
import TransparentLogo from '../assets/Transparent text logo 4.png';
const highlightWords = ["game changer", "actually care", "hotel-level", "transparency"];
const isMobile = window.innerWidth <= 3840; // bạn có thể dùng useMediaQuery nếu xài MUI

const testimonials = [
  {
    text: "You actually care about my home, not just the numbers. It's great knowing my place is in good hands with a local team.",
    name: "Miles",
    revenue: "$17K Monthly Revenue",
    occupancy: "84% Occupancy Rate",
    image: User2,
  },
  {
    text: "With Toshi Stay, I found transparency, honesty, and unbeatable value",
    name: "Bonnie",
    revenue: "$9K Monthly Revenue",
    occupancy: "89% Occupancy Rate",
    image: User3,
  },
  {
    text: "Their hotel-level support team means every guest is treated exceptionally. Our reviews and bookings have skyrocketed",
    name: "Andrew",
    revenue: "$37K Monthly Revenue",
    occupancy: "78% Occupancy Rate",
    image: User4, // tạm dùng lại hình Jessica
  },
  {
    text: "Switching to Toshi Stay has been a game changer. Paying just 8% and getting amazing service around the clock is unbelievable",
    name: "Jessica",
    revenue: "$22K Monthly Revenue",
    occupancy: "90% Occupancy Rate",
    image: User1,
  },
];


const Why = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage current testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // chuyển sau mỗi 5 giây

    return () => clearInterval(interval); // clear khi unmount
  }, [testimonials.length]);

  const getPrevIndex = () => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);

  // Function to show the previous testimonial
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Function to show the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
const galleryItems = [
  {
    img: Rectangle6,
    alt: 'Premium Property Management',
    title: (
      <>
        Unmatched<br />
        Value
      </>
    ),
    desc: 'Our comprehensive plans start from just 8% fee which can’t be found elsewhere',
  },
  {
    img: Rectangle9,
    alt: 'Premium Property Management',
    title: (
      <>
        Unmatched<br />
        Customer Service
      </>
    ),
    desc: 'Led by an operations manager with over 30 years experience in the hotel industry',
  },
  {
    img: Rectangle10,
    alt: 'Premium Property Management',
    title: (
      <>
        Unmatched<br />
        Dedication
      </>
    ),
    desc: 'Our experts personally manage every detail of your rental property. You’ll know our names, and we’ll know yours',
  },
];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    
    <div className="why-section" style={{ backgroundColor: '#F3EFE9' }}>
      
  <div className='container py-5'>
    
    <div className="">
      
        {/* Why Title */}
        <div className="why-header">
          <h1 className="why-title">Why</h1>
        </div>

        {/* Logo */}
        <div className="why-logo-container">
          <img
            src={TransparentLogo}
            alt="Company Logo"
            className="why-main-logo"
          />
        </div>
  <div className="why-gallery">
      <Slider {...settings}>
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <div className="img-wrapper">
              <img src={item.img} alt={item.alt} className="gallery-img" />
              <div className="overlay">
                <div className="unmatched-value">{item.title}</div>
                <div className="our-comprehensive-plans-start-from-just-8-fee-which-can-t-be-found-elsewhere">
                  {item.desc}
                </div>
                <div className="group-4">
                <div className="let-s-talk rectangle-31 get-started">Let’s talk</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
  
  </div>
       
        <div className="why-tagline-stair">
          <div className="tagline-row">
            <div className="tagline-item first">
              <div class="right-people-container">
                <div class="right">Right</div>
                <div class="people">People</div>
              </div>            </div>
          </div>
          <div className="tagline-row">
            <div className="tagline-spacer"></div>
            <div className="tagline-item second">
              <div class="right">Real</div>
              <div class="people text1 people1">Connections</div>
            </div>
          </div>
          <div className="tagline-row">
            <div className="tagline-spacer"></div>
            <div className="tagline-spacer"></div>
            <div className="tagline-item third">
              <div class="right">Remarkable</div>
              <div class="people Results-text people2">Results</div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="">

          <div className="testimonial-container three-testimonials">
            {[getPrevIndex(), currentIndex, getNextIndex()].map((index, position) => (
              <div
                key={index}
                className={`testimonial-item ${position === 1 ? "center" : "side"
                  }`}
              >
                <div className="quote-mark">{position === 1 ? "“" : ""}</div>
                <div className="testimonial-text">
                  <Highlighter
                    highlightClassName="highlighted-word"
                    searchWords={highlightWords}
                    autoEscape={true}
                    textToHighlight={testimonials[index].text}
                  />
                </div>
                <div className="client-info">
<div className="client-avatar">
  <img src={testimonials[index].image} alt={testimonials[index].name} className="avatar-img" />
</div>
                  <div className="client-details">
                    <div className="client-name">{testimonials[index].name}</div>
                    <div className="client-stats">
                      {testimonials[index].revenue}<br />
                      {testimonials[index].occupancy}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
        <div className="testimonial-nav d-flex justify-content-center">
          <button className="nav-button prev-button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="nav-button next-button" onClick={handleNext}>
            Next
          </button>
        </div>

      </div>
  </div>
  
    </div>
  );
};

export default Why;
