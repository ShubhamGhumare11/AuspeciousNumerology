import { Box, Text, Grid, Icon } from "@chakra-ui/react";
import { FaShippingFast, FaRedo, FaGem, FaMoneyBillAlt, FaLock } from "react-icons/fa";

const FeatureCards = () => {
  const features = [
    { icon: FaShippingFast, text: "Free Shipping" },
    { icon: FaRedo, text: "Easy Returns & Exchange" },
    { icon: FaGem, text: "Premium Quality" },
    { icon: FaMoneyBillAlt, text: "COD Available" },
    { icon: FaLock, text: "Safe & Secure Payment" },
  ];

  return (
    <Box py={8} px={4} >
      {/* Responsive Grid Layout */}
      <Grid 
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]} 
        gap={6}
        justifyItems="center" 
          alignItems="center"
      >
        {features.map((feature, index) => ( 
          <Box 
            key={index} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            p={2} 
			     width="100px"
          height="100px"
            borderWidth={1} 
            borderRadius="full" 
           
			transition="transform 0.2s, box-shadow 0.2s"
			_hover={{
            transform: "scale(1.1)", // Increase the size on hover
            boxShadow: "xl",
          }}
            bg="white"
            fontSize="0.9rem" 
          >
            {/* Feature Icon */}
            <Icon as={feature.icon}  w={10} h={10} color="teal.500" mb={2}  boxSize="1.5rem"  />
            {/* Feature Text */}
            <Text  fontSize="0.75rem"  fontWeight="bold" textAlign="center">
              {feature.text}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCards;

