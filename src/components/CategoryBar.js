import React from 'react';
import { Box, Flex, Link, Badge } from '@chakra-ui/react';

const CategoryBar = () => {
  const categories = [
    'Lockets',
    'Rings',  
    'Shirts',
    'Bracelet',
    { name: 'Eyewear', new: true },
    { name: 'Shirts', new: true },
    'Accessories',
    'About Us',
  ];

  return (
    <Box bg="gray" py="1em">
      <Flex justify="space-around" wrap="wrap">
        {categories.map((category, index) =>
          typeof category === 'string' ? (
            <Link key={index} href="#" color="white" fontSize="1em" mx={2}>
              {category}
            </Link>
          ) : (
            <Link key={index} href="#" color="white" fontSize="1em" mx={2}>
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
