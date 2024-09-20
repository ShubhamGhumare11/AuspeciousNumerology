import React from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import boxanimation from '../assets/Animation - 1726040146454.json';

import searchanimation from '../assets/Animation - 1726041831956.json';
import Lottie from "lottie-react";

const bestSellers = [
    { id: 1, image: 'https://www.gonoise.com/cdn/shop/files/1_a5b3bc51-8a02-44ba-9ca4-383470c4c017.png?v=1711280604', title: 'Product 1', price: '$25' },
    { id: 2, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3CHMJKBA1ToiJusoM3CnlyE1n4iag9AbsnSyyoL94k72baHjY5ci1hLcTPyK6mxc6MKdflSmriteq50wZoo9dcc1HTlMFnmy7ihcGiBf2', title: 'Product 2', price: '$30' },
    { id: 3, image: 'https://www.pandit.com/cdn/shop/files/amethyst_lucky_bracelet_main_product_image_204.jpg?v=1719557278&width=990', title: 'Product 3', price: '$45' },
    { id: 4, image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg', title: 'Product 4', price: '$60' },

    
    { id: 5, image: 'https://keetaluxury.com/cdn/shop/files/cushion-conquer-garnet-ring-us-4-rings-695.png?v=1688556867&width=1000', title: 'Product 1', price: '$25' },
    { id: 6, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3CHMJKBA1ToiJusoM3CnlyE1n4iag9AbsnSyyoL94k72baHjY5ci1hLcTPyK6mxc6MKdflSmriteq50wZoo9dcc1HTlMFnmy7ihcGiBf2', title: 'Product 2', price: '$30' },
    { id: 8, image: 'https://goeye.in/cdn/shop/files/VG9003MG5421-7_720x.jpg?v=1712816471', title: 'Product 4', price: '$60' },
    
  ];
  
const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1,

    autoplay: true, // Enables autoplay
    autoplaySpeed: 1000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      mt=""
      textAlign="center"
      bgGradient="linear-gradient(180deg, #f7c94b 0%, #f4939f 100%)"
    >

<Flex alignItems="center" justifyContent="center"  mb="5">
<Box width="100px" height="100px">
          {" "}
          {/* You can adjust the width and height */}
          <Lottie animationData={boxanimation} />
        </Box>
      <Text fontSize="4xl" fontWeight="bold" mb="5">
        BESTSELLERS
      </Text>

      <Box width="120px" height="120px">
          {" "}
          {/* You can adjust the width and height */}
          <Lottie animationData={searchanimation} />
        </Box>
      </Flex>
      <Box width="80%" mx="auto">
        <Slider {...settings}>
          {bestSellers.map((item) => (
            <Box key={item.id} textAlign="center" p="4">
              <Image src={item.image} alt={item.title} borderRadius="lg" />
              <Text mt="3" fontWeight="semibold">
                {item.title}
              </Text>
              <Text color="gray.500">{item.price}</Text>
            </Box>
          ))}
        </Slider>
      </Box>
      <Button mt="8" colorScheme="blackAlpha" variant="solid" size="lg">
        Shop Bestsellers
      </Button>
    </Box>
  );
};

export default BestSellers;



