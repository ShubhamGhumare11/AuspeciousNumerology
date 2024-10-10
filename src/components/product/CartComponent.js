import React from 'react';
import { Box, Image, Text, Button, VStack, HStack, Icon, useToast, Flex, SimpleGrid } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar,AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import ReviewAndRating from "./ReviewAndRating";

import { useCart } from './CartContext'; // Adjust the import path
import { Link } from 'react-router-dom';

const CartComponent = () => {
  const toast = useToast();
  const { cartItems, removeFromCart, clearCart,isInCart } = useCart();

  return (
    <Box p={6} width="full">
      {/* Heading for the Cart */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Your Cart
      </Text>

      {cartItems && cartItems.length > 0 ? (
        // Wrap the cards in a responsive grid layout
        <SimpleGrid columns={[2, 2, 3, 4]} spacing={6} px={[2, 4, 6, 8]}>
          {cartItems.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              textAlign="center" // Center text for a vertical layout
              // transition="all 0.2s ease-in-out"
              // _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
             
              width="100%" // Set width to full for grid items
              position="relative" // Set position to relative for positioning the remove icon
            >
              {/* Position the Remove Icon at the top-right corner of the card */}
              <Icon
                as={AiOutlineClose}
                position="absolute"
                top={2}
                right={2}
                boxSize={6}
                color="gray.600"
                cursor="pointer"
                _hover={{ color: "red.500" }}
                onClick={() => {
                  removeFromCart(item.productId, item.variantId); // Remove item by ID
                  toast({
                    title: "Removed from Cart.",
                    description: `${item.name} has been removed from your cart.`,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              />


<Link to={`/product/${item.productId}`}>

              {/* Product Image */}
              <Image
                src={item.images}
                alt={item.name}
                boxSize="200px" // Larger size for vertical layout
                objectFit="contain"
                borderTopRadius="lg"
                width="100%"
                // height="200px"
                height={{ base: "150px", md: "200px" }} 
              />

              {/* Product Information */}
              {/* <VStack align="start" spacing={2} p={4}>
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {item.name}
                </Text>

           
                <Flex align="center" gap={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    ${item.price}
                  </Text>
                  <Text fontSize="lg">
                    x {item.quantity}
                  </Text>
                </Flex>

                <HStack spacing={1}>
                  {[...Array(5)].map((_, idx) => (
                    <Icon
                      as={idx < item.rating ? AiFillStar : AiOutlineStar}
                      color={idx < item.rating ? "#ECC94B" : "gray.400"}
                      key={idx}
                    />
                  ))}
                  <Text color="gray.500" fontSize="sm">
                    ({item.reviewsCount || 0} Reviews)
                  </Text>
                </HStack> */}

                 {/* Product Information */}
              <VStack align="start" spacing={2} p={4}>
                <Text fontWeight="bold" fontSize="0.75rem" noOfLines={2}>
                  {item.name}
                </Text>

                {/* Discount and Price Information */}
                <Flex align="center" gap={2}>
                  {item.discount && (
                    <Text color="red.400" fontSize="0.75rem">
                      {item.discount} OFF
                    </Text>
                  )}
                  <Text
                    fontSize="0.75rem"
                    textDecoration="line-through"
                    color="gray.500"
                  >
                    ${item.basePrice}
                  </Text>
                  <Text fontSize="0.90rem" fontWeight="bold">
                    ${item.price} {/* Show selling price if available */}
                  </Text>
                </Flex>

              
                <ReviewAndRating
                  rating={item.rating}
                  reviewsCount={item.reviewsCount}
                />


                

                {/* Action Button */}
                <Button
                  variant="solid"
                  leftIcon={<AiOutlineCheckCircle />}
                  bg={
                    isInCart(item.productId, item.variantId)
                      ? "teal.500"
                      : "grey"
                  }
                  width="100%"
                  fontSize="0.75rem"
                  py={{ base: 2, md: 3 }}
                  mt={2}
                  // onClick={() => handleAddToCart()}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default action
                    e.stopPropagation(); // Prevent event bubbling
                    // handleProceedToCheckOut(item);
                    toast({
                      title: "Moved to Cart.",
                      description: `${item.name} has been added to your cart.`,
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                  zIndex={1}
                >
                  {isInCart(item.productId, item.variantId)
                    ? "Proceed To CheckOut"
                    : " "}{" "}
                </Button>
              </VStack>

              </Link>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text fontSize="xl" fontWeight="bold" color="gray.600" textAlign="center">
          Your cart is empty.
        </Text>
      )}

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <Button
          colorScheme="red"
          variant="outline"
          mt={4}
          onClick={clearCart}
          width="full"
        >
          Clear Cart
        </Button>
      )}
    </Box>
  );
};

export default CartComponent;
