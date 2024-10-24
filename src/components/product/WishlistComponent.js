
  // WishlistComponent.jsx
import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useToast,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import ReviewAndRating from "./ReviewAndRating";
import { Link, useNavigate } from "react-router-dom";

import { useWishlist } from "./WishlistContext"; // Adjust the import path
import { useCart } from "./CartContext";

const WishlistComponent = () => {
  const toast = useToast();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();
  // console.log("99999999999" + wishlistItems.name);

  const handleAddToCart = (product) => {
    // e.stopPropagation();
    if (isInCart(product.productId, product.variantId)) {
      navigate("/cartitem");
    } else {
      // const cartItem = {
      //   ...selectedProduct,
      //    ...selectedVariant
      //    };
      console.log("Adding wishlist item to Cart..... ");
      addToCart(product);
    }
  };

  return (
    <Box p={6} width="full">
      {/* Heading for the Wishlist */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Your Wishlist
      </Text>

      {wishlistItems && wishlistItems.length > 0 ? (
        // Wrap the cards in a responsive grid layout
        <SimpleGrid 
        columns={[2, 2, 3, 4]} spacing={6} px={[2, 4, 6, 8]}>
          {wishlistItems.map((item, index) => (
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
                  removeFromWishlist(item.productId, item.variantId);
                  toast({
                    title: "Removed from Wishlist.",
                    description: `${item.name} has been removed from your wishlist.`,
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
                boxSize="100rem" // Larger size for vertical layout
                objectFit="contain"
                borderTopRadius="lg"
                width="100%"
                // height="200px"
                height={{ base: "150px", md: "200px" }} 
              />

              {/* Product Information */}
              <VStack align="start" spacing={2} p={4}>
                <Text fontWeight="bold" fontSize="0.75rem" noOfLines={2}>
                  {item.name}
                </Text>

                {/* Discount and Price Information */}
                <Flex align="center" gap={2}>
                  {item.discount && (
                    <Text color="red.400" fontSize="0.75rem" >
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
                  <Text fontSize="0.90rem"  fontWeight="bold">
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
                  leftIcon={<AiOutlineShoppingCart />}
                  bg={
                    isInCart(item.productId, item.variantId)
                      ? "grey"
                      : "teal.500"
                  }
                  width="100%"
                  fontSize="0.75rem"
                  py={{ base: 2, md: 3 }}
                  mt={2}
                  // onClick={() => handleAddToCart()}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default action
                    e.stopPropagation(); // Prevent event bubbling
                    handleAddToCart(item);
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
                    ? "Go to Cart"
                    : "Add to Cart"}{" "}
                </Button>
               
              </VStack>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          textAlign="center"
        >
          Your wishlist is empty.
        </Text>
      )}
    </Box>
  );
};

export default WishlistComponent;
