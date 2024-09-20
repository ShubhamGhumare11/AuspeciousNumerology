// import React from 'react';
// import {
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   useDisclosure,
//   IconButton,
  
//   DrawerCloseButton,
//   Box,
//   CloseButton,
//   Heading,
//   Button,
//   DrawerFooter,
//   Input,
// } from '@chakra-ui/react';
// import { FaBars } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

 
// function DrawerToggle() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       {/* <Button onClick={onOpen}>Open</Button> */}

//       <IconButton
//           icon={<FaBars />}
//           aria-label="Open drawer"
//           variant="outline"
//           colorScheme="blue"
//           onClick={onOpen}
//           position="fixed"
//           top="4"
//           left="4"
//           zIndex="tooltip"
//         />
//       <Drawer isOpen={isOpen} onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           <DrawerBody>
//             <form
//               id='my-form'
//               onSubmit={(e) => {
//                 e.preventDefault()
//                 console.log('submitted')
//               }}
//             >
//               <Input name='nickname' placeholder='Type here...' />
//             </form>
//           </DrawerBody>

//           <DrawerFooter>
//             <Button type='submit' form='my-form'>
//               Save
//             </Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   )
// }
 
// export default DrawerToggle;



import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  CloseButton,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 
function DrawerToggle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
 
  return (
    <>
      {!isOpen && (
        <IconButton
          icon={<FaBars />}
          aria-label="Open drawer"
          variant="outline"
          colorScheme="white"
          onClick={onOpen}
          position="fixed"
          top="4"
          left="4"
          zIndex="tooltip"
        />
      )}
 
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <CloseButton aria-label="Close drawer" onClick={onClose} position="absolute" top="1.5" right="1.5" />
            Hello, Sign In
          </DrawerHeader>
          <DrawerBody>
            <Box mb="4">
              <Heading as="h3" size="md" mb="2">Trending</Heading>
 
              <Button
                onClick={() => {
                  navigate('/new-arrivals');
                  onClose();
                }}
                mb="1"
                display="block"
              >
                New Arrivals
              </Button>
 
              <Button
                onClick={() => {
                  navigate('/best-sellers');
                  onClose();
                }}
                mb="1"
                display="block"
              >
                Best Sellers
              </Button>
 
              <Button
                onClick={() => {
                  navigate('/top-rated');
                  onClose();
                }}
                mb="1"
                display="block"
              >
                Top Rated
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
 
export default DrawerToggle;