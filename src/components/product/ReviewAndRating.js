// RatingAndReviews.js
import React from 'react';
import { Flex, Text, Stack, HStack } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai"; // Import necessary icons

const ReviewAndRating = ({ rating, reviewsCount }) => {
  return (
    <Flex direction="column" align="start" mb={4}>
    <Flex align="start" mb={2}>
      
        {[...Array(5)].map((_, index) => {
          if (index < Math.floor(rating)) {
            return <AiFillStar key={index} color="#ECC94B"  boxSize={{ base: "1.5em", md: "1.75em" }}/>;
          } else if (index < rating && index < Math.ceil(rating)) {
            return <AiTwotoneStar key={index} color="#ECC94B" boxSize={{ base: "1.5em", md: "1.75em" }} />;
          } else {
            return <AiOutlineStar key={index}  boxSize={{ base: "1.5em", md: "1.75em" }} />;
          }
        })}
        </Flex>
        <Text color="gray.500" fontSize="0.75rem" >
          ({reviewsCount || 0} Reviews) {/* Display reviews count */}
        </Text>
        
      
    </Flex>
  );
};

export default ReviewAndRating;









