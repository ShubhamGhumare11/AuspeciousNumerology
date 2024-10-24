
  import { extendTheme } from '@chakra-ui/react';

const theme1 = extendTheme({
  colors: {
    primary: '#914f1e',
    secondary: '#deac80',
    tertiary: '#f7dcb9',
    accent: '#b5c18e',
    black:'#2F3645',
    grayish:'#867070',

    backgroundLight: "#fffbda",  // Lightest shade for backgrounds
    backgroundDark: "#ffec9e",   // Light shade for secondary backgrounds
    backgroundprimary: "#ffbb70",          // Base shade for primary elements like buttons
    backgroundaccent: "#FFDFDF",   
  },

  styles: {
    global: {
      body: {
        fontFamily: "Open Sans, sans-serif", // Default font for the body
      },
    },
  },
  fonts: {
    heading: "Roboto, sans-serif", // Font for Heading components
    body: "Open Sans, sans-serif", // Font for Text components
    // Add more fonts as needed
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Poppins, sans-serif", // Font for Text components
        fontWeight: "400", // Normal weight for text
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Roboto, sans-serif", // Font for Heading components
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

export default theme1;
