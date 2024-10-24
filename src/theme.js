
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Bona Nova SC, sans-serif", // Default font for the body
      },
    },
  },
  fonts: {
    heading: "Bona Nova SC, sans-serif", // Font for Heading components
    body: "Open Sans, sans-serif", // Font for Text components
    // Add more fonts as needed
  },
  components: {
    Text: {
      baseStyle: {
        // fontFamily: "Poppins, sans-serif", // Font for Text components

        fontFamily:"Open Sans, sans-serif", 
        fontWeight: "400", // Normal weight for text
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Bona Nova SC, sans-serif", // Font for Heading components
        fontWeight: "700", // Bold weight for headings
      },
    },
    Box: {
      baseStyle: {
        fontFamily: "Open Sans, sans-serif", // Font for Box components
      },
    },
    // You can customize other components similarly
  },
});

export default theme;
