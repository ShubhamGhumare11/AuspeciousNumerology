import React from 'react';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
 
const categories = [
  {
    name: 'Fruits & vegetables',
    imageSrc: 'path-to-fruits-image', // Replace with the actual image path
  },
  {
    name: 'Eggs, meat & fish',
    imageSrc: 'path-to-eggs-meat-fish-image', // Replace with the actual image path
  },
  {
    name: 'Rice, atta & dal',
    imageSrc: 'path-to-rice-atta-dal-image', // Replace with the actual image path
  },
  {
    name: 'Oil, masala & sauces',
    imageSrc: 'path-to-oil-masala-sauces-image', // Replace with the actual image path
  },
  {
    name: 'Snacks & biscuits',
    imageSrc: 'path-to-snacks-biscuits-image', // Replace with the actual image path
  },
];
 
const ShopByCategory = () => {
  return (
    
<Box bg="white" p={4}>
<Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={8}>
        Shop by Category
</Text>
<Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {categories.map((category, index) => (
<GridItem key={index} textAlign="center">
<Box
              w="120px"
              h="120px"
              bg="green.100"
              borderRadius="full"
              mx="auto"
              mb={4}
              overflow="hidden"
>
<Image
                src={category.imageSrc}
                alt={category.name}
                boxSize="full"
                objectFit="cover"
              />
</Box>
<Text fontSize="md" fontWeight="medium">
              {category.name}
</Text>
</GridItem>
        ))}
</Grid>
</Box>
  );
};
 
export default ShopByCategory;

