

//Component Not in use

import React from 'react';
import { Box, Image, Text, Flex, Button, SimpleGrid } from '@chakra-ui/react';

const products = [
    {
        img: 'path_to_product_image_1',
        name: 'BBLUNT Hot Shot - Heat Protection Hair Mist - 150ml | No Sulphate, No...',
        price: '₹425.00',
        oldPrice: '₹499.00'
    },
    {
        img: 'path_to_product_image_2',
        name: 'Tru Hair Ayurvedic Hair Oil Refill Pack-200ml',
        price: '₹378.00'
    },
    {
        img: 'path_to_product_image_3',
        name: 'MORESOON Hair Line Powder For Hair & Beard Root Concealer & Gray...',
        price: '₹499.00',   
        oldPrice: '₹999.00'
    },
    {
        img: 'path_to_product_image_4',
        name: 'Avimee Herbal Scalp & Hair Growth Serum |...',
        price: '₹325.00',
        oldPrice: '₹650.00',
        sale: '50% off Limited time deal'
    },
    {
        img: 'path_to_product_image_5',
        name: 'HK VITALS by HealthKart Biotin Shampoo for Women & Men, Anti Hair...',
        price: '₹284.00',
        oldPrice: '₹299.00'
    },
    {
        img: 'path_to_product_image_6',
        name: 'Noskurf Anti Dandruff Lotion/Contains Climbazole, Piroctone...',
        price: '₹478.00'
    }
];

const AmazonLive = () => {
    return (
        <Box p={4} maxW="1200px" mx="auto">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Amazon LIVE - Watch, Chat & Shop LIVE
            </Text>
            <Button size="sm" colorScheme="blue" mb={2}>
                See more from Amazon Live
            </Button>

            <Flex direction={['column', 'row']} gap={4}>
                <Box flex="1">
                    <Image
                        src="path_to_your_video_thumbnail"
                        alt="Live video thumbnail"
                        mb={2}
                    />
                    <Button size="sm" colorScheme="red">
                        Watch now
                    </Button>
                    <Text fontSize="sm" color="gray.500">
                        Uday Jamwal Amazon Influencer Program
                    </Text>
                </Box>

                <SimpleGrid columns={[1, 3]} spacing={4} flex="2">
                    {products.map((product, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Image src={product.img} alt={product.name} />
                            <Box p={4}>
                                <Text fontSize="md" fontWeight="bold" noOfLines={2}>
                                    {product.name}
                                </Text>
                                <Text fontSize="lg" color="red.500">
                                    {product.price}
                                </Text>
                                {product.oldPrice && (
                                    <Text as="s" fontSize="sm" color="gray.500">
                                        {product.oldPrice}
                                    </Text>
                                )}
                                {product.sale && (
                                    <Text fontSize="sm" color="green.500">
                                        {product.sale}
                                    </Text>
                                )}
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default AmazonLive;
