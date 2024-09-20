import React from 'react';
  
import  { useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';

const Card1 = () => {
  const [hoveredImage, setHoveredImage] = useState('');

  return (
    <Flex>
      <Box
        w="10%"
        p="4"
        borderRight="1px solid gray"
        overflowY="auto"
      >
        <Image
          src={img1}
          alt="Image 1"
          mb="4"
          cursor="pointer"
          onMouseEnter={() => setHoveredImage(img1)}
        />
        <Image
          src={img2}
          alt="Image 2"
          mb="4"
          cursor="pointer"
          onMouseEnter={() => setHoveredImage(img2)}
        />
        {/* Add more images as needed */}
      </Box>

      <Box
        w="70%"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderLeft="1px solid gray"
      >
        {hoveredImage && (
          <Image
            src={hoveredImage}
            alt="Hovered Image"
            boxSize="50%"
            objectFit="contain"
          />
        )}
      </Box>
    </Flex>
  );
};

export default Card1;

  