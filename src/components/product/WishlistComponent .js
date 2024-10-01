// WishlistComponent.jsx
import React from 'react';
import { Box, Image, Text, Button, VStack, HStack, Icon, useToast, Flex, SimpleGrid } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { useWishlist } from './WishlistContext'; // Adjust the import path

const WishlistComponent = () => {
  const toast = useToast();
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <Box p={6} width="full">
      {/* Heading for the Wishlist */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Your Wishlist
      </Text>

      {wishlistItems && wishlistItems.length > 0 ? (
        // Wrap the cards in a responsive grid layout
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} px={[2, 4, 6, 8]}>
          {wishlistItems.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              textAlign="center" // Center text for a vertical layout
              transition="all 0.2s ease-in-out"
              _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
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
                  removeFromWishlist(item.productId);
                  toast({
                    title: "Removed from Wishlist.",
                    description: `${item.name} has been removed from your wishlist.`,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              />

              {/* Product Image */}
              <Image
                src={item.images}
                alt={item.name}
                boxSize="200px" // Larger size for vertical layout
                objectFit="contain"
                borderTopRadius="lg"
                width="100%"
                height="200px"
              />

              {/* Product Information */}
              <VStack align="start" spacing={2} p={4}>
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {item.name}
                </Text>

                {/* Discount and Price Information */}
                <Flex align="center" gap={2}>
                  {item.variants[0].discount && (
                    <Text color="red.400" fontSize="md">
                      {item.variants[0].discount}% OFF
                    </Text>
                  )}
                  <Text fontSize="lg" textDecoration="line-through" color="gray.500">
                    ${item.basePrice}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    ${item.variants[0].price} {/* Show selling price if available */}
                  </Text>
                </Flex>

                {/* Display Rating */}
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
                </HStack>

                {/* Action Button */}
                <Button
                  leftIcon={<AiOutlineShoppingCart />}
                  colorScheme="teal"
                  variant="solid"
                  width="100%"
                  mt={2}
                  onClick={() => {
                    toast({
                      title: "Moved to Cart.",
                      description: `${item.name} has been added to your cart.`,
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text fontSize="xl" fontWeight="bold" color="gray.600" textAlign="center">
          Your wishlist is empty.
        </Text>
      )}
    </Box>
  );
};

export default WishlistComponent;
