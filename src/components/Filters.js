
//   import React from 'react';
// import { Box, VStack, Checkbox, Text, Stack, Input, Select } from '@chakra-ui/react';

// const Filters = () => {
//   return (
//     <Box bg="gray.100" p={4} mb={4} borderRadius="md">
//       <Text fontSize="lg" mb={2}>Filters</Text>
//       <VStack align="start" spacing={4}>
//         <Box>
//           <Text fontWeight="bold" mb={2}>Price</Text>
//           <Stack spacing={2}>
//             <Select placeholder="Select price range">
//               <option value="low-high">Low to High</option>
//               <option value="high-low">High to Low</option>
//             </Select>
//           </Stack>
//         </Box>
//         <Box>
//           <Text fontWeight="bold" mb={2}>Brands</Text>
//           <Stack spacing={2}>
//             <Checkbox>Brand A</Checkbox>
//             <Checkbox>Brand B</Checkbox>
//             <Checkbox>Brand C</Checkbox>
//             {/* Add more brands as needed */}
//           </Stack>
//         </Box>
//         <Box>
//           <Text fontWeight="bold" mb={2}>Size</Text>
//           <Stack spacing={2}>
//             <Checkbox>Small</Checkbox>
//             <Checkbox>Medium</Checkbox>
//             <Checkbox>Large</Checkbox>
//             {/* Add more sizes as needed */}
//           </Stack>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default Filters;



import React from 'react';
import { Box, VStack, Checkbox, Text, Stack, Select, useBreakpointValue } from '@chakra-ui/react';

const Filters = () => {
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' }); // Stack vertically on smaller screens, horizontally on larger

  return (
    <Box
      bg="gray.100"
      p={{ base: 4, md: 6 }} // Padding adjusts based on screen size
      mb={4}
      borderRadius="md"
      w={{ base: '100%', md: '300px' }} // Full width on mobile, fixed width on desktop
    >
      <Text fontSize={{ base: 'md', md: 'lg' }} mb={2}>Filters</Text>

      <VStack align="start" spacing={4}>
        {/* Price Filter */}
        <Box width="100%">
          <Text fontWeight="bold" mb={2}>Price</Text>
          <Stack direction={stackDirection} spacing={2}>
            <Select placeholder="Select price range">
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </Select>
          </Stack>
        </Box>

        {/* Brands Filter */}
        <Box width="100%">
          <Text fontWeight="bold" mb={2}>Brands</Text>
          <Stack direction={stackDirection} spacing={2}>
            <Checkbox>Brand A</Checkbox>
            <Checkbox>Brand B</Checkbox>
            <Checkbox>Brand C</Checkbox>
            {/* Add more brands as needed */}
          </Stack>
        </Box>

        {/* Size Filter */}
        <Box width="100%">
          <Text fontWeight="bold" mb={2}>Size</Text>
          <Stack direction={stackDirection} spacing={2}>
            <Checkbox>Small</Checkbox>
            <Checkbox>Medium</Checkbox>
            <Checkbox>Large</Checkbox>
            {/* Add more sizes as needed */}
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Filters;
