import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/css/operation.css';

const Operation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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

  const cards = [
    {
      title: "GUEST & OWNER 24/7 SUPPORT",
      desc: "Around-the-clock hotel-standard care for guest inquiries and owner communications",
    },
    {
      title: "BOOKING & PAYMENT MANAGEMENT",
      desc: "Smooth handling of reservations, guest payments, and timely payout",
    },
    {
      title: "COMPREHENSIVE IN-HOUSE CLEANING",
      desc: "Professional cleaning and turnover services for impeccable guest experiences.",
    },
      {
      title: "MANTENANCE MANAGEMENT",
      desc: "Proactive coordination of all property maintenance tasks, ensuring optimal property condition",
    },
        {
      title: "ROUTINE  INSPECTIONS",
      desc: "Scheduled inspections to maintain quality and quickly identify and address issues.",
    },
       
  ];

  return (
    <Box className="performance-container" sx={{ py: 8 }}>
      <Typography 
        variant="h1" 
        className="performance-title"
        sx={{
          color: '#841617',
          fontFamily: '"Raleway-ExtraBold", sans-serif',
          fontSize: { xs: '32px', sm: '40px', md: '50px', lg: '60px' },
          fontWeight: 800,
          mb: 3,
          lineHeight: 1
        }}
      >
        OPERATION
      </Typography>
      <Typography 
        variant="h2" 
        className="performance-subtitle"
        sx={{
          color: '#323232',
          fontFamily: '"Raleway-Regular", sans-serif',
          fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
          mb: 5,
          lineHeight: 1.3,
          px: { xs: 2, md: 0 }
        }}
      >
        Seamless management for outstanding guest experiences.
      </Typography>

      <Box className="slider-wrapper" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box key={index} sx={{ px: { xs: 1, sm: 2 }, pb: 1 }}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: { xs: '350px', sm: '400px', md: '450px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: '50px',
                  boxShadow: 4,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                 background: (index % 2 === 0)
                    ? 'radial-gradient(circle at 80% center, #a0cbe8 0%, #d4eaf6 40%, #ffffff 80%)'
                    : 'white',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 3, sm: 4 },
                  textAlign: 'left'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#323232',
                      fontSize: { 
                        xs: '22px', 
                        sm: '26px', 
                        md: '30px', 
                        lg: '40px' 
                      },
                      fontFamily: '"Raleway-Bold", sans-serif',
                      textTransform: 'uppercase',
                      lineHeight: 1.2
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#323232',
                      fontSize: { 
                        xs: '16px', 
                        sm: '18px', 
                        md: '20px', 
                        lg: '24px' 
                      },
                      fontFamily: '"Raleway-Regular", sans-serif',
                      lineHeight: 1.4
                    }}
                  >
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Operation;