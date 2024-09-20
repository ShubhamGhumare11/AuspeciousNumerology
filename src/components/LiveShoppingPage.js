  // import React, { useState } from 'react';
  // import {
  //   Box, Image, Text, Flex, Button, Badge, VStack, Modal, ModalOverlay, ModalContent,
  //   ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, AspectRatio
  // } from '@chakra-ui/react';

  // const LiveShoppingPage = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [videoUrl, setVideoUrl] = useState('');

  //   const handleVideoClick = (url) => {
  //     setVideoUrl(url);
  //     onOpen();
  //   };

  //   return (
  // <Box bg="gray.100" p={4}>
  // <Text fontSize="2xl" fontWeight="bold" mb={4}>
  //         Amazon LIVE - Watch, Chat & Shop LIVE
  // </Text>
  // <Flex>
  //         {/* Video Section */}
  // <Box w="40%" bg="white" p={4} borderRadius="md" boxShadow="md" onClick={() => handleVideoClick('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
  // <Image
  //             src="path-to-your-image" // Replace with your live video thumbnail
  //             alt="Live Video"
  //             borderRadius="md"
  //             mb={2}
  //             cursor="pointer"
  //           />
  // <Button colorScheme="red" size="sm" mb={2}>
  //             LIVE
  // </Button>
  // <Text>🔴 122 viewers</Text>
  // <Text mt={2}>ShoppingBandhu</Text>
  // <Badge mt={1} colorScheme="blue">
  //             Amazon Influencer Program
  // </Badge>
  // </Box>

  //         {/* Products Section */}
  // <Box w="60%" ml={4}>
  // <Flex wrap="wrap" justify="space-between">
  // <ProductCard
  //               imageSrc="path-to-product-image-1"
  //               title="boAt Aavante Bar 610 Bluetooth Soundbar with 25W RMS Signature Sound"
  //               price="₹1,899.00"
  //               originalPrice="₹5,990.00"
  //             />
  // <ProductCard
  //               imageSrc="path-to-product-image-2"
  //               title="Blaupunkt Newly Launched SBA20 Pro 25W Bluetooth Soundbar"
  //               price="₹1,699.00"
  //               originalPrice="₹4,999.00"
  //             />
  // <ProductCard
  //               imageSrc="path-to-product-image-3"
  //               title="GOVO Gosurround 300 25W Bluetooth SoundBar with 2000 Mah Battery"
  //               price="₹1,499.00"
  //               originalPrice="₹5,499.00"
  //             />
  // <ProductCard
  //               imageSrc="path-to-product-image-4"
  //               title="VW Chaser Bar | 30W Bluetooth SoundBar | 2.0 Channel"
  //               price="₹1,499.00"
  //               originalPrice="₹4,999.00"
  //             />
  // </Flex>
  // </Box>
  // </Flex>

  //       {/* Modal for YouTube Video */}
  // <Modal isOpen={isOpen} onClose={onClose} size="xl">
  // <ModalOverlay />
  // <ModalContent>
  // <ModalHeader>Live Video</ModalHeader>
  // <ModalCloseButton />
  // <ModalBody>
  // <AspectRatio ratio={16 / 9}>
  // <iframe
  //                 src={videoUrl}
  //                 title="YouTube video player"
  //                 frameBorder="0"
  //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //                 allowFullScreen
  // ></iframe>
  // </AspectRatio>
  // </ModalBody>

  //           <ModalFooter>
  // <Button colorScheme="blue" mr={3} onClick={onClose}>
  //               Close
  // </Button>
  // </ModalFooter>
  // </ModalContent>
  // </Modal>
  // </Box>
  //   );
  // };

  // const ProductCard = ({ imageSrc, title, price, originalPrice }) => {
  //   return (
  // <VStack
  //       bg="white"
  //       p={4}
  //       borderRadius="md"
  //       boxShadow="md"
  //       mb={4}
  //       w="48%"
  //       align="flex-start"
  // >
  // <Image src={imageSrc} alt={title} borderRadius="md" mb={2} />
  // <Text fontSize="sm" fontWeight="bold">
  //         {title}
  // </Text>
  // <Text fontSize="lg" color="green.600" fontWeight="bold">
  //         {price}
  // </Text>
  // <Text fontSize="sm" textDecoration="line-through" color="gray.500">
  //         {originalPrice}
  // </Text>
  // </VStack>
  //   );
  // };

  // export default LiveShoppingPage;

  import React, { useState } from "react";
  import {
    Box,
    Image,
    Text,
    Flex,
    Button,
    Badge,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    AspectRatio,
    CardHeader,
    CardBody,
    Card,
  } from "@chakra-ui/react";
  import liveanimation from "../assets/Animation - 1726042712075.json"
