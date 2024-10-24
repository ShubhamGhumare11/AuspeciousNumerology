// import React from 'react';
// import { Box, Flex, Link, Badge } from '@chakra-ui/react';

// const CategoryBar = () => {
//   const categories = [
//     'Lockets',
//     'Rings',  
//     'Shirts',
//     'Bracelet',
//     { name: 'Eyewear', new: true },
//     { name: 'Shirts', new: true },
//     'Accessories',
//     'About Us',
//   ];

//   return (
//     <Box bg="gray" py="1em">
//       <Flex justify="space-around" wrap="wrap">
//         {categories.map((category, index) =>
//           typeof category === 'string' ? (
//             <Link key={index} href="#" color="white" fontSize="1em" mx={2}>
//               {category}
//             </Link>
//           ) : (
//             <Link key={index} href="#" color="white" fontSize="1em" mx={2}>
//               {category.name}
//               {category.new && (
//                 <Badge ml={1} colorScheme="red" variant="solid" fontSize="0.8em">
//                   NEW
//                 </Badge>
//               )}
//             </Link>
//           )
//         )}
//       </Flex>
//     </Box>
//   );
// };

// export default CategoryBar;





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
    <Box bg="gray.700" py={{ base: '1rem', md: '1.5rem', lg: '2rem' }}>
      <Flex
        justify={{ base: 'center', md: 'space-around' }}
        wrap="wrap"
        direction={{ base: 'row', md: 'row' }}
        alignItems="center"
      >
        {categories.map((category, index) =>
          typeof category === 'string' ? (
            <Link
              key={index}
              href="#"
              color="white"
              fontSize={{ base: '1rem', md: '1.25rem', lg: '1.5rem' }} // Responsive font sizes using rem
              mx={{ base: '0.5rem', md: '1rem', lg: '1.5rem' }}
              my={{ base: '0.5rem', md: '0rem' }} // Adds spacing between links on mobile
            >
              {category}
            </Link>
          ) : (
            <Link
              key={index}
              href="#"
              color="white"
              fontSize={{ base: '1rem', md: '1.25rem', lg: '1.5rem' }} // Responsive font sizes using rem
              mx={{ base: '0.5rem', md: '1rem', lg: '1.5rem' }}
              my={{ base: '0.5rem', md: '0rem' }} // Adds spacing between links on mobile
            >
              {category.name}
              {category.new && (
                <Badge
                  ml="0.5rem"
                  colorScheme="red"
                  variant="solid"
                  fontSize={{ base: '0.75rem', md: '0.9rem' }} // Responsive badge font size
                >
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
