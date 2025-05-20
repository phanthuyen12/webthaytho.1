import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/css/consulting.css';

const Consulting = () => {
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
      title: "DEDICATED PERFORMANCE CONSULTANT",
      desc: "Personalized guidance and strategy for optimizing occupancy and revenue.",
    },
    {
      title: "CUSTOM PROPERTY LISTING",
      desc: "Expertly crafted listings tailored to highlight your property's best features.",
    },
    {
      title: "DAMAGE & LIABILITY INSURANCE",
      desc: "Up to $1.5M coverage to protect your property from accidental guest-caused damage",
    },
    {
      title: "VERIFIED SERVICE PROVIDER",
      desc: "Reliable local vendors to ensure quality property maintenance and guest experiences",
    },
    {
      title: "PERMIT ASSISTANCE & COMPLIANCE",
      desc: "Expert support navigating local short-term rental regulations and permitting.",
    },
    {
      title: "INTERIOR DESIGN",
      desc: "Tailored design guidance to elevate your property's appeal and boost bookings.",
    },
  ];

  return (
    <Box className="performance-container" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Typography 
        variant="h1" 
        className="performance-title"
        sx={{
          color: '#841617',
          fontFamily: '"Raleway-ExtraBold", sans-serif',
          fontSize: { xs: '32px', sm: '40px', md: '50px', lg: '60px' },
          fontWeight: 800,
          mb: { xs: 2, sm: 3 },
          lineHeight: 1.2
        }}
      >
        CONSULTING
      </Typography>
      <Typography 
        variant="h2" 
        className="performance-subtitle"
        sx={{
          color: '#323232',
          fontFamily: '"Raleway-Regular", sans-serif',
          fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
          mb: { xs: 3, sm: 4, md: 5 },
          lineHeight: 1.4,
          px: { xs: 2, md: 0 },
          maxWidth: '800px',
          mx: 'auto'
        }}
      >
        Expert guidance and tailored support for sustained success
      </Typography>

      <Box className="slider-wrapper" sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box key={index} sx={{ px: { xs: 1, sm: 2 }, pb: 2 }}>
            <Card
                            sx={{
                              height: '100%',
            minHeight: { xs: '280px', sm: '330px', md: '380px' },                  
            display: 'flex',
                              flexDirection: 'column',
                              paddingTop:'60px',
                              justifyContent: 'left',
                              borderRadius: '50px',
                              boxShadow: 4,
                              transition: 'transform 0.3s, box-shadow 0.3s',
                             background: ([0, 2, 4].includes(index))
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
                 display: 'flex',
                 flexDirection: 'column',
                 height: '100%',
                 textAlign: 'left' // Thêm thuộc tính này
               }}>
                 {/* Title */}
                 <Box sx={{ 
                   height: { xs: '80px', md: '100px' },
                   display: 'flex',
                   alignItems: 'flex-start', // Thay đổi thành 'flex-start'
                   justifyContent: 'flex-start', // Thêm dòng này
                   mb: 2
                 }}>
                   <Typography 
  variant="h6" 
  sx={{ 
    fontWeight: { xs: 500, sm: 600, md: 700 },
    color: '#323232',
    fontSize: { xs: '24px', sm: '28px', md: '33px' }, // cũng nên giảm size mobile
    fontFamily: { xs: '"Raleway-Medium", sans-serif', md: '"Raleway-Bold", sans-serif' },
    textTransform: 'uppercase',
    lineHeight: 1.2,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textAlign: 'left'
  }}
>
  {card.title}
</Typography>

                 </Box>
               
                 {/* Desc */}
                 <Box sx={{ 
                   flex: 1,
                   display: 'flex',
                   alignItems: 'flex-start', // Thay đổi thành 'flex-start'
                   justifyContent: 'flex-start' // Thêm dòng này
                 }}>
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
                       marginTop:"10px",
                       fontFamily: '"Raleway-Regular", sans-serif',
                       lineHeight: 1.4,
                       display: '-webkit-box',
                       WebkitLineClamp: 5,
                       WebkitBoxOrient: 'vertical',
                       overflow: 'hidden',
                       textAlign: 'left' // Thêm dòng này
                     }}
                   >
                     {card.desc}
                   </Typography>
                 </Box>
               </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Consulting;