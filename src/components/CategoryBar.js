import React from 'react';
  

import { Box, Flex, Text, Link, Badge } from '@chakra-ui/react';

const CategoryBar = () => {
  const categories = [
    'Lockets',
    'rings',
    'shirts',
    'bracelet',
   
    { name: 'eyewear', new: true },
    { name: 'Shirts', new: true },
    'accessories',
    'about us',
  ];

  return (
    <Box bg="grayish" py={2}>
      <Flex justify="space-around" wrap="wrap">
        {categories.map((category, index) =>
          typeof category === 'string' ? (
            <Link key={index} href="#" color="white" fontSize="sm" mx={2}>
              {category}
            </Link>
          ) : (
            <Link key={index} href="#" color="white" fontSize="sm" mx={2}>
              {category.name}
              {category.new && (
                <Badge ml={1} colorScheme="red" variant="solid" fontSize="0.8em">
                  NEW
                </Badge>
              )}
            </Link>
          )
        )}
      </Flex>
    </Box>
  );
};

export default CategoryBar;
