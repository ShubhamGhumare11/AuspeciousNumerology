import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const promotions = [
  { id: 1, text: '50% OFF on Winter Collection!', bg: '#ffec9e' },
  { id: 2, text: 'Buy 1 Get 1 Free on T-Shirts!', bg: '#ffbb70' },
  { id: 3, text: 'New Arrivals for Autumn!', bg: '#ed9455' },
];

const featuredProducts = [
  { id: 1, image: 'https://img.theloom.in/pwa/loom/banners/14sep-2024-Ganesh-Chaturthi-Sale-3840-1500-Main-Desktop-Banner.jpg?tr=h-624%2Cw-1600', title: 'Featured Product 1' },
  { id: 2, image: 'https://img.theloom.in/pwa/loom/banners/11sep-2024-Festive-New-Launches-Desktop-Banner.jpg?tr=h-624%2Cw-1600', title: 'Featured Product 2' },

  { id: 3, image: 'https://img.theloom.in/pwa/loom/banners/12sep-2024-LoomExclusive-Desktop_MainBanner.png?tr=h-624%2Cw-1600', title: 'Featured Product 1' },
  // { id: 5, image: '', title: 'Featured Product 1' },
  // { id: 6, image: '', title: 'Featured Product 1' },


//   { id: 3, image: 'https://example.com/featured3.jpg', title: 'Featured Product 3' },
];

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Box textAlign="center"  mb="2" bg=''>
      {/* Promotional Banner */}
      <Box p="4" bg={promotions[0].bg}>
        <Text fontSize="2xl" fontWeight="bold">{promotions[0].text}</Text>
      </Box>

      {/* Image Slider */}
      <Box mt="" width="100%" mx="" bg="#ffbb70">
        <Slider {...settings}>
          {featuredProducts.map((item) => (
            <Box key={item.id}>
              <Image src={item.image} alt={item.title} borderRadius="md" />
              {/* <Text mt="2" fontWeight="semibold">{item.title}</Text> */}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default BannerSlider;
