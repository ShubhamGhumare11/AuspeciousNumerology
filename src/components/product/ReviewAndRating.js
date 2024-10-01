// RatingAndReviews.js
import React from 'react';
import { Flex, Text, Stack } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai"; // Import necessary icons

const ReviewAndRating = ({ rating, reviewsCount }) => {
  return (
    <Flex align="center" mb={4}>
      <Stack direction="row" spacing={1} align="center">
        {[...Array(5)].map((_, index) => {
          if (index < Math.floor(rating)) {
            return <AiFillStar key={index} color="#ECC94B" />;
          } else if (index < rating && index < Math.ceil(rating)) {
            return <AiTwotoneStar key={index} color="#ECC94B" />;
          } else {
            return <AiOutlineStar key={index} />;
          }
        })}
        <Text color="gray.500" fontSize="sm">
          ({reviewsCount || 0} Reviews) {/* Display reviews count */}
        </Text>
      </Stack>
    </Flex>
  );
};

export default ReviewAndRating;
