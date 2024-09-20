// import React from 'react';
// import { Flex,Box, Image, Text, Badge, Button, VStack , Icon,
//   Stack,} from '@chakra-ui/react';
//   import { AiFillStar } from "react-icons/ai";


// const ProductCard = ({ product }) => {


//   const cleanImageUrl = product.imageURL.replace(/^["']+|["']+$/g, "");

//   return (
//     <Box
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//     //   bgGradient="linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%)"
//       // bgGradient="linear-gradient(90deg, #F1D3CE 0%, #E6A4B4 100%)"
//       boxShadow="md"
//       p={4}
//       textAlign="center"
//       transition="all 0.2s ease-in-out"
//       _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
//     >
//       <Image
//         src={cleanImageUrl}
//         alt={product.title}
//         boxSize="200px"
//         objectFit="cover"
//         borderRadius="md"
//       />


// <Flex justifyContent="space-between" alignItems="center" mt="4">


// </Flex>


//       <VStack spacing={2} align="start" mt={4}>
//         <Text fontWeight="bold" fontSize="lg">
//           {product.title}
//         </Text>
//         <Text fontSize="md" fontWeight="bold" color="gray.600">
//           ${product.price}
//         </Text>
//         {/* <Text fontSize="sm" color="gray.500">
//           Ratings: {product.ratings}
//         </Text> */}
//         <Stack direction="row" spacing={1} align="center">
//             {/* Rendering star rating */}
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="gray.400" />
//             {/* <Text>({product.reviews})</Text> */}
//           </Stack>
//         <Button
//           variant="solid"
//           colorScheme="cyan"
//           mt={2}
//           // bgGradient="linear-gradient(90deg, #FAEDCE 0%, #B5CFB7 100%)"
//           // _hover={{ bgGradient: 'linear-gradient(90deg, #007ac1 0%, #03a9f4 100%)' }}
//         >
//           Add to Cart
//         </Button>
//       </VStack>



//     </Box>
//   );
// };

// export default ProductCard;


import React from 'react';
import { Flex, Box, Image, Text, Button, VStack, Icon, Stack } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Use Link for navigation


const ProductCard = ({ product }) => {
  // const cleanImageUrl = product.imageURL.replace(/^["']+|["']+$/g, "");  

  // console.log("Product Is is  ..............."+product.productID)

  

  return (

    <Link to={`/product/${product.productID}`}>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      textAlign="left"
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
      width="250px" // Fixing the card width for consistency
    >
      {/* Image */}
      <Image
        src={product.imageURLs}
        alt={product.title}
        width="100%"
        height="200px"
        objectFit="cover"
      />

      <VStack spacing={3} align="stretch" p={4}>
        <Text fontWeight="bold" fontSize="md" noOfLines={2}>
          {product.title}
        </Text>

        
        <Text fontSize="lg" fontWeight="bold" color="blue.600">
          ${product.price}
        </Text>

        <Flex direction="row" alignItems="center">
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="gray.400" />
          <Text ml={2} fontSize="sm" color="gray.600">
            ({product.reviews} Reviews)
          </Text>
        </Flex>

        <Button
          variant="solid"
          colorScheme="cyan"
          width="100%"
          mt={2}
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>

    </Link>
  );
};

export default ProductCard;
