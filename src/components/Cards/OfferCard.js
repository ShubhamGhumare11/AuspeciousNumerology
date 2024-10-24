import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaRegFileCode } from 'react-icons/fa';

// Sample data for the slides
const slides = [
  {
    id: 1,
    image: 'https://cmsimages.shoppersstop.com/Private_Brand_main_banner_web_58b22e21c8/Private_Brand_main_banner_web_58b22e21c8.png',
    title: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://cmsimages.shoppersstop.com/fragrances_main_banner_web_ebab756512/fragrances_main_banner_web_ebab756512.png',
    title: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://cmsimages.shoppersstop.com/main_banner_web_78707b04e1/main_banner_web_78707b04e1.png',
    title: 'Slide 3',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change slides at a fixed interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      height={{ base: '12rem', md: '18rem', lg: '24rem' }} // Responsive height in rem
      overflow="hidden"
    >
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity={index === currentIndex ? 1 : 0}
          transition="opacity 0.5s ease"
          py={5}
            my={5}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Text
            position="absolute"
            bottom="2rem"
            left="2rem"
            fontSize={{ base: '1rem', md: '1.25rem', lg: '1.5rem' }} // Responsive font size in rem
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            {slide.title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Slideshow;