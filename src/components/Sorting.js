import React from 'react';
import { Box, Select, Text } from '@chakra-ui/react';

const Sorting = () => {
  return (
    <Box bg="gray.100" p={4} mb={4} borderRadius="md">
      <Text fontSize="lg" mb={2}>Sort By</Text>
      <Select placeholder="Select sorting option">
        <option value="relevance">Relevance</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </Select>
    </Box>
  );
};

export default Sorting;
