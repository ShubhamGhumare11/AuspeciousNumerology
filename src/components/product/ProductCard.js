import React, { useState } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  VStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsTag } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";

import { Link, useNavigate } from 'react-router-dom';

import ReviewAndRating from "./ReviewAndRating";
import { useWishlist } from "./WishlistContext";
import { useCart } from './CartContext'; // Adjust the path accordingly



const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlistItems, isInWishlist } =
    useWishlist();
    const { addToCart,isInCart,removeFromCart } = useCart();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(product  );
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  // const cleanImageUrl = product.imageURL.replace(/^["']+|["']+$/g, "");

  // Function to toggle favorite status
  const toggleFavorite = (e) => {
    e.stopPropagation();

    if (isInWishlist(selectedProduct.productId, selectedVariant.variantId)) {
      removeFromWishlist(selectedProduct.productId, selectedVariant.variantId);
    } else {

      const wishlistItem = {
     ...selectedProduct,
      ...selectedVariant
      };
      addToWishlist(wishlistItem);
    }
  };

  const handleAddToCart = (e) => {
    // e.stopPropagation();
    if (isInCart(selectedProduct.productId, selectedVariant.variantId) ){
      navigate('/cartitem'); 
    } else {
      const cartItem = {
        ...selectedProduct,
         ...selectedVariant
         };
     
      addToCart(cartItem);
    }
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
      maxW="container.xl"
      // transition="all 0.2s ease-in-out"
      // _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      // width={{ base: "100%", sm: "150px", md: "250px" }} // Responsive width

      width="100%"
      //  maxW="250px"
      position="relative"
      mx="auto" 
    >
      {/* Favorite Icon */}
      <Icon
        as={isInWishlist(selectedProduct.productId, selectedVariant.variantId) ? AiFillHeart : AiOutlineHeart}
        color={isInWishlist(selectedProduct.productId, selectedVariant.variantId)? "red.500" : "gray.500"}
        position="absolute"
        top={4}
        right={4}
        onClick={toggleFavorite}
        cursor="pointer"
        
        boxSize={{ base: 5, md: 6 }} 
        zIndex={1}
      />
      {parseFloat(selectedProduct.discount) > 5 && (
        <Icon
          as={BiSolidOffer} 
          color="pink.500"
          position="absolute"
          top={4}
          left={4}
          boxSize={{ base: 5, md: 6 }} 
          zIndex={1}
        />
      )}

      {/* <Flex position="relative" display="inline-block">
  <Icon as={ product.discount > 3 ?BiSolidOffer: " "} boxSize={10} color="blue.500" />
  <Text
    position="absolute"
    top="50%"
    left="60%"
    transform="translate(-50%, -50%)"
    fontSize="0.75rem"
    color="black"
    fontWeight="bold"
  >
{product.discount}
  </Text>
</Flex> */}

      {/* Link wrapping the entire card for navigation */}
      <Link to={`/product/${product.productId}`}>
        <Image
          src={selectedVariant.images[0]}
          // alt={product.variants[0].images[0]}
          width="100%"
          height={{ base: "150px", md: "200px" }} 
          objectFit="contain"
        />

        <VStack spacing={3} align="stretch" p={4}>
          <Text fontWeight="bold" fontSize="0.75rem" noOfLines={2}>
            {selectedProduct.name}
          </Text>

          {/* <Flex>
            <Text fontWeight="" fontSize="0.75rem" color="pink.500" mr={5}>
              -{selectedVariant.discount}
            </Text>
            
            <Text  fontSize="0.75rem" textDecoration="line-through" mx={1}>
              {" "}
              ${selectedProduct.basePrice}{" "}
            </Text>
            <Text fontSize="1rem" fontWeight="bold" color="" mr={5}>
              ${selectedVariant.price}
            </Text>
          </Flex> */}

          <Flex align="center" gap={1}>
                
                    <Text color="red.400"  fontSize="0.75rem">
                      {selectedVariant.discount} OFF
                    </Text>
                
                  <Text f fontSize="0.75rem" textDecoration="line-through" color="gray.500">
                    ${selectedProduct.basePrice}
                  </Text>
                  <Text  fontSize="0.90rem" fontWeight="bold">
                    ${selectedVariant.price} {/* Show selling price if available */}
                  </Text>
                </Flex>

          {/* Review and Ratings */}
          {/* <Flex align="center" mb={4}>
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
              </Text>
            </Stack>
          </Flex> */}

          {/* Review and Ratings - using the new component */}
          <ReviewAndRating
            rating={product.variants[0].rating}
            reviewsCount={product.variants[0].reviewsCount}
          />

          <Button
            // variant="solid"

            variant={isInCart(selectedProduct.productId, selectedVariant.variantId) ? "outline" : "solid"}
            colorScheme={isInCart(selectedProduct.productId, selectedVariant.variantId) ? "black" : "teal"}
            
            bg={isInCart(selectedProduct.productId, selectedVariant.variantId)
              ? "teal.100"
              : "teal.700"}
            width="100%"
            fontSize="0.75rem"
            py={{ base: 2, md: 3 }}
            mt={2}
           
            // onClick={() => handleAddToCart()}
            onClick={(e) => {
    e.preventDefault(); // Prevent default action
    e.stopPropagation(); // Prevent event bubbling
    handleAddToCart();
  }}

            zIndex={1}
          >
            {isInCart(selectedProduct.productId, selectedVariant.variantId)
              ? "Go to Cart"
              : "Add to Cart"}{" "}
          </Button>
        </VStack>
      </Link>
    </Box>
  );
};

export default ProductCard;
