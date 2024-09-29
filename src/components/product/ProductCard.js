
  
  
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


import React ,{useState}from 'react';
import { Flex, Box, Image, Text, Button, VStack, Icon, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import {
  
  
  
  AiOutlineQuestionCircle,
} from "react-icons/ai"; // Import necessary icons
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineHeart, // Import heart icon for favorites
  AiFillHeart,   // Import filled heart icon for favorites
} from "react-icons/ai"; // Import necessary icons


const ProductCard = ({ product }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  // const cleanImageUrl = product.imageURL.replace(/^["']+|["']+$/g, "");  

  // Function to toggle favorite status
  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevents triggering the Link on click
    setIsFavorite((prev) => !prev); // Toggle the favorite state
  };
  // console.log("Product Is is  ..............."+product.productId)
  // console.log("Product variants  ..............."+product.variants[0].images[0])

  

  return (
 
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      textAlign="left"
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      width="250px" // Fixing the card width for consistency
      position="relative" // Set position to relative for positioning the favorite icon
    >
      {/* Favorite Icon */}
      <Icon
        as={isFavorite ? AiFillHeart : AiOutlineHeart} // Toggle between filled and outline heart
        color={isFavorite ? "red.500" : "gray.500"} // Change color based on favorite state
        position="absolute" // Position the icon absolutely
        top={4} // Distance from the top
        right={4} // Distance from the right
        onClick={toggleFavorite} // Call the toggle function
        cursor="pointer" // Change cursor to pointer for better UX
        boxSize={6} // Set size for the icon
        zIndex={1} // Ensure the icon is above other elements
      />

      {/* Link wrapping the entire card for navigation */}
      <Link to={`/product/${product.productId}`}>
        {/* Image */}
        <Image
          src={product.variants[0].images[0]} // Image source
          alt={product.variants[0].images[0]}
          width="100%"
          height="200px"
          objectFit="contain"
        />

        <VStack spacing={3} align="stretch" p={4}>
          <Text fontWeight="bold" fontSize="md" noOfLines={2}>
            {product.name}
          </Text>

          <Flex>
            <Text fontSize="lg" fontWeight="" color="pink.500" mr={5}>
              -{product.variants[0].discount}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="" mr={5}>
              ${product.basePrice}
            </Text>
          </Flex>

          {/* Review and Ratings */}
          <Flex align="center" mb={4}>
            <Stack direction="row" spacing={1} align="center">
              {[...Array(5)].map((_, index) => {
                if (index < Math.floor(product.variants[0].rating)) {
                  return <AiFillStar key={index} color="#ECC94B" />;
                } else if (
                  index < product.rating &&
                  index < Math.ceil(product.variants[0].rating)
                ) {
                  return <AiTwotoneStar key={index} color="#ECC94B" />;
                } else {
                  return <AiOutlineStar key={index} />;
                }
              })}
              <Text color="gray.500" fontSize="sm">
                ({product.variants[0].reviewsCount || 0} Reviews){" "}
                {/* Display reviews count */}
              </Text>
            </Stack>
          </Flex>

          <Button variant="solid" colorScheme="teal" width="100%" mt={2}>
            Add to Cart
          </Button>
        </VStack>
      </Link>
    </Box>
  
  );
};

export default ProductCard;