import Lottie from "lottie-react";

  const LiveShoppingPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [videoUrl, setVideoUrl] = useState("");

    const handleVideoClick = (url) => {
      setVideoUrl(url);
      onOpen();
    };

    return (
      <Box bg="backgroundLight" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Auspicious Numerology LIVE - Watch, Chat & Services
        </Text>
        <Flex>
          {/* Video Section */}
          {/* <Box
            w="40%"
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            onClick={() =>
              handleVideoClick("https://www.youtube.com/embed/irRkEEAtnug")
            }
          >
          
            <iframe
              src={`https://www.youtube.com/embed/irRkEEAtnug`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="75%"
            ></iframe>
            <Button colorScheme="red" size="sm" mb={2}>
              LIVE
            </Button>

            <Box display="flex" alignItems="center">
              <Image
                src="data:image/png;base64,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" // Replace with your YouTube icon image path
                alt="YouTube Channel Icon"
                boxSize="20px"
                mr={2}
              />

              <Text mt={2}>Auspicious Numerology</Text>
            </Box>
            <Badge mt={1} colorScheme="blue">
              2024 कैसा होगा आपके मूलांक के लिए ?
            </Badge>
          </Box> */}
  {/* Live video  */}
          <Box
            position="relative"
            width="full"
            maxWidth="600px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
          >
            <Card>
              <Box
                as="iframe"
                width="full"
                height="250px"
                src="https://www.youtube.com/embed/RDV3Z1KCBvo?autoplay=1&mute=1"
                title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <CardBody p={4}>
                <Text fontSize="lg" color="black" fontWeight="semibold">
                  YouTube Video
                </Text> 
                <Lottie animationData={liveanimation}></Lottie>
              </CardBody>
            </Card>
          </Box>

          {/* Products Section */}
          <Box w="60%" ml={4}>
            <Flex wrap="wrap" justify="space-between">
              <ProductCard
                imageSrc="path-to-product-image-1"
                title="Lucky Number pendant suggestion or Gem stone suggestion"
                price="₹1,899.00"
                originalPrice="₹5,990.00"
              />
              <ProductCard
                imageSrc="path-to-product-image-2"
                title="Vehicle Number Selection"
                price="₹1,699.00"
                originalPrice="₹4,999.00"
              />
              <ProductCard
                imageSrc="path-to-product-image-3"
                title="Business name suggestion"
                price="₹1,499.00"
                originalPrice="₹5,499.00"
              />
              <ProductCard
                imageSrc="path-to-product-image-4"
                title="love or marriage compatibility consultation"
                price="₹1,499.00"
                originalPrice="₹4,999.00"
              />
            </Flex>
          </Box>
        </Flex>

        
      </Box>
    );
  };

  const ProductCard = ({ imageSrc, title, price, originalPrice }) => {
    return (
      <VStack
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        mb={4}
        w="48%"
        align="flex-start"
      >
        <Image src={imageSrc} alt={title} borderRadius="md" mb={2} />
        <Text fontSize="sm" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="lg" color="green.600" fontWeight="bold">
          {price}
        </Text>
        <Text fontSize="sm" textDecoration="line-through" color="gray.500">
          {originalPrice}
        </Text>
      </VStack>
    );
  };

  export default LiveShoppingPage;
