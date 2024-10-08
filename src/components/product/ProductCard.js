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
import { Link } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import ReviewAndRating from "./ReviewAndRating";
import { useWishlist } from "./WishlistContext";

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlistItems, isInWishlist } =
    useWishlist();

  // const cleanImageUrl = product.imageURL.replace(/^["']+|["']+$/g, "");

  // Function to toggle favorite status
  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isInWishlist(product.productId)) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(product);
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
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      width={{ base: "100%", sm: "200px", md: "250px" }} // Responsive width
     
      // width="100%"
       maxW="250px" 
      position="relative"
      mx="auto" // Center the card

    >
      {/* Favorite Icon */}
      <Icon
        as={isInWishlist(product.productId) ? AiFillHeart : AiOutlineHeart}
        color={isInWishlist(product.productId) ? "red.500" : "gray.500"}
        position="absolute"
        top={4}
        right={4}
        onClick={toggleFavorite}
        cursor="pointer"
        boxSize={{ base: 5, md: 6 }} // Responsive icon size
        zIndex={1}
      />

      {/* Link wrapping the entire card for navigation */}
      <Link to={`/product/${product.productId}`}>
        <Image
          src={product.variants[0].images[0]}
          // alt={product.variants[0].images[0]}
          width="100%"
          height={{ base: "150px", md: "200px" }} // Responsive image height
          objectFit="contain"
        />

        <VStack spacing={3} align="stretch" p={4}>
          <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} noOfLines={2}>
            {product.name}
          </Text>

          <Flex>
            <Text fontWeight=""  fontSize={{ base: "sm", md: "lg" }} color="pink.500" mr={5}>
              -{product.variants[0].discount}
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }}fontWeight="bold" color="" mr={5}>
              ${product.basePrice}
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
          <Button variant="solid" colorScheme="teal" width="100%" mt={2}>
            Add to Cart
          </Button>
        </VStack>
      </Link>
    </Box>
  );
};

export default ProductCard;
