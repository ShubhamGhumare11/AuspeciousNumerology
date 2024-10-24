import React from 'react';
import { Box } from '@chakra-ui/react';

const VideoSection = () => {
  return (
    <Box
      position="relative"
      width="100%" // Full width of the page
      height={{ base: '18.75rem', md: '31.25rem', lg: '37.5rem' }} // Responsive height in rem
      overflow="hidden"
    >
      <Box
        as="iframe"
        width="100%" // Full width iframe
        height="100%" // Takes the full height of the container
        src="https://www.youtube.com/embed/CTrWSidFv-A?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
};

export default VideoSection;














